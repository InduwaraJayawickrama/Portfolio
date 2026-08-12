import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];

    // Resize canvas to match the parent container size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        
        // Physics: small drift in any direction
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.4;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.initialSize = Math.random() * 3.5 + 1.5; // size between 1.5px and 5px
        this.size = this.initialSize;
        this.maxLife = 1500; // 1.5 seconds lifespan
        this.startTime = Date.now();
        this.alpha = 1;
        
        // Mix: 75% simple dots, 25% minimalist four-pointed stars
        this.type = Math.random() > 0.75 ? 'star' : 'dot';
      }

      update() {
        const elapsed = Date.now() - this.startTime;
        const progress = elapsed / this.maxLife;
        this.alpha = Math.max(0, 1 - progress);
        this.size = this.initialSize * this.alpha;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;

        if (this.type === 'dot') {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'star') {
          const spikes = 4;
          const outerRadius = this.size * 1.3;
          const innerRadius = this.size * 0.35;
          let rot = Math.PI / 2 * 3;
          let x = this.x;
          let y = this.y;
          let step = Math.PI / spikes;

          ctx.beginPath();
          ctx.moveTo(this.x, this.y - outerRadius);
          for (let i = 0; i < spikes; i++) {
            x = this.x + Math.cos(rot) * outerRadius;
            y = this.y + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = this.x + Math.cos(rot) * innerRadius;
            y = this.y + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
          }
          ctx.lineTo(this.x, this.y - outerRadius);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // Get current theme colors from css variables
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      const highlight = style.getPropertyValue('--highlight-detail').trim() || '#1F7D53';
      const accent = style.getPropertyValue('--accent-surface').trim() || '#255F38';
      const text = style.getPropertyValue('--text-primary').trim() || '#ECFAE5';
      return [highlight, accent, text];
    };

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastX === 0 && lastY === 0) {
        lastX = x;
        lastY = y;
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 2) {
        // Interpolate between the last and current mouse position to fill gaps
        const steps = Math.min(Math.floor(dist / 2), 15);
        const colors = getColors();

        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const interpX = lastX + dx * t;
          const interpY = lastY + dy * t;

          // Spawn a denser cluster of 1-3 particles per step
          const count = Math.floor(Math.random() * 3) + 1;
          for (let j = 0; j < count; j++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new Particle(interpX, interpY, color));
          }
        }
        lastX = x;
        lastY = y;
      }
    };

    const handleMouseEnter = (e) => {
      const rect = canvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseenter', handleMouseEnter);
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseenter', handleMouseEnter);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
};

export default ParticleCanvas;

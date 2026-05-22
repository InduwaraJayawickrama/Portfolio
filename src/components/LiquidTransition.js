import React, { useState, useEffect, useCallback } from 'react';
import './LiquidTransition.css';

const LiquidTransition = ({ trigger, destination }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [blobs, setBlobs] = useState([]);
  const [displayText, setDisplayText] = useState('');

  const startAnimation = useCallback(() => {
    setDisplayText(destination);
    // Generate random blobs
    const newBlobs = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 0.2
    }));
    
    setBlobs(newBlobs);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Reduced duration
  }, [destination]);

  useEffect(() => {
    if (trigger > 0) {
      startAnimation();
    }
  }, [trigger, startAnimation]);

  return (
    <div className={`liquid-overlay ${isAnimating ? 'active' : ''}`}>
      <div className="blobs-container">
        {blobs.map(blob => (
          <div 
            key={blob.id}
            className="blob"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${blob.size}vmax`,
              height: `${blob.size}vmax`,
              transitionDelay: `${blob.delay}s`
            }}
          />
        ))}
      </div>

      <div className="transition-content">
        <h2 className="transition-text">{displayText}</h2>
      </div>
      
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="liquid-mercury">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" 
            result="liquid" 
          />
        </filter>
      </svg>
    </div>
  );
};

export default LiquidTransition;

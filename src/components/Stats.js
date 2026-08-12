import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';
import { ClipboardIcon, UsersIcon, ClockIcon, TrophyIcon } from './Icons';

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) {
      setCount(end);
      return;
    }

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16); // Cap at ~60fps
    const step = end / (totalMiliseconds / incrementTime);

    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(current));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const Stats = () => {
  const statsData = [
    {
      icon: <ClipboardIcon size={28} />,
      value: "10",
      suffix: "+",
      label: "Projects Completed"
    },
    {
      icon: <UsersIcon size={28} />,
      value: "5",
      suffix: "+",
      label: "Collaborative Projects"
    },
    {
      icon: <ClockIcon size={28} />,
      value: "1000",
      suffix: "+",
      label: "Working Hours"
    },
    {
      icon: <TrophyIcon size={28} />,
      value: "3",
      suffix: "",
      label: "Awards Won"
    }
  ];

  return (
    <section className="stats-section reveal">
      <div className="container stats-container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card" style={{ '--delay': `${idx * 0.15}s` }}>
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <h3 className="stat-value">
                <Counter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

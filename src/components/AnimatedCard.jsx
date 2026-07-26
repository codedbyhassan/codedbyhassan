import React from 'react';
import './AnimatedCard.css';

export const AnimatedCard = ({ children, delay = 0, hoverable = true }) => {
  return (
    <div className={`animated-card ${hoverable ? 'hoverable' : ''}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const FadeInUp = ({ children, delay = 0 }) => {
  return (
    <div className="fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const StaggerContainer = ({ children, stagger = 100 }) => {
  return (
    <div className="stagger-container">
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div key={i} style={{ animationDelay: `${i * stagger}ms` }}>
              {child}
            </div>
          ))
        : children}
    </div>
  );
};

export const ExpandableSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="expandable-section">
      <button
        className="expandable-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="expandable-title">{title}</span>
        <span className={`expandable-icon ${isOpen ? 'open' : ''}`}>▶</span>
      </button>
      {isOpen && <div className="expandable-content">{children}</div>}
    </div>
  );
};

export const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span className="animated-counter">{count}</span>;
};

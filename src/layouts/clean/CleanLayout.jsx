import React, { useState, useEffect } from 'react';
import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './clean.css';

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

  return <span>{count}</span>;
};

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="c-project"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="c-project-header">
        <h3>{project.title}</h3>
        <span className="c-expand-icon">+</span>
      </div>
      <p className={isExpanded ? 'expanded' : ''}>{project.desc}</p>
      <span className="c-stack">{project.stack}</span>
      <div className={`c-plinks ${isExpanded ? 'show' : ''}`}>
        {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Source →</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
        {!project.source && !project.demo && <span style={{ color: 'var(--muted)' }}>Private repo</span>}
      </div>
    </div>
  );
};

const TimelineItem = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`c-titem ${isOpen ? 'open' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button 
        className="c-titem-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="date">{exp.date}</span>
          <h3>{exp.title}</h3>
          <span className="org">{exp.org}</span>
        </div>
        <span className="c-chevron">▼</span>
      </button>
      {isOpen && (
        <ul className="c-titem-details">
          {exp.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SkillRow = ({ skill }) => (
  <div className="c-skill-row">
    <div className="cat">{skill.category}</div>
    <div className="items">{skill.items}</div>
  </div>
);

export default function CleanLayout({ activeTheme, onThemeChange }) {
  return (
    <div className="layout-clean">
      {/* Navigation */}
      <nav className="c-nav">
        <div className="c-nav-inner">
          <div className="c-logo">{DATA.name.split(' ')[0]}</div>
          <div className="c-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <ThemeSwitcher active={activeTheme} onChange={onThemeChange} />
        </div>
      </nav>

      {/* Hero */}
      <div className="c-wrap">
        <section className="c-hero">
          <div className="c-hero-grid">
            <div>
              <span className="c-eyebrow">Welcome</span>
              <h1>{DATA.name}</h1>
              <p className="c-role">{DATA.bio}</p>
              <div className="c-badges">
                <span className="c-badge">React</span>
                <span className="c-badge">Supabase</span>
                <span className="c-badge">Node.js</span>
                <span className="c-badge">Systems Admin</span>
              </div>
              <div className="c-cta">
                <button className="c-btn">Get In Touch</button>
                <button className="c-btn ghost">View GitHub</button>
              </div>
            </div>
            <div className="c-hero-card">
              {DATA.stats.map((stat, idx) => (
                <div key={idx} className="c-card-row">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <h2>About</h2>
          <div className="c-about-cols">
            <div className="c-about-text fade-in">
              <p>Based in {DATA.location}, I build full-stack systems that solve real problems for real organizations. From healthcare facilities to retail operations, I focus on offline-first, user-centered design.</p>
              <p>When I'm not coding, you'll find me thinking about infrastructure, security, and how technology can serve communities better.</p>
            </div>
            <div className="c-stats">
              {DATA.stats.map((stat, idx) => (
                <div key={idx} className="c-stat" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="num"><AnimatedCounter target={parseInt(stat.value.replace(/\D/g, ''))} /></div>
                  <div className="label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="c-project-grid">
            {DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="c-timeline">
            {DATA.experience.map((exp, idx) => (
              <TimelineItem key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="c-skill-rows">
            {DATA.skills.map((skill, idx) => (
              <SkillRow key={idx} skill={skill} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="c-wrap">
          <h2>Let's work together</h2>
          <button className="c-fbtn">poundsghst@gmail.com</button>
          <div className="c-flinks">
            <a href="https://github.com/codedbyhassan" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hassan-boakye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:poundsghst@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

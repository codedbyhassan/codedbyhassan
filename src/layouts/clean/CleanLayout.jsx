import React, { useState, useEffect } from 'react';
import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './clean.css';

const AnimatedCounter = ({ target, duration = 2500 }) => {
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-tech">
          {project.stack.split(',').slice(0, 4).map((tech, i) => (
            <span key={i}>{tech.trim()}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">View Live</a>}
          {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>}
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ exp, index, isExpanded, onToggle }) => (
  <div 
    className={`experience-item ${isExpanded ? 'open' : ''}`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <button className="exp-toggle" onClick={() => onToggle(index)}>
      <div className="exp-title-group">
        <span className="exp-date">{exp.date}</span>
        <h3>{exp.title}</h3>
        <p className="exp-company">{exp.org}</p>
      </div>
      <span className="chevron">›</span>
    </button>
    {isExpanded && (
      <div className="exp-details">
        <ul>
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function CleanLayout() {
  const [expandedExp, setExpandedExp] = useState(0);

  const toggleExperience = (index) => {
    setExpandedExp(expandedExp === index ? -1 : index);
  };

  return (
    <div className="layout-clean">
      {/* Navigation */}
      <nav className="clean-navbar">
        <div className="nav-container">
          <div className="nav-brand">HA</div>
          <div className="nav-menu">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-subtitle">Systems Administrator & Full-Stack Developer</span>
            <h1>Building production systems that drive real impact</h1>
            <p>I design and deploy full-stack applications across web, desktop, and mobile platforms. From healthcare facilities to retail operations, I focus on building scalable, offline-first systems for real organizations.</p>
            <div className="hero-buttons">
              <a href={`mailto:${DATA.email}`} className="btn btn-dark">Get In Touch</a>
              <a href={`https://${DATA.github}`} target="_blank" rel="noopener noreferrer" className="btn btn-light">View My Work</a>
            </div>
            <div className="hero-stats">
              {DATA.stats.map((stat, idx) => (
                <div key={idx} className="stat" style={{ animationDelay: `${idx * 80}ms` }}>
                  <div className="stat-value"><AnimatedCounter target={parseInt(stat.value.replace(/\D/g, ''))} /></div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>Projects built for real organizations solving real problems</p>
          </div>
          <div className="projects-list">
            {DATA.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <div className="section-header">
            <h2>Professional Experience</h2>
            <p>Roles that shaped my expertise in systems and development</p>
          </div>
          <div className="experience-timeline">
            {DATA.experience.map((exp, idx) => (
              <ExperienceItem 
                key={idx} 
                exp={exp} 
                index={idx} 
                isExpanded={expandedExp === idx}
                onToggle={toggleExperience}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>Technologies and tools I work with daily</p>
          </div>
          <div className="skills-grid">
            {DATA.skills.map((skill, idx) => (
              <div key={idx} className="skill-group" style={{ animationDelay: `${idx * 80}ms` }}>
                <h4>{skill.category}</h4>
                <div className="skill-tags">
                  {skill.items.split(',').map((item, i) => (
                    <span key={i} className="skill-tag">{item.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & References */}
      <section className="education-refs">
        <div className="container">
          <div className="edu-ref-grid">
            <div className="edu-col">
              <h3>Education</h3>
              {DATA.education.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <p className="degree">{edu.degree}</p>
                  <p className="school">{edu.school}</p>
                  <p className="year">{edu.year}</p>
                </div>
              ))}
            </div>
            <div className="refs-col">
              <h3>References</h3>
              {DATA.references.map((ref, idx) => (
                <div key={idx} className="ref-item">
                  <p className="name">{ref.name}</p>
                  <p className="title">{ref.title}</p>
                  <a href={`tel:${ref.phone}`}>{ref.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Let's create something amazing</h2>
          <p>I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.</p>
          <a href={`mailto:${DATA.email}`} className="btn btn-dark btn-large">Start a Conversation</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 {DATA.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href={`mailto:${DATA.email}`}>Email</a>
            <a href={`https://${DATA.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`https://${DATA.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

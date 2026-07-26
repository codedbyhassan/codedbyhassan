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

const FeaturedProject = ({ project }) => (
  <div className="c-featured-project">
    <div className="c-featured-content">
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <div className="c-featured-tech">
        {project.stack.split(',').slice(0, 4).map((tech, idx) => (
          <span key={idx} className="c-tech-pill">{tech.trim()}</span>
        ))}
      </div>
      <div className="c-featured-links">
        {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" className="c-link-primary">View Source →</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="c-link-secondary">Live Demo →</a>}
      </div>
    </div>
    <div className="c-featured-accent"></div>
  </div>
);

const ProjectGrid = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`c-project-card ${isHovered ? 'hovered' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="c-project-badge">{String(index + 1).padStart(2, '0')}</div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="c-project-tags">
        {project.stack.split(',').slice(0, 3).map((tech, idx) => (
          <span key={idx}>{tech.trim()}</span>
        ))}
      </div>
      <div className="c-project-footer">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live →</a>}
        {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Code →</a>}
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`c-exp-card ${isExpanded ? 'expanded' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button 
        className="c-exp-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="c-exp-info">
          <div className="c-exp-date">{exp.date}</div>
          <h3>{exp.title}</h3>
          <div className="c-exp-org">{exp.org}</div>
        </div>
        <div className={`c-exp-toggle ${isExpanded ? 'open' : ''}`}>▼</div>
      </button>
      {isExpanded && (
        <div className="c-exp-details">
          <ul>
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const SkillPill = ({ skill, index }) => {
  const categories = ['Languages', 'Frontend', 'Backend', 'Deployment', 'Tools', 'Systems', 'Productivity'];
  const colors = ['hsl(210, 100%, 50%)', 'hsl(160, 100%, 40%)', 'hsl(300, 100%, 40%)', 'hsl(40, 100%, 50%)', 'hsl(0, 100%, 50%)', 'hsl(120, 100%, 40%)', 'hsl(260, 100%, 50%)'];
  const colorIdx = categories.indexOf(skill.category) % colors.length;

  return (
    <div className="c-skill-section" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="c-skill-category" style={{ borderColor: colors[colorIdx] }}>
        {skill.category}
      </div>
      <div className="c-skill-items">
        {skill.items.split(',').map((item, idx) => (
          <span key={idx} className="c-skill-tag" style={{ 
            backgroundColor: `${colors[colorIdx]}20`,
            borderColor: colors[colorIdx],
            color: colors[colorIdx]
          }}>
            {item.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function CleanLayout({ activeTheme, onThemeChange }) {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout-clean">
      {/* Navigation */}
      <nav className="c-navbar">
        <div className="c-nav-container">
          <div className="c-nav-logo">
            <div className="c-logo-mark"></div>
            <span>{DATA.name.split(' ')[0]}</span>
          </div>
          <div className="c-nav-links">
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
            <button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
            <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
          </div>
          <ThemeSwitcher active={activeTheme} onChange={onThemeChange} />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="c-hero-section">
        <div className="c-container">
          <div className="c-hero-grid">
            <div className="c-hero-content">
              <div className="c-hero-badge">Systems Administrator & Developer</div>
              <h1 className="c-hero-title">Building Production Systems for Real Organizations</h1>
              <p className="c-hero-subtitle">{DATA.bio}</p>
              
              <div className="c-hero-cta">
                <a href={`mailto:${DATA.email}`} className="c-btn c-btn-primary">Get In Touch</a>
                <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-secondary">View My Work</a>
              </div>

              <div className="c-hero-stats">
                {DATA.stats.map((stat, idx) => (
                  <div key={idx} className="c-hero-stat" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="c-stat-value"><AnimatedCounter target={parseInt(stat.value.replace(/\D/g, ''))} /></div>
                    <div className="c-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="c-hero-visual">
              <div className="c-gradient-blob c-blob-1"></div>
              <div className="c-gradient-blob c-blob-2"></div>
              <div className="c-gradient-blob c-blob-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="c-featured-section">
        <div className="c-container">
          <h2>Featured Project</h2>
          <FeaturedProject project={DATA.projects[0]} />
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="c-projects-section">
        <div className="c-container">
          <h2>All Projects</h2>
          <div className="c-projects-grid">
            {DATA.projects.map((project, idx) => (
              <ProjectGrid key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="c-experience-section">
        <div className="c-container">
          <h2>Experience</h2>
          <div className="c-experience-cards">
            {DATA.experience.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="c-skills-section">
        <div className="c-container">
          <h2>Skills & Expertise</h2>
          <div className="c-skills-grid">
            {DATA.skills.map((skill, idx) => (
              <SkillPill key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      {DATA.references && DATA.references.length > 0 && (
        <section className="c-references-section">
          <div className="c-container">
            <h2>Professional References</h2>
            <div className="c-references-grid">
              {DATA.references.map((ref, idx) => (
                <div key={idx} className="c-reference-card" style={{ animationDelay: `${idx * 100}ms` }}>
                  <h4>{ref.name}</h4>
                  <p>{ref.title}</p>
                  <a href={`tel:${ref.phone}`}>{ref.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="c-cta-section">
        <div className="c-container">
          <h2>Ready to Build Something Great?</h2>
          <p>I'm always interested in working on challenging projects and helping organizations build better systems.</p>
          <div className="c-cta-buttons">
            <a href={`mailto:${DATA.email}`} className="c-btn c-btn-primary">Email Me</a>
            <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="c-btn c-btn-secondary">Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="c-footer">
        <div className="c-container">
          <div className="c-footer-content">
            <div>
              <h3>{DATA.name}</h3>
              <p>{DATA.location}</p>
            </div>
            <div className="c-footer-links">
              <a href={`mailto:${DATA.email}`}>Email</a>
              <a href={DATA.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="c-footer-divider"></div>
          <p className="c-footer-credit">Designed & built by Hassan Boakye</p>
        </div>
      </footer>
    </div>
  );
}

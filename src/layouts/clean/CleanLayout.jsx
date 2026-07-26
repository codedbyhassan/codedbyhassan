import React, { useState } from 'react';
import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './clean.css';

export default function CleanLayout() {
  const [expandedExp, setExpandedExp] = useState(0);

  return (
    <div className="layout-clean">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Hassan</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
          </div>
          <button className="cta-nav">Get In Touch</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">Hey, I'm a</p>
            <h1 className="hero-title">Systems Administrator & Full-Stack Developer</h1>
            <div className="hero-divider"></div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">01</span>
                <span className="stat-label">Infrastructure</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">02</span>
                <span className="stat-label">Web Development</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">03</span>
                <span className="stat-label">Cross-Platform Apps</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">04</span>
                <span className="stat-label">Technical Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hassan-hero.jpg" alt="Hassan Boakye" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <div className="brands-container">
          <p className="brands-label">Trusted by organizations I've helped shape:</p>
          <div className="brands-grid">
            <div className="brand-item">Patricia Appiahgyei Health Center</div>
            <div className="brand-item">Asokwa Municipal Health</div>
            <div className="brand-item">KNUST</div>
            <div className="brand-item">MKAASH</div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured" id="about">
        <div className="featured-container">
          <div className="featured-content">
            <h2 className="featured-title">Building Systems That Scale</h2>
            <h3 className="featured-subtitle">I create production applications that drive real impact</h3>
            <p className="featured-description">
              {DATA.bio}
            </p>
            <a href={`mailto:${DATA.email}`} className="btn-featured">
              Get In Touch
              <span className="arrow">→</span>
            </a>
          </div>
          <div className="featured-cards">
            <div className="featured-card card-1"></div>
            <div className="featured-card card-2"></div>
            <div className="featured-card card-3"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {DATA.projects.map((project, idx) => (
              <div key={idx} className="project-item" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="project-number">{String(idx + 1).padStart(2, '0')}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.stack.split(',').slice(0, 3).map((tech, i) => (
                    <span key={i}>{tech.trim()}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live →</a>}
                  {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Code →</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="experience-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {DATA.experience.map((exp, idx) => (
              <div key={idx} className="exp-item" style={{ animationDelay: `${idx * 80}ms` }}>
                <button 
                  className="exp-header"
                  onClick={() => setExpandedExp(expandedExp === idx ? -1 : idx)}
                >
                  <div className="exp-info">
                    <span className="exp-date">{exp.date}</span>
                    <h3>{exp.title}</h3>
                    <p className="exp-org">{exp.org}</p>
                  </div>
                  <span className={`exp-chevron ${expandedExp === idx ? 'open' : ''}`}>›</span>
                </button>
                {expandedExp === idx && (
                  <div className="exp-details">
                    <ul>
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="skills-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {DATA.skills.map((skill, idx) => (
              <div key={idx} className="skill-group" style={{ animationDelay: `${idx * 60}ms` }}>
                <h4>{skill.category}</h4>
                <div className="skill-items">
                  {skill.items.split(',').map((item, i) => (
                    <span key={i} className="skill-badge">{item.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-container">
          <h2>Ready to build something great?</h2>
          <p>I'm always open to new opportunities and interesting projects.</p>
          <a href={`mailto:${DATA.email}`} className="cta-button">
            Get In Touch
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p>&copy; 2026 {DATA.name}</p>
            <div className="footer-links">
              <a href={`https://${DATA.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`https://${DATA.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${DATA.email}`}>Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './brutalist.css';

const ProjectRow = ({ project, idx }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
      className={`br-prow ${isExpanded ? 'expanded' : ''}`}
      style={{ animationDelay: `${idx * 80}ms` }}
    >
      <button 
        className="br-prow-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="idx">{String(idx + 1).padStart(2, '0')}</div>
        <div className="br-prow-title">
          <h3>{project.title}</h3>
          <span className="br-expand">≡</span>
        </div>
      </button>
      {isExpanded && (
        <div className="br-prow-content">
          <p>{project.desc}</p>
          <span className="stack">{project.stack}</span>
          <div className="links">
            {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a>}
          </div>
        </div>
      )}
    </div>
  );
};

const ExpCard = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
      className={`br-ecard ${isExpanded ? 'expanded' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button 
        className="br-ecard-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <span className="date">{exp.date}</span>
          <h3>{exp.title}</h3>
        </div>
        <span className="br-toggle">▶</span>
      </button>
      {isExpanded && (
        <>
          <span className="org">{exp.org}</span>
          <ul>
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const SkillWord = ({ skill, index }) => (
  <div className="br-skillgroup" style={{ animationDelay: `${index * 60}ms` }}>
    <strong className="br-skill-title">» {skill.category}</strong>
    <div className="br-skill-cloud">
      {skill.items.split(',').map((item, idx) => (
        <div key={idx} className="br-word" style={{ animationDelay: `${idx * 30}ms` }}>
          {item.trim()}
        </div>
      ))}
    </div>
  </div>
);

export default function BrutalistLayout({ activeTheme, onThemeChange }) {
  return (
    <div className="layout-brutalist">
      {/* Top Bar */}
      <div className="br-topbar">
        <div className="br-issue">ISSUE #1 · HASSAN.SYSTEMS</div>
        <ThemeSwitcher active={activeTheme} onChange={onThemeChange} />
      </div>

      <div className="br-wrap">
        {/* Hero */}
        <section className="br-hero">
          <div className="br-hero-grid">
            <div className="br-hero-content">
              <h1 className="br-giant">{DATA.name.split(' ')[0]}</h1>
              <div className="br-hero-meta">
                <div className="br-stamp">Full Stack</div>
                <div className="br-stamp">Systems Admin</div>
                <div className="br-stamp">Ghana</div>
              </div>
              <p className="br-role">{DATA.bio}</p>
              <div className="br-badges">
                <div className="br-badge">React</div>
                <div className="br-badge">Supabase</div>
                <div className="br-badge">Node.js</div>
                <div className="br-badge">TypeScript</div>
              </div>
              <div className="br-cta">
                <button className="br-btn">Get In Touch</button>
                <button className="br-btn ghost">View Work</button>
              </div>
            </div>
            <div className="br-hero-image">
              <img src="/images/hassan-hero.jpg" alt={DATA.name} className="br-profile-img" />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="br-about">
          <span className="br-marker">About</span>
          <div className="br-row">
            <div className="br-about-text">
              <p>Based in {DATA.location}. Building full-stack systems that solve real problems for real organizations. From healthcare facilities to retail operations.</p>
              <p>Focus on offline-first design, security, and infrastructure that works when it matters most.</p>
            </div>
            <div className="br-stat-strip">
              {DATA.stats.map((stat, idx) => (
                <div key={idx} className="br-stat">
                  <div className="num">{stat.value}</div>
                  <div className="label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="br-projects" id="projects">
          <span className="br-marker">Featured Work</span>
          {DATA.projects.map((project, idx) => (
            <ProjectRow key={idx} project={project} idx={idx} />
          ))}
        </section>

        {/* Experience */}
        <section className="br-exp" id="experience">
          <span className="br-marker">Experience</span>
          {DATA.experience.map((exp, idx) => (
            <ExpCard key={idx} exp={exp} index={idx} />
          ))}
        </section>

        {/* Skills */}
        <section className="br-skills" id="skills">
          <span className="br-marker">Capabilities</span>
          {DATA.skills.map((skill, idx) => (
            <SkillWord key={idx} skill={skill} index={idx} />
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="br-footer">
        <div className="br-topbar" style={{ borderTop: '3px solid #0A0A0A' }}>
          <div style={{ fontSize: '13px' }}>poundsghst@gmail.com · {DATA.location}</div>
          <div style={{ fontSize: '13px' }}>
            <a href="https://github.com/codedbyhassan" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

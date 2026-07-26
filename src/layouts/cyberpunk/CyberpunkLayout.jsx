import React, { useState } from 'react';
import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './cyberpunk.css';

const ProjectRow = ({ project, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <tr 
      className={`cy-row ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${idx * 50}ms` }}
    >
      <td className="name">
        <span className="cy-prefix">»</span>
        {project.title}
      </td>
      <td>{project.stack.split(',')[0]}</td>
      <td className="cy-links">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="cy-link">Demo ◆</a>}
        {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" className="cy-link">Source ◆</a>}
      </td>
    </tr>
  );
};

const LogEntry = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
      className={`cy-log ${isExpanded ? 'expanded' : ''}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button 
        className="cy-log-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="ts">[{exp.date}]</span>
        <h3>{exp.title} {isExpanded ? '▼' : '▶'}</h3>
      </button>
      {isExpanded && (
        <>
          <span className="org">&nbsp;&nbsp;{exp.org}</span>
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

const ChipGroup = ({ skill, index }) => (
  <div className="cy-skillgroup" style={{ animationDelay: `${index * 40}ms` }}>
    <div className="lbl">≡ {skill.category}</div>
    <div className="cy-chip-row">
      {skill.items.split(',').map((item, idx) => (
        <div key={idx} className="cy-chip" style={{ animationDelay: `${idx * 30}ms` }}>
          <span className="cy-bracket">[</span>
          {item.trim()}
          <span className="cy-bracket">]</span>
        </div>
      ))}
    </div>
  </div>
);

export default function CyberpunkLayout({ activeTheme, onThemeChange }) {
  return (
    <div className="layout-cyberpunk">
      {/* Sidebar */}
      <div className="cy-sidebar">
        <div className="cy-ascii">HASSAN.SYS</div>
        <div className="cy-status">[ONLINE]</div>
        
        <div className="cy-nav">
          <a href="#projects">→ Projects</a>
          <a href="#experience">→ Experience</a>
          <a href="#skills">→ Skills</a>
          <a href="#contact">→ Contact</a>
        </div>

        <div className="cy-switcher">
          <div className="lbl">Theme</div>
          <ThemeSwitcher active={activeTheme} onChange={onThemeChange} />
        </div>

        <div className="cy-stats">
          {DATA.stats.map((stat, idx) => (
            <div key={idx} className="cy-stat">
              <div className="num">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="cy-main">
        {/* Hero Window */}
        <div className="cy-window">
          <div className="cy-titlebar">
            <span></span>
            <span></span>
            <span></span>
            <span>profile.exe</span>
          </div>
          <div className="cy-window-body">
            <div className="cy-prompt">$&gt; whoami</div>
            <h1>{DATA.name}</h1>
            <p className="cy-role">{DATA.bio}</p>
            <div className="cy-badges">
              <div className="cy-badge">React 19</div>
              <div className="cy-badge">Supabase</div>
              <div className="cy-badge">Node.js</div>
              <div className="cy-badge">SysAdmin</div>
            </div>
            <div className="cy-cta">
              <button className="cy-btn">Get In Touch</button>
              <button className="cy-btn ghost">View GitHub</button>
            </div>
          </div>
        </div>

        {/* Projects Window */}
        <div className="cy-window" id="projects">
          <div className="cy-titlebar">
            <span></span>
            <span></span>
            <span></span>
            <span>projects.sys</span>
          </div>
          <div className="cy-window-body">
            <p className="plain">Featured deployments:</p>
            <table className="cy-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Stack</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {DATA.projects.map((project, idx) => (
                  <ProjectRow key={idx} project={project} idx={idx} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Experience Window */}
        <div className="cy-window" id="experience">
          <div className="cy-titlebar">
            <span></span>
            <span></span>
            <span></span>
            <span>experience.log</span>
          </div>
          <div className="cy-window-body">
            <p className="plain">Execution history:</p>
            {DATA.experience.map((exp, idx) => (
              <LogEntry key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>

        {/* Skills Window */}
        <div className="cy-window" id="skills">
          <div className="cy-titlebar">
            <span></span>
            <span></span>
            <span></span>
            <span>capabilities.sys</span>
          </div>
          <div className="cy-window-body">
            {DATA.skills.map((skill, idx) => (
              <ChipGroup key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>

        {/* Footer Window */}
        <div className="cy-window cy-footer" id="contact">
          <div className="cy-titlebar">
            <span></span>
            <span></span>
            <span></span>
            <span>contact.sys</span>
          </div>
          <div className="cy-window-body">
            <p className="plain">poundsghst@gmail.com</p>
            <div>Based in {DATA.location}</div>
            <a href="https://github.com/codedbyhassan" target="_blank" rel="noopener noreferrer">github.com/codedbyhassan</a>
          </div>
        </div>
      </div>
    </div>
  );
}

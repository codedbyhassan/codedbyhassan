import React, { useState } from 'react';
import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './minimalist.css';

const AnimatedCounter = ({ target, duration = 1500 }) => {
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

  return <span>{count}</span>;
};

const ProjectTableRow = ({ project, idx }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <tr 
      className={`m-row ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${idx * 50}ms` }}
    >
      <td className="m-idx">{String(idx + 1).padStart(2, '0')}</td>
      <td className="m-title">{project.title}</td>
      <td className="m-stack">{project.stack.split(',')[0]}</td>
      <td className="m-links">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="m-link">→</a>}
      </td>
    </tr>
  );
};

const ExpRow = ({ exp, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <tr 
      className={`m-row ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <td className="m-date">{exp.date}</td>
      <td className="m-title">{exp.title}</td>
      <td className="m-org">{exp.org}</td>
    </tr>
  );
};

const SkillCat = ({ skill, index }) => (
  <tr 
    className="m-skill-row"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <td className="m-cat" colSpan="3">» {skill.category}</td>
    <td className="m-items">{skill.items}</td>
  </tr>
);

export default function MinimalistLayout({ activeTheme, onThemeChange }) {
  return (
    <div className="layout-minimalist">
      {/* Header */}
      <header className="m-header">
        <div className="m-header-content">
          <div className="m-header-text">
            <h1>{DATA.name}</h1>
            <p>{DATA.bio}</p>
          </div>
          <div className="m-header-image">
            <img src="/images/hassan-hero.jpg" alt={DATA.name} className="m-profile-img" />
          </div>
          <ThemeSwitcher active={activeTheme} onChange={onThemeChange} />
        </div>
      </header>

      <main className="m-container">
        {/* Hero Stats */}
        <section className="m-section">
          <div className="m-stats-row">
            {DATA.stats.map((stat, idx) => (
              <div key={idx} className="m-stat" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="m-stat-value">
                  <AnimatedCounter target={parseInt(stat.value.replace(/\D/g, ''))} />
                </div>
                <div className="m-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="m-section" id="projects">
          <h2>Projects</h2>
          <table className="m-table">
            <tbody>
              {DATA.projects.map((project, idx) => (
                <ProjectTableRow key={idx} project={project} idx={idx} />
              ))}
            </tbody>
          </table>
        </section>

        {/* Experience */}
        <section className="m-section" id="experience">
          <h2>Experience</h2>
          <table className="m-table">
            <tbody>
              {DATA.experience.map((exp, idx) => (
                <ExpRow key={idx} exp={exp} index={idx} />
              ))}
            </tbody>
          </table>
        </section>

        {/* Skills */}
        <section className="m-section" id="skills">
          <h2>Skills</h2>
          <table className="m-table">
            <tbody>
              {DATA.skills.map((skill, idx) => (
                <SkillCat key={idx} skill={skill} index={idx} />
              ))}
            </tbody>
          </table>
        </section>

        {/* About */}
        <section className="m-section">
          <h2>About</h2>
          <p className="m-about-text">
            {DATA.location}-based full-stack developer and systems administrator. Building offline-first, user-centered systems for real organizations. Focus on React, Supabase, Node.js, and infrastructure that works.
          </p>
        </section>

        {/* Contact */}
        <section className="m-section m-contact" id="contact">
          <h2>Contact</h2>
          <p>
            <a href="mailto:poundsghst@gmail.com">poundsghst@gmail.com</a>
          </p>
          <p>
            <a href="https://github.com/codedbyhassan" target="_blank" rel="noopener noreferrer">github.com/codedbyhassan</a>
          </p>
        </section>
      </main>
    </div>
  );
}

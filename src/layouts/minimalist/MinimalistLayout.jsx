import { DATA } from '../../data/portfolioData';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './minimalist.css';

const ProjectTableRow = ({ project, idx }) => (
  <tr>
    <td className="m-idx">{String(idx + 1).padStart(2, '0')}</td>
    <td className="m-title">{project.title}</td>
    <td className="m-stack">{project.stack.split(',')[0]}</td>
    <td className="m-links">
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">→</a>}
    </td>
  </tr>
);

const ExpRow = ({ exp }) => (
  <tr>
    <td className="m-date">{exp.date}</td>
    <td className="m-title">{exp.title}</td>
    <td className="m-org">{exp.org}</td>
  </tr>
);

const SkillCat = ({ skill }) => (
  <tr>
    <td className="m-cat" colSpan="3">{skill.category}</td>
    <td className="m-items">{skill.items}</td>
  </tr>
);

export default function MinimalistLayout({ activeTheme, onThemeChange }) {
  return (
    <div className="layout-minimalist">
      {/* Header */}
      <header className="m-header">
        <div className="m-header-content">
          <div>
            <h1>{DATA.name}</h1>
            <p>{DATA.bio}</p>
          </div>
          <ThemeSwitcher active={activeTheme} onChange={onThemeChange} />
        </div>
      </header>

      <main className="m-container">
        {/* Hero Stats */}
        <section className="m-section">
          <div className="m-stats-row">
            {DATA.stats.map((stat, idx) => (
              <div key={idx} className="m-stat">
                <div className="m-stat-value">{stat.value}</div>
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
                <ExpRow key={idx} exp={exp} />
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
                <SkillCat key={idx} skill={skill} />
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

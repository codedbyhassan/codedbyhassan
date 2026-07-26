const themeNames = {
  clean: 'Clean / Professional',
  cyberpunk: 'Cyberpunk',
  brutalist: 'Brutalist',
  minimalist: 'Minimalist / Swiss'
};

export default function ThemeSwitcher({ active, onChange }) {
  return (
    <div className="theme-switcher">
      {Object.entries(themeNames).map(([key, label]) => (
        <button
          key={key}
          className={`theme-btn ${active === key ? 'active' : ''}`}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

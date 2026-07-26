import { useState } from 'react';
import CleanLayout from './layouts/clean/CleanLayout';
import CyberpunkLayout from './layouts/cyberpunk/CyberpunkLayout';
import BrutalistLayout from './layouts/brutalist/BrutalistLayout';
import MinimalistLayout from './layouts/minimalist/MinimalistLayout';
import './App.css';

const layouts = {
  clean: CleanLayout,
  cyberpunk: CyberpunkLayout,
  brutalist: BrutalistLayout,
  minimalist: MinimalistLayout
};

export default function App() {
  const [theme, setTheme] = useState('clean');
  const ActiveLayout = layouts[theme];

  return (
    <div className="app">
      <ActiveLayout activeTheme={theme} onThemeChange={setTheme} />
    </div>
  );
}

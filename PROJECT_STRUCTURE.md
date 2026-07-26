# Hassan Boakye Portfolio — React Implementation

A modular, multi-layout portfolio built with React 19 + Vite. Four completely distinct design systems—Clean, Cyberpunk, Brutalist, and Minimalist—unified under one data source and theme-switching architecture.

## Project Structure

```
src/
├── data/
│   └── portfolioData.js      # Shared data (name, projects, experience, skills)
├── components/
│   └── ThemeSwitcher.jsx     # Reusable theme switcher across all layouts
├── layouts/
│   ├── clean/
│   │   ├── CleanLayout.jsx   # Professional, modern design
│   │   └── clean.css
│   ├── cyberpunk/
│   │   ├── CyberpunkLayout.jsx # Terminal HUD / sci-fi aesthetic
│   │   └── cyberpunk.css
│   ├── brutalist/
│   │   ├── BrutalistLayout.jsx # Poster / zine, raw typography
│   │   └── brutalist.css
│   └── minimalist/
│       ├── MinimalistLayout.jsx # Swiss design, tables, minimal
│       └── minimalist.css
├── App.jsx                   # Main app component with theme state
├── App.css                   # Global resets and utilities
└── main.jsx                  # React entry point
```

## How It Works

### Data Source
**`src/data/portfolioData.js`** exports a single `DATA` object containing:
- Personal info: name, role, location, email
- Projects: title, description, stack, links
- Experience: date, title, organization, details
- Skills: categories and items
- Stats: key metrics

Every layout pulls from this same source, so updating your info in one place updates all four designs.

### Theme Switching
Each layout component accepts two props:
- `activeTheme` — current theme name ('clean', 'cyberpunk', 'brutalist', 'minimalist')
- `onThemeChange` — callback to switch themes

The `<ThemeSwitcher />` component appears in every layout and calls `onThemeChange` when you click a button.

### Layout Components
- **`CleanLayout.jsx`** — Traditional corporate: navbar, hero with sidebar card, timeline, grid projects
- **`CyberpunkLayout.jsx`** — Terminal aesthetic: fixed sidebar HUD, window shells, tables, scanlines overlay
- **`BrutalistLayout.jsx`** — Raw typography: bold poster text, numbered projects, shadow effects, stamped badges
- **`MinimalistLayout.jsx`** — Swiss tables: header, minimal design, all content as tables, monospace accents

Each layout is a self-contained JSX component that renders the full page. Styling is scoped per layout via dedicated CSS files.

### App State
**`App.jsx`** holds the single piece of state: `theme`. It imports all four layout components, picks the active one, and passes it the current theme and onChange callback.

## Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser. Click the theme switcher buttons to flip between designs.

## Building for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or any static host.

## Adding a Fifth Design

1. Create `src/layouts/newstyle/NewStyleLayout.jsx` and `newstyle.css`
2. Import it in `App.jsx` and add to the `layouts` map
3. Update `ThemeSwitcher.jsx` with the new theme name/label
4. Done — the switcher and App automatically wire it up

## Styling

All four layouts use CSS variables for colors, scoped to `.layout-<name>`. This means:
- All four stylesheets can be loaded at once with zero conflicts
- Colors are consistent within each design but isolated between designs
- To adjust a color, edit the `--accent`, `--text`, etc. at the top of each CSS file

No Tailwind, no CSS-in-JS — pure CSS files for maximum control over typography, spacing, and effects.

## Tech Stack

- **React 19** — UI framework
- **Vite** — Build tool and dev server
- **CSS 3** — Styling (no utilities, pure CSS)
- **Google Fonts** — Inter, JetBrains Mono, Space Grotesk, IBM Plex Mono, Archivo Black, Bebas Neue

---

## Next Steps

- [ ] Replace placeholder project links and descriptions with real URLs
- [ ] Update contact email and social links
- [ ] Deploy to Vercel or Netlify
- [ ] Add fifth design if desired (e.g., retro, glassmorphism, etc.)
- [ ] Consider adding dark mode toggle per layout

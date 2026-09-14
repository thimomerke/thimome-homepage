import React, { useEffect, useState } from 'react';
import { applyTheme, readTheme } from '../lib/theme';

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6L17 17M7 7L5.4 5.4" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13.4A8.2 8.2 0 1 1 10.6 4a6.6 6.6 0 0 0 9.4 9.4z" />
  </svg>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className="theme-toggle-icon">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
      <span className="theme-toggle-label mono mono-sm">
        {theme === 'dark' ? 'light' : 'dark'}
      </span>
    </button>
  );
};

export default ThemeToggle;

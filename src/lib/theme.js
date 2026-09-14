// Theme is applied to <html data-theme> by an inline script in index.html so
// the first paint is already correct. These helpers keep React in sync with it.

export const STORAGE_KEY = 'thimo-theme';

export function systemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function readTheme() {
  if (typeof document === 'undefined') return 'dark';
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'light' || current === 'dark') return current;
  return systemTheme();
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {
    // Private mode or blocked storage: the theme still applies for this visit.
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f3ec' : '#07080b');
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

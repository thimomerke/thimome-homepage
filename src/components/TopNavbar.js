import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/TopNavbar.component.css';

const LINKS = [
  { id: 'about', index: '01', label: 'about' },
  { id: 'experience', index: '02', label: 'experience' },
  { id: 'projects', index: '03', label: 'projects' },
  { id: 'contact', index: '04', label: 'contact' },
];

const TopNavbar = () => {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);

  // Scroll progress line + condensed header state.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      setScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section currently under the header.
  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === 'undefined') return undefined;

    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean
    );
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Close the mobile menu on Escape, and lock scroll while it is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div ref={progressRef} className="scroll-progress-bar stripe-bar" />
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header-inner">
          <a className="monogram" href={onHome ? '#home' : '/'} aria-label="Thimo Merke, home">
            <span className="monogram-mark">TM</span>
            <span className="monogram-dot" aria-hidden="true" />
          </a>

          <nav className="site-nav" aria-label="Sections">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={href(link.id)}
                className={`site-nav-link ${active === link.id ? 'is-active' : ''}`}
              >
                <span className="site-nav-index">{link.index}</span>
                <span className="site-nav-label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="site-header-actions">
            <ThemeToggle />
            <button
              type="button"
              className="menu-button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="mono mono-sm">{menuOpen ? 'close' : 'menu'}</span>
              <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Sections">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={href(link.id)}
              className="mobile-menu-link"
              style={{ '--i': i }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mono">{link.index}</span>
              <span className="mobile-menu-label">{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="stripe-bar" />
      </div>
    </>
  );
};

export default TopNavbar;

import React from 'react';
import '../styles/Footer.component.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="stripe-bar" />
    <div className="shell site-footer-inner">
      <span className="mono mono-sm">
        &copy; Thimo Merke {new Date().getFullYear()}
      </span>

      <span className="mono mono-sm site-footer-built">
        Built with React &middot; Munich, DE
      </span>

      <span className="site-footer-links">
        <a className="mono mono-sm" href="/legal">
          Legal notice
        </a>
        <a className="mono mono-sm" href="#home">
          Back to top &uarr;
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;

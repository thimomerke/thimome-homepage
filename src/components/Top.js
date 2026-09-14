import React, { useEffect, useState } from 'react';
import StripeField from './StripeField';
import '../styles/Top.component.css';

const title = "Hi, I'm";
const name = 'Thimo';
const subtitle =
  "I'm an independent researcher in business, sustainable finance and accounting, based in Mannheim, Germany.";

// Local time where Thimo is, not where the visitor is.
function berlinTime() {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Berlin',
    }).format(new Date());
  } catch (e) {
    return '';
  }
}

const Top = () => {
  const [time, setTime] = useState(berlinTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(berlinTime()), 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="hero" id="home">
      <StripeField />

      <div className="hero-inner shell">
        <p className="hero-kicker mono">
          <span className="hero-kicker-dot" aria-hidden="true" />
          {title}
        </p>

        <h1 className="hero-name">
          <span className="hero-name-line">
            {name}
            <img
              className="hero-hand"
              src="/hand.png"
              width="70"
              height="70"
              alt="Waving hand emoji"
            />
          </span>
          <span className="hero-name-line hero-name-last">Merke</span>
        </h1>

        <p className="hero-subtitle">{subtitle}</p>

        <dl className="hero-readout">
          <div className="hero-readout-item">
            <dt className="mono mono-sm">Location</dt>
            <dd className="mono">Mannheim, DE &middot; 49.49&deg;N 8.47&deg;E</dd>
          </div>
          <div className="hero-readout-item">
            <dt className="mono mono-sm">Local time</dt>
            <dd className="mono">
              {time}
              <span className="hero-pulse" aria-hidden="true" />
            </dd>
          </div>
          <div className="hero-readout-item">
            <dt className="mono mono-sm">Focus</dt>
            <dd className="mono">Renewable energy &middot; Carbon removal</dd>
          </div>
        </dl>
      </div>

      <a className="hero-scroll mono mono-sm" href="#about">
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </header>
  );
};

export default Top;

import React from 'react';
import StripeField from './StripeField';
import '../styles/Top.component.css';

const title = "Hi, I'm";
const name = 'Thimo';
const subtitle =
  "I'm an independent researcher in business, sustainable finance and accounting, based in Munich, Germany.";

// Local time where Thimo is, not where the visitor is.
// Used by the readout strip; re-enable with it.
// function berlinTime() {
//   try {
//     return new Intl.DateTimeFormat('en-GB', {
//       hour: '2-digit',
//       minute: '2-digit',
//       timeZone: 'Europe/Berlin',
//     }).format(new Date());
//   } catch (e) {
//     return '';
//   }
// }

const Top = () => {
  // Clock for the readout strip. Re-enable together with the commented-out
  // <dl className="hero-readout"> block at the bottom of this file.
  // const [time, setTime] = useState(berlinTime);
  //
  // useEffect(() => {
  //   const id = window.setInterval(() => setTime(berlinTime()), 30000);
  //   return () => window.clearInterval(id);
  // }, []);

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


      </div>

      <a className="hero-scroll mono mono-sm" href="#about">
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </header>
  );
};

export default Top;


/*         <dl className="hero-readout">
          <div className="hero-readout-item">
            <dt className="mono mono-sm">Location</dt>
            <dd className="mono">Munich, DE &middot; 48.14&deg;N 11.58&deg;E</dd>
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
*/
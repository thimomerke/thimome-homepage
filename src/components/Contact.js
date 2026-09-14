import React from 'react';
import Reveal from './Reveal';
import '../styles/Contact.component.css';

const ext = { target: '_blank', rel: 'noreferrer' };

const CHANNELS = [
  { label: 'LinkedIn', handle: 'thimo-merke', href: 'https://www.linkedin.com/in/thimo-merke/' },
  { label: 'Instagram', handle: 'thimo_me', href: 'https://instagram.com/thimo_me' },
  { label: 'Photography', handle: 'thimo.merke', href: 'https://www.instagram.com/thimo.merke/' },
];

const Contact = () => (
  <section className="section contact" id="contact">
    <div className="shell">
      <div className="section-head">
        <span className="section-index">04 / </span>
        <h2 className="section-title">Contact</h2>
        <span className="section-rule" />
      </div>

      <Reveal>
        <p className="contact-lead">You want to talk?</p>
        <a className="contact-mail" href="mailto:mail@thimo.me">
          <span className="contact-mail-text">mail@thimo.me</span>
          <span className="stripe-bar contact-mail-rule" aria-hidden="true" />
        </a>
      </Reveal>

      <Reveal delay={120}>
        <ul className="contact-channels">
          {CHANNELS.map((channel) => (
            <li key={channel.href}>
              <a href={channel.href} {...ext}>
                <span className="mono mono-sm contact-channel-label">
                  {channel.label}
                </span>
                <span className="contact-channel-handle">{channel.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Contact;

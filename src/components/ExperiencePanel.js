import React, { useRef, useState } from 'react';
import Reveal from './Reveal';
import '../styles/ExperiencePanel.component.css';

const ext = { target: '_blank', rel: 'noreferrer' };

const WORK = [
  {
    title: 'Graduate Research Assistant',
    org: 'University of Mannheim / MISES',
    time: 'October 2023 - July 2026',
    lead: `As a graduate research assistant at the Mannheim Institute for Sustainable Energy Studies, I worked on research projects in the decarbonization and renewable energy sector.`,
  },
  {
    title: 'Sustainable Value Creation Intern',
    org: 'Aurelius Private Equity',
    time: 'July 2025 - October 2025',
    lead: `At Aurelius, I worked with various portfolio companies (aerospace, FMCG) on projects regarding regulatory compliance (e.g. CSRD) and procurement.`,
  },
  {
    title: 'ESG Expert Group Intern',
    org: 'KPMG',
    time: 'January 2025 - March 2025',
    lead: `As an intern with the ESG Expert Group at KPMG, I worked on projects regarding the implementation of CSRD and other EU regulations at various large, global companies.`,
  },
  {
    title: 'Project Leader',
    org: '180DC Mannheim',
    time: 'October 2023 - January 2024',
    lead: `180DC is the world's largest university-based consultancy for nonprofits and social enterprises. As a project leader, I managed a consulting project in the carbon removal industry.`,
  },
  /*{
    title: 'Working Student Value Experience Innovation',
    org: 'SAP',
    time: 'October 2022 - June 2023',
    lead: `I worked on developing innovative customer experiences, including`,
    bullets: [
      'the SAP Experience Centers Walldorf and NYC',
      'Value Storytelling',
      'Metaverse and Digital Innovation projects',
    ],
  },
  {
    title: 'Head of Marketing',
    org: 'Q-Summit',
    time: 'April 2020 - June 2021',
    bullets: [
      'Photography and video production for a Conference with over 1000 attendees',
      'Social media management, mainly LinkedIn',
      'Web and marketing analytics',
      'Programming and maintenance of the Website',
    ],
  },
  {
    title: 'Intern Business Development and Marketing',
    org: 'BASF Chemovator',
    time: 'March 2021 - June 2021',
    bullets: [
      'Online and offline marketing campaigns',
      'Social media management, e.g. Instagram, Facebook, LinkedIn',
      'Marketing analytics',
      'Photography',
    ],
  },*/
  {
    title: 'Assurance / Audit Intern',
    org: 'KPMG',
    time: 'January 2021 - February 2021',
    lead: 'As an intern in assurance / audit I supported financial statements audits according to HGB and IFRS for various global corporates.',
  },
];

const EDUCATION = [
  {
    title: 'M.Sc. Management',
    org: 'University of Mannheim, Germany',
    time: 'September 2023 - July 2026',
    body: (
      <>
        I studied as a graduate student at the University of Mannheim, with
        interests in sustainable management, finance and accounting. I was
        honored to be member of the Dean's List{' '}
        <a
          href="https://www.mannheim-business-school.com/en/validation/?credential=101d2803-097c-4df3-b402-db798665b1b2"
          {...ext}
        >
          2024
        </a>{' '}
        and{' '}
        <a
          href="https://www.mannheim-business-school.com/en/validation/?credential=3945c0bb-584b-402f-8546-f5a70798e87a"
          {...ext}
        >
          2025
        </a>
        .
      </>
    ),
  },
  {
    title: 'Management',
    org: 'Copenhagen Business School, Denmark',
    time: 'September 2024 - December 2024',
    lead: `In addition to my studies at the University of Mannheim, I'm spending a semester at CBS with a minor in accounting, regulation and sustainable finance.`,
  },
  {
    title: 'B.Sc. Business Administration',
    org: 'University of Mannheim, Germany',
    time: 'September 2019 - July 2023',
    body: (
      <>
        I graduated from the University of Mannheim with a Degree in Business
        Administration, with a focus on in management, finance and
        sustainability. My bachelor's thesis,{' '}
        <em>
          "Examining the Viability of Net-Negative Carbon Removal Techniques: An
          Economic and Environmental Evaluation"
        </em>
        , can be found{' '}
        <a
          href="https://github.com/thimomerke/bachelor-thesis/blob/main/BachelorThesis061023.pdf"
          {...ext}
        >
          here.
        </a>
      </>
    ),
  },
  {
    title: 'Commerce',
    org: "Queen's University, Kingston, Canada",
    time: 'September 2021 - December 2021',
    lead: `I studied at Smith School of Business for one semester, where I focused on Management and Entrepreneurship topics`,
  },
];

const CERTIFICATIONS = [
  {
    title: 'Analyzing Data with SQL',
    org: 'Codeacademy',
    time: 'February 2021',
  },
  {
    title:
      '6.00.1x: Introduction to Computer Science and Programming Using Python',
    org: 'edX',
    time: 'September 2017',
  },
];

const TABS = [
  { id: 'work', label: 'work', items: WORK },
  { id: 'education', label: 'education', items: EDUCATION },
  { id: 'certifications', label: 'certifications', items: CERTIFICATIONS },
];

const Item = ({ item, index }) => (
  <Reveal className="xp-item" delay={Math.min(index * 70, 350)} as="li">
    <div className="xp-item-meta">
      <span className="mono mono-sm xp-time">{item.time}</span>
    </div>
    <div className="xp-item-body">
      <span className="xp-node" aria-hidden="true" />
      <h3 className="xp-title">
        {item.title}
        <span className="xp-org">
          <span className="xp-slash" aria-hidden="true">
            {'//'}
          </span>
          {item.org}
        </span>
      </h3>
      {(item.lead || item.body) && (
        <p className="xp-desc">{item.body || item.lead}</p>
      )}
      {item.bullets && (
        <ul className="xp-bullets">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  </Reveal>
);

const ExperiencePanel = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  // Roving focus: arrow keys move between tabs, the way a tablist should.
  const onKeyDown = (event) => {
    const last = TABS.length - 1;
    let next = null;
    if (event.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    if (event.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    const node = tabRefs.current[next];
    if (node) node.focus();
  };

  return (
    <div className="xp">
      <div
        className="xp-tabs"
        role="tablist"
        aria-label="Experience categories"
        onKeyDown={onKeyDown}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`xp-tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`xp-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            ref={(node) => {
              tabRefs.current[i] = node;
            }}
            className={`xp-tab ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="xp-tab-label">{tab.label}</span>
            <span className="xp-tab-count mono mono-sm">
              {String(tab.items.length).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {TABS.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`xp-panel-${tab.id}`}
          aria-labelledby={`xp-tab-${tab.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="xp-panel"
        >
          <ol className="xp-list">
            {tab.items.map((item, index) => (
              <Item key={item.title + item.time} item={item} index={index} />
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePanel;

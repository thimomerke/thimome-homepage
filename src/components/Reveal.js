import React from 'react';
import useReveal from '../lib/useReveal';

// Wraps children in a scroll-triggered fade/rise. `delay` staggers siblings.
const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

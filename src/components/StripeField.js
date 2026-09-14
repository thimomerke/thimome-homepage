import React, { useCallback, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/theme';
import '../styles/StripeField.component.css';

// Colour ramp borrowed from the ColorBrewer RdBu scale used by warming-stripe
// graphics: deep blue through pale tints into deep red.
const RAMP = [
  [8, 48, 107],
  [33, 113, 181],
  [66, 146, 198],
  [158, 202, 225],
  [252, 187, 161],
  [251, 106, 74],
  [203, 24, 29],
  [103, 0, 13],
];

const STRIPE_WIDTH = 13; // css px, before device-pixel scaling

function rampColor(t) {
  const clamped = Math.min(0.9999, Math.max(0, t));
  const scaled = clamped * (RAMP.length - 1);
  const i = Math.floor(scaled);
  const f = scaled - i;
  const a = RAMP[i];
  const b = RAMP[Math.min(RAMP.length - 1, i + 1)];
  return [
    Math.round(a[0] + (b[0] - a[0]) * f),
    Math.round(a[1] + (b[1] - a[1]) * f),
    Math.round(a[2] + (b[2] - a[2]) * f),
  ];
}

// A decorative field, not a dataset: layered sine waves with a cold-to-warm
// bias from left to right. Deterministic, so it looks the same on every load.
function stripeValue(index, time) {
  const wave =
    0.34 * Math.sin(index * 0.07 + time) +
    0.2 * Math.sin(index * 0.021 - time * 0.6) +
    0.14 * Math.sin(index * 0.005 + time * 0.33) +
    0.2 * Math.sin(index * 0.9 + time * 1.7) +
    0.12 * Math.sin(index * 2.3 - time * 1.1);
  return 0.5 + 0.5 * wave;
}

const StripeField = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const timeRef = useRef(0);
  const pointerRef = useRef({ x: -1, active: false });
  const alphaRef = useRef(0.55);
  const activeRef = useRef(true);

  const readAlpha = useCallback(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      '--stripe-alpha'
    );
    const parsed = parseFloat(value);
    alphaRef.current = Number.isNaN(parsed) ? 0.55 : parsed;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = alphaRef.current;

    const count = Math.ceil(width / STRIPE_WIDTH);
    const stripeW = width / count;
    const pointer = pointerRef.current;

    for (let i = 0; i < count; i += 1) {
      let value = stripeValue(i, timeRef.current);
      value = value * 0.62 + (i / count) * 0.38; // left-to-right warming bias

      if (pointer.active) {
        // A soft lens under the cursor nudges nearby stripes warmer.
        const distance = Math.abs(i * stripeW + stripeW / 2 - pointer.x);
        const falloff = Math.exp(-(distance * distance) / (2 * 110 * 110));
        value += falloff * 0.28;
      }

      const [r, g, b] = rampColor(value);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(i * stripeW, 0, stripeW + 0.6, height);
    }

    ctx.globalAlpha = 1;
  }, []);

  useEffect(() => {
    readAlpha();
    draw();

    const reduced = prefersReducedMotion();
    const canvas = canvasRef.current;

    // Keep the canvas in sync with theme switches.
    const themeObserver = new MutationObserver(() => {
      readAlpha();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && canvas) {
      resizeObserver = new ResizeObserver(() => draw());
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener('resize', draw);
    }

    // Stop animating when the hero leaves the viewport or the tab is hidden.
    let visibilityObserver;
    if (typeof IntersectionObserver !== 'undefined' && canvas) {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          activeRef.current = entries.some((entry) => entry.isIntersecting);
        },
        { threshold: 0 }
      );
      visibilityObserver.observe(canvas);
    }

    let onPointerMove;
    let onPointerLeave;

    if (!reduced) {
      const loop = () => {
        if (activeRef.current && !document.hidden) {
          timeRef.current += 0.0016;
          draw();
        }
        frameRef.current = window.requestAnimationFrame(loop);
      };
      frameRef.current = window.requestAnimationFrame(loop);

      onPointerMove = (event) => {
        const rect = canvas.getBoundingClientRect();
        pointerRef.current = { x: event.clientX - rect.left, active: true };
      };
      onPointerLeave = () => {
        pointerRef.current = { x: -1, active: false };
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      themeObserver.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener('resize', draw);
      if (visibilityObserver) visibilityObserver.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      if (onPointerMove) window.removeEventListener('pointermove', onPointerMove);
      if (onPointerLeave) window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [draw, readAlpha]);

  return (
    <div className="stripe-field" aria-hidden="true">
      <canvas ref={canvasRef} className="stripe-field-canvas" />
      <div className="stripe-field-mask" />
    </div>
  );
};

export default StripeField;

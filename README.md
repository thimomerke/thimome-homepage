# thimo.me

My personal homepage [thimo.me](https://thimo.me), built with [Create React App](https://github.com/facebook/create-react-app).

## Install and run this app

**Step 1:** Clone this repository
`git clone https://github.com/thimomerke/thimome-homepage.git`

**Step 2:** Install the dependencies
`npm install`

**Step 3:** Run the app
`npm start`

## Design system

The visual language is a "climate instrument": a warming-stripe colour ramp, oversized display
type for headings, monospace for all metadata and readouts, and a prose face for body copy.

Everything is driven by custom properties in the `:root` blocks of `src/styles/global.css`.
Change them there and the whole site follows.

### Themes

The site ships light and dark. The theme is stored in `localStorage` under `thimo-theme` and
applied to `<html data-theme="...">` by an inline script in `public/index.html`, which runs
before first paint so there is no flash of the wrong theme. When nothing is stored, the
visitor's `prefers-color-scheme` decides. The toggle lives in the header.

To change the palette, edit these blocks in `src/styles/global.css`:

| Block | What it sets |
| ------------------------------- | ----------------------------------------- |
| `:root` | Stripe ramp, fonts, type scale, spacing |
| `:root, :root[data-theme='dark']` | Dark palette |
| `:root[data-theme='light']` | Light palette |

Key tokens per theme: `--bg`, `--bg-elevated`, `--bg-sunken`, `--ink`, `--ink-muted`,
`--ink-faint`, `--line`, `--line-strong`, `--accent`, `--accent-cold`, `--stripe-alpha`.

### Fonts

| Role | Family |
| --------- | ----------------------------------------------- |
| Display | `--font-display`, Montserrat 500/600/700/800 |
| Body | `--font-text`, Quicksand |
| Data | `--font-mono`, the platform monospace stack |

Montserrat and Quicksand are self-hosted via the `typeface-*` packages and imported in
`src/index.js`.

### The stripe field

`src/components/StripeField.js` paints the hero background on a canvas: vertical stripes
coloured from a cold-to-warm ramp, drifting slowly, with a soft lens under the cursor.
It is decorative and generated from layered sine waves, not from a dataset. It pauses when
the hero scrolls out of view or the tab is hidden, and renders a single static frame for
visitors who ask for reduced motion.

### Motion

Sections fade in on scroll through `src/lib/useReveal.js` (IntersectionObserver, with a
timeout so content never stays hidden). Every animation is disabled under
`prefers-reduced-motion: reduce`.

## Icons

Icons are inline SVG in the components that use them. There is no icon-font dependency.

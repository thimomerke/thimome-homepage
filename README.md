# thimo.me

My personal homepage [thimo.me](https://thimo.me), created with [Create React App](https://github.com/facebook/create-react-app) using React Bootstrap and Material UI.

## Install and run this app

**Step 1:** Clone this repository
`git clone https://github.com/thimomerke/thimome-homepage.git`

**Step 2:** Install the dependencies
`npm install`

**Step 3:** Run the app
`npm start dev`

## Adjusting the color and font scheme

The color and font scheme can be adjusted by modifying the `:root` section in the global.css file inside the styles folder.
The default colors and fonts are as follows:
| | Default Value |
| -------------------------- | -------------------------------------------------------------------------|
| Background Color | ![faf7ef](https://via.placeholder.com/10/faf7ef?text=+) `#faf7ef` |
| Contrast Color 1 | ![fd4c4c](https://via.placeholder.com/10/fd4c4c?text=+) `#fd4c4c` |
| Contrast Color 2 | ![e9b000](https://via.placeholder.com/10/e9b000?text=+) `#e9b000` |
| Text Color | ![1a2238](https://via.placeholder.com/10/1a2238?text=+) `#1a2238` |
| Font Headings | 'Montserrat', sans-serif |
| Font Text | 'Quicksand', sans-serif |
| Font Weight Headings | 500 |
| Font Weight Content | 400 |

I also integrated the used of icons through Font Awesome, which can be used by placing the following snippet:

`<i className="fa fa-{REPLACE BY ICON NAME}" style={{fontSize: {ADJUST ICON SIZE}}}> </i>`

or using `<a>` for a link icon:

`<a className="fa fa-{REPLACE BY ICON NAME}" style={{fontSize: {ADJUST ICON SIZE}}} href={LINK}"> </a>`

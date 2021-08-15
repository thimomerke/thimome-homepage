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
Fonts are imported from Google fonts in the `Home.js` file, the weight values to be imported are specified in the import URL.
The default colors and fonts are as follows:
|                            | Default Value                                                            |
| -------------------------- | -------------------------------------------------------------------------|
| Background Color           | ![ffffff](https://via.placeholder.com/10/ffffff?text=+) `#ffffff`        |
| Contrast Color 1           | ![F30067](https://via.placeholder.com/10/F30067?text=+) `#F30067`        |
| Contrast Color 2           | ![00D1CD](https://via.placeholder.com/10/00D1CD?text=+) `#00D1CD`        |
| Text Color                 | ![000000](https://via.placeholder.com/10/00000?text=+) `#000000`         |
| Font Headings              | ['Montserrat', sans-serif](https://via.placeholder.com/10/a8b2d1?text=+) |
| Font Text                  | ['Arial', sans-serif](https://via.placeholder.com/10/ccd6f6?text=+)      |
| Font Weight Headings       | 600                                                                      |
| Font Weight Content        | 400                                                                      |

I also integrated the used of icons through Font Awesome, which can be used by placing the following snippet:

`<i className="fa fa-{REPLACE BY ICON NAME}" style={{fontSize: {ADJUST ICON SIZE}}}> </i>`

or using `<a>` for a link icon:

`<a className="fa fa-{REPLACE BY ICON NAME}" style={{fontSize: {ADJUST ICON SIZE}}} href={LINK}"> </a>`

It is **important** to keep the whitespace, otherwise you will get an error during ```npm run build``` because of an empty `<i>` / `<a>`
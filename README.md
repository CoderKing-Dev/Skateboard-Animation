# Skateboard Animation

An interactive skateboard animation built with GSAP. When you click the wheel, the circle splits, the skater enters the scene, jumps, and the “SKATE / BOARD” text appears. After the animation ends, everything returns to the initial state.

## Features
- Click‑triggered, step‑by‑step animation
- Sequence controlled with GSAP timeline
- SVG wheel plus dynamic visual effects
- Automatic reset at the end of the scene

## Preview
[Watch demo](video/preview.mp4)

## Technologies
- HTML
- CSS
- JavaScript
- GSAP

## How It Works
1. The wheel is clicked.
2. The circle halves slide outward.
3. The skater enters and performs the jump.
4. The “SKATE / BOARD” text appears.
5. The scene fades out and resets to the initial view.

## Project Structure
- `index.html`: Page structure and elements
- `style.css`: Design, sizing, and visual effects
- `skeat.js`: GSAP timeline and animation logic
- `image/`: Skater images

## Run Locally
1. Download or clone the repo.
2. Open the project folder.
3. Open `index.html` in your browser.

## Edit Guide
- Text and structure in `index.html`
- Colors and sizes in `style.css`
- Animation sequence in `skeat.js`
- Replace skater images inside `image/`

## Note
GSAP is loaded locally from `vendor/gsap.min.js`, so no internet connection is required.

## Author
Designed and developed by CoderKing-Dev — https://github.com/CoderKing-Dev

## License
This project includes code under the MIT License. See LICENSE for the full license text.

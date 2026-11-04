# Umar Qureshi — Portfolio

Personal portfolio for Umar Qureshi, a full stack developer based in Lahore, Pakistan.

Built with HTML, CSS and JavaScript. Includes a responsive layout, a scroll-controlled 150-frame portrait animation, project details, experience, contact links and a downloadable résumé.

## Run locally

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173.

## Deploy on Vercel

Import `u-qureshi/portfolio` into Vercel and deploy from the repository root. `vercel.json` configures the static output directory as `dist`. No dependencies or build command are required.

If configuring manually:

- Framework preset: Other
- Root directory: repository root
- Output directory: `dist`
- Build command: leave empty
- Install command: leave empty

## Files

- `dist/index.html` — page content and structure
- `dist/style.css` — styles and responsive layouts
- `dist/app.js` — projects, skills, interactions and scroll animation
- `dist/frames/` — 150 optimized WebP frames from the supplied portrait video
- `dist/assets/umar.png` — profile photo
- `dist/resume.pdf` — downloadable résumé

The animation follows scroll position directly: slow scrolling shows fine movement and fast scrolling advances immediately without holding the page. Reduced-motion preferences are supported. Project illustrations are visual representations rather than client screenshots.

The original source video and unused generated still image are kept locally and excluded from Git. This repository contains only Umar's portfolio; it excludes the original reference site's downloaded files and hosting-specific credentials/configuration.

## Featured projects

- [Yuqelo](https://www.yuqelo.site/) — everyday online tools
- [M4BE](https://m4be5.com/) — gaming marketplace
- [Smart Scheduler](https://fyp-pied-eight.vercel.app/) — academic scheduling

All three projects were built end to end by Umar. Yuqelo and Smart Scheduler cards use live-site screenshots; M4BE uses a branded illustration. The cinematic hero fills the viewport with a larger, sharp head-to-desk composition and a soft background extension, keeping the person and laptop visible.

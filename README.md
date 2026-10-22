# Cyber Tech

**Learn cybersecurity. One challenge at a time.**

Cyber Tech is a free, responsive cybersecurity learning website built with plain HTML, CSS, and JavaScript. It is designed to be easy to host through GitHub Pages and includes interactive, multiple-choice learning challenges.

## Features

- Three selectable learning paths: Beginner, Intermediate, and Advanced.
- 15 interactive challenges covering networking, Linux, password security, encryption, phishing awareness, web security, SQL injection concepts, XSS, authentication, log analysis, digital forensics, incident response, threat hunting, and CTF reasoning.
- Answer feedback, explanations, and hints.
- Progress stored locally in the visitor's browser with `localStorage`.
- Responsive layouts for phones, tablets, laptops, and desktops.
- Dark matte/neumorphic interface with muted green accents.
- Keyboard-accessible modal controls and reduced-motion support.
- No account, backend, API key, or paid service required for the included demo challenges.
- Basic SEO metadata, Open Graph metadata, structured data, favicon, robots file, and sitemap placeholder.

## Project structure

```text
cyber-tech/
├── index.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── app.js
```

## Run locally

This is a static site. Open `index.html` in a browser, or run a simple local server from the project directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `cyber-tech`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under the build/deployment source, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for the Pages deployment to finish and open the published URL.
6. Replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml` with your actual public site URL.
7. In Google Search Console, add and verify the site, then submit the sitemap URL.

## Contact

- Creator: Dhanush
- Email: shridhanush1429@gmail.com
- Phone: +94 77 399 1409

## Important scope and safety notes

This first release is a working **learning platform prototype**, not a full remote cyber range. The challenges are knowledge checks with safe fictional scenarios; they do not execute Linux commands, run vulnerable applications, scan public targets, or provide a live shell. That keeps the static site safe, inexpensive, and straightforward to host.

Before adding real hands-on labs, isolate lab environments, restrict targets to explicitly authorised systems, apply resource limits, and add server-side protections. Do not run user-supplied code on the production website.

## Customisation

- Edit the challenge catalogue and explanations in `assets/js/app.js`.
- Adjust colors and neumorphic styling using the CSS variables at the top of `assets/css/styles.css`.
- Update site URLs and metadata in `index.html`, `robots.txt`, and `sitemap.xml`.
- Progress is device/browser-specific and is not synced between devices because this version has no account system.

# Miryam Mi-Ying Huang — Personal Website

A responsive academic portfolio designed for GitHub Pages. The visual style follows
Miryam's original Google Site: a complete top navigation, pale-yellow header, a restrained
coral-and-green palette, elegant Lora headings, a full uncropped portrait, and straightforward
publication lists. The Blog link opens a separate clickable post index inspired by
`cnchou.github.io`.

## Preview locally

```bash
npm run dev
```

Then open `http://127.0.0.1:4173`.

## Publish on GitHub Pages

1. Create a GitHub repository. For a root personal site, name it `mimihuang.github.io`.
2. Upload this folder to the repository and use `main` as the default branch.
3. Open **Settings → Pages** and choose **Deploy from a branch** as the source.
4. Select the `main` branch and `/(root)` folder, then save the settings.

For a project repository with another name, GitHub Pages will publish it at
`https://mimihuang.github.io/REPOSITORY-NAME/`.

## Main files

- `index.html` — content and page structure
- `publication-category.html` — papers organized by research area
- `mentoring-students.html` — mentoring page
- `blog.html` and `an-obfuscated-journey.html` — clickable blog index and post
- `side-channel.html` — Quantum Gomoku and music
- `teaching.html`, `talks.html`, and `notes.html` — teaching and research resources
- `styles.css` — visual design and responsive behavior
- `script.js` — mobile navigation and current-year update
- `assets/miryam-huang.png` — portrait from Miryam's existing public site

## Update the content

Edit the text and links in the corresponding HTML page. Pushing a change to `main`
publishes the update.

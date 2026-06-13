# HAI Lab — Deployment Guide

This site is a **static HTML/CSS** website. No build step is required.

**Live URL:** https://hailab.net.cn/

---

## 1. Repository setup

1. Use the GitHub repository **`hailab-hkust/hailab-hkust.github.io`**.
2. Push the contents of this folder to the repository root (not inside a subfolder).
3. Keep the root `CNAME` file set to `hailab.net.cn` for the custom domain.

---

## 2. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) / **/(root)**
3. Save. After 1–3 minutes, the site should be available at:
   - https://hailab.net.cn/

No GitHub Actions workflow is required for pure static HTML.

---

## 3. Local preview

From this directory:

```bash
cd /path/to/hailab-hkust.github.io
python3 -m http.server 8000
```

Open http://localhost:8000/ in your browser.

Check:

- Navigation: Home, Publications, Teaching, People, Join Us
- Home shows only the landing content and six research direction cards
- Publications, Teaching, People, and Join Us open as separate pages
- Images load (especially `./figs/home/home1.png`, `./index/image/hu.png`, and publication card `thumb-card.webp` files)

---

## 4. Publish updates

```bash
git add .
git commit -m "Update lab website"
git push origin main
```

GitHub Pages will refresh automatically within a few minutes.

---

## 5. Custom domain

The site uses `hailab.net.cn`.

1. Keep a `CNAME` file in the repo root with `hailab.net.cn` as the only line.
2. Configure DNS at your registrar (A/CNAME records as GitHub documents).
3. Enable **Enforce HTTPS** in Pages settings.

---

## 6. File layout (key paths)

| Path | Purpose |
|------|---------|
| `index.html` | Lab homepage |
| `publications.html` | Publications page |
| `teaching.html` | Courses and undergraduate project opportunities |
| `people.html` | Lab director and team members |
| `join_us.html` | Recruiting / application guide |
| `index/css/lab.css` | Site styles |
| `figs/` | Easy-to-update site images |
| `index/image/` | Existing director images |
| `projects/<project-id>/` | Project-specific assets such as CSS, JS, images, PDFs, videos, and slides |
| `profile.html` | Backup of the previous long personal homepage |
| `publications/<project-id>.html` | Publication detail pages |

---

## 7. Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on homepage | Ensure `index.html` is at repo root and Pages branch is correct |
| CSS not loading | Paths are relative (`./index/css/lab.css`); open via server, not `file://` |
| Images broken | Confirm `figs/home/home1.png`, `index/image/hu.png`, and project `projects/<project-id>/image/thumb-card.webp` / `teaser.png` files exist in repo |
| Old domain still shows | Remove old `CNAME`, clear DNS cache, wait for GitHub Pages propagation |

---

See **MANUAL_ASSETS.md** for images and text you should replace by hand after the first deploy.

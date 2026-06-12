# HAI Lab — Deployment Guide

This site is a **static HTML/CSS** website. No build step is required.

**Live URL (target):** https://hailabt.github.io/

---

## 1. Repository setup

1. Create a GitHub repository named **`hailabt.github.io`** (must match exactly for user/org Pages).
2. Push the contents of this folder to the repository root (not inside a subfolder).
3. If you are migrating from an older repo name, rename the GitHub repository to `hailabt.github.io` under **Settings → General → Repository name**.

> Do not use repository or public URLs containing `hkust` in the site name; the lab site is published as **hailabt.github.io**.

---

## 2. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) / **/(root)**
3. Save. After 1–3 minutes, the site should be available at:
   - https://hailabt.github.io/

No GitHub Actions workflow is required for pure static HTML.

---

## 3. Local preview

From this directory:

```bash
cd /path/to/hailabt.github.io
python3 -m http.server 8000
```

Open http://localhost:8000/ in your browser.

Check:

- Navigation: Home, Projects, Teaching, People, Join Us
- Home shows only the landing content and six research direction cards
- Projects, Teaching, People, and Join Us open as separate pages
- Images load (especially `./figs/home/home1.png`, `./index/image/hu.png`, and project `teaser.png` files)

---

## 4. Publish updates

```bash
git add .
git commit -m "Update lab website"
git push origin main
```

GitHub Pages will refresh automatically within a few minutes.

---

## 5. Optional custom domain

If you later want a custom domain (e.g. `hailab.net.cn`):

1. Add a `CNAME` file in the repo root with your domain (one line, no `https://`).
2. Configure DNS at your registrar (A/CNAME records as GitHub documents).
3. Enable **Enforce HTTPS** in Pages settings.

For **hailabt.github.io only**, you do **not** need a `CNAME` file.

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
| root-level `*.html` project files | Stable public entry pages for individual projects |

---

## 7. Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on homepage | Ensure `index.html` is at repo root and Pages branch is correct |
| CSS not loading | Paths are relative (`./index/css/lab.css`); open via server, not `file://` |
| Images broken | Confirm `figs/home/home1.png`, `index/image/hu.png`, and project `projects/<project-id>/image/teaser.png` files exist in repo |
| Old domain still shows | Remove old `CNAME`, clear DNS cache, wait for GitHub Pages propagation |

---

See **MANUAL_ASSETS.md** for images and text you should replace by hand after the first deploy.

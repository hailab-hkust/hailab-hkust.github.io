# Manual content checklist

After the first deploy, please replace or add the following items yourself.

## Images

| Location | What to add | Suggested path |
|----------|-------------|----------------|
| Homepage hero | Lab group photo, lab environment, or AI/VR visual | `figs/home/home1.png` — current homepage already uses this path |
| Director photo | Official portrait (if different from current) | `index/image/hu.png` or new file + update People section |
| Lab members | One photo per person | `figs/people/<name>.jpg` |
| GazeInterpreter card | Teaser if missing on project page | `projects/chang26_gazeinterpreter/image/teaser.png` (file exists; uncomment on project page if needed) |

## Text content

| Section | Action |
|---------|--------|
| **People → Lab members** | Remove the placeholder block in `people.html` and add cards for PhD / Master / Postdoc / RA / alumni |
| **Join Us** | Adjust recruiting text, deadlines, and application links in `join_us.html` to match current university policies |
| **Projects** | Add/remove featured project cards in `projects.html`; link card URLs to root-level `*.html` project pages and card images to `projects/<project-id>/image/teaser.png` |
| **Teaching** | Add courses or undergraduate project topics in `teaching.html`; duplicate existing `course-card` or `empty-teaching-card` blocks as needed |
| **Home research tags** | Update the six research cards in `index.html` as lab directions evolve |
| **Footer** | Update copyright year, WeChat official account link if desired |

## Optional links

- Add a “All publications” link in the Projects section pointing to `profile.html` or an external list
- Add university / thrust logos in the footer (save under `figs/logos/`)

## Repository / domain

- Rename GitHub remote repo to **`hailabt.github.io`** before going live
- Remove any old `CNAME` pointing to deprecated domains unless you intentionally use a custom domain

## Do not change (unless intentional)

- Root-level project HTML pages (`hu25_hoigaze.html`, etc.) are stable public entry points. Keep them at the repository root unless you intentionally update all external links.
- Project resource folders now live under `projects/<project-id>/`. Update resource paths as `./projects/<project-id>/...`.

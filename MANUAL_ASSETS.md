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
| **Publications** | Add/remove publication cards in `publications.html`; link card URLs to `publications/<project-id>.html` detail pages and card images to lightweight `projects/<project-id>/image/thumb-card.webp` files |
| **Teaching** | Add courses or undergraduate project topics in `teaching.html`; duplicate existing `course-card` or `empty-teaching-card` blocks as needed |
| **Home research tags** | Update the six research cards in `index.html` as lab directions evolve |
| **Footer** | Update copyright year, WeChat official account link if desired |

## Optional links

- Add an “All publications” link in the Publications section pointing to `profile.html` or an external list
- Add university / thrust logos in the footer (save under `figs/logos/`)

## Publication thumbnails

- Keep original `thumb.png`, `thumb.gif`, and `teaser.png` files for project detail pages.
- Use `thumb-card.webp` only for publication listing cards. Aim for each file to stay below 300 KB.
- For each publication card, set only `data-category` to one of the six research-direction filters used in `publications.html`; the visible tag and reveal delay are generated automatically by `index/js/lab-nav.js`.
- Publication group counts are also generated automatically; do not manually edit the number badges in `publications.html`.
- To create a card thumbnail from an existing `thumb` file:

```bash
ffmpeg -y -i projects/<project-id>/image/thumb.png -vf "thumbnail,scale='min(640,iw)':-2" -frames:v 1 -quality 78 projects/<project-id>/image/thumb-card.webp
```

## Repository / domain

- Rename GitHub remote repo to **`https://hailab.net.cn`** before going live
- Remove any old `CNAME` pointing to deprecated domains unless you intentionally use a custom domain

## Do not change (unless intentional)

- Publication detail pages live under `publications/<project-id>.html`; do not add paper detail pages to the repository root.
- Project resource folders live under `projects/<project-id>/`. From root pages use `./projects/<project-id>/...`; from publication detail pages use `../projects/<project-id>/...`.

# Elias's Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages on every push to `main`.

## Editing in the browser (Pages CMS)

The easiest way to update the site — works from any computer or your phone.

1. Go to **https://app.pagescms.org** and sign in with GitHub.
2. Pick the `eevanier/eevanier.github.io` repo (first time only: approve the Pages CMS GitHub app for this repo).
3. Open **Projects**, click a project, edit, and hit **Save**. Each save is a commit to `main`, and the site redeploys in about a minute.

**Adding photos:** in any photo field click *Select image → Upload*. Upload into the project's own folder (e.g. `pursuit-drone/`) so things stay tidy — create the folder in **Media** first for a new project. Phone photos are fine; the site resizes and compresses them automatically.

**New project:** *Projects → Add an entry*. Fill in title, tagline, date, tags and a cover photo; everything else is optional and can be added later.

## How a project page is structured

Projects focus on **what you did that was unique and the technical parts**, not a timeline.

| Field | What goes in it |
|---|---|
| `summary` | 1–2 sentences: what problem existed and what you built. |
| `contributions` ("What I Did") | 2–5 short bullets on what *you* did that was clever or unusual. |
| `specs` | Key numbers — top speed, cost per unit, weight, battery config. |
| `highlights` | The deep-dives. One heading per interesting problem, a short write-up, and the photos that explain it (with captions). |
| `gallery` | Extra photos that don't belong to a specific highlight. |

Only `title`, `tagline`, `date`, `tags` and `thumbnail` are required — empty sections simply don't appear.

**Writing tips:** lead each highlight with the problem, then what you did about it, then the result (a number if you have one). Photos of CAD, test rigs, failures and close-ups of mechanisms say more than glamour shots.

## Editing files directly

Each project is one file plus a folder of photos:

```
src/content/projects/pursuit-drone.md     ← the text
src/assets/projects/pursuit-drone/         ← its photos
```

Image paths are written from the site root. Minimal example:

```yaml
---
title: "My New Project"
tagline: "One line about it."
date: 2026-10-01
tags: ["Robotics", "CAD"]
thumbnail: "/src/assets/projects/my-new-project/cover.jpg"
summary: "What problem existed and what I built."
contributions:
  - "The clever thing I did."
specs:
  - label: "Top speed"
    value: "40 mph"
highlights:
  - title: "The interesting problem"
    body: |
      What was hard, what I did about it, and how it turned out.
      **Markdown** works here. <!-- notes in comments stay hidden -->
    images:
      - src: "/src/assets/projects/my-new-project/mechanism.jpg"
        caption: "Close-up of the mechanism."
gallery:
  - src: "/src/assets/projects/my-new-project/extra.jpg"
    caption: "Optional caption."
---
```

Anything written below the closing `---` shows at the bottom of the page as free-form notes.

See [CONTENT_TODO.md](./CONTENT_TODO.md) for the details each existing project still needs.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

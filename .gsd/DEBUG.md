# Debug Session: GitHub Pages Jekyll Build Error

## Symptom
GitHub Actions showed a "Build with Jekyll" step failing. Jekyll v3.10.0 was attempting to build the repo instead of the custom Astro workflow.

## Root Cause
**GitHub Pages → Settings → Source** was set to **"Deploy from a branch"**, which triggers GitHub's default Jekyll builder. The custom `deploy.yml` (Astro) was being ignored.

## Resolution
1. User changed GitHub Pages source from "Deploy from a branch" → **"GitHub Actions"**
2. Pushed empty commit to trigger the workflow

## Verification
- **Site live at**: https://eevanier.github.io/
- **Title**: "Home | Elias Portfolio"
- **Content**: Hero section, Projects nav, Featured Work, Contact — all Astro-built content confirmed

## Status: ✅ RESOLVED

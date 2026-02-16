# Phase 2: About Page — Hobbies & Interests

## Goal
Add a hobbies/interests section to the About page showcasing personality beyond engineering.

## User Review Required
> [!NOTE]
> I will use placeholder images for the hobbies initially. You can replace them with real photos later.

## Proposed Changes
### Content & Assets
#### [NEW] `public/images/hobbies/`
- Create directory for hobby images.
- Add placeholder images for:
    - Skateboarding
    - Snowboarding
    - Tricking

### Page Structure
#### [MODIFY] `src/pages/about.astro`
- Add "Beyond Engineering" section.
- Implement grid layout for hobbies.
- Display hobby cards with image, title, and brief description.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure no build errors.

### Manual Verification
- Start dev server: `npm run dev`
- Navigate to `/about`
- Verify "Beyond Engineering" section exists
- Verify images load and layout is responsive

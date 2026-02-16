---
status: resolved
trigger: "/debug \"move the beyond engineering section to be below the resume\""
created: 2026-02-15T23:30:00-05:00
updated: 2026-02-15T23:30:00-05:00
---

## Resolution
root_cause: Layout order in `src/pages/about.astro` placed "Beyond Engineering" (Hobbies) before "Resume". User requested the reverse.
fix: Swapped the code blocks for "Hobbies Section" and "Resume" in `src/pages/about.astro`.
verification: Verified file content shows "Resume" block preceding "Hobbies Section" block.

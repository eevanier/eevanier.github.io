---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Enhanced Content Schema & Sample Data

## Objective
Add the `buildLog` structured array field to the Astro content schema and update the sample project with realistic build-log entries. This provides the data foundation that the tabbed UI (Plan 1.2) will consume.

## Context
- .gsd/SPEC.md
- .gsd/DECISIONS.md (Phase 1 Discussion — buildLog as structured frontmatter array)
- .gsd/ARCHITECTURE.md
- src/content/config.ts
- src/content/projects/sample/index.md

## Tasks

<task type="auto">
  <name>Add buildLog array to content schema</name>
  <files>src/content/config.ts</files>
  <action>
    Add a `buildLog` field to the projects collection schema in `config.ts`.

    The field should be defined as:
    ```ts
    buildLog: z.array(z.object({
      stage: z.string(),            // e.g. "Design", "Fabrication", "Assembly", "Testing"
      date: z.string().optional(),   // e.g. "Week 1-2"
      description: z.string(),
      images: z.array(image()).optional(),
    })).optional(),
    ```

    Place it after the existing `gallery` field (line 20).

    Do NOT modify any existing fields — the schema must remain fully backward-compatible so existing content still builds without error.
  </action>
  <verify>npx astro check 2>&1 | Select-String -Pattern "error" -NotMatch | Select-Object -First 5</verify>
  <done>config.ts has a `buildLog` field; `npx astro check` reports no type errors.</done>
</task>

<task type="auto">
  <name>Update sample project with build log data</name>
  <files>src/content/projects/sample/index.md</files>
  <action>
    Add a `buildLog` array to the sample project's frontmatter with 3-4 entries representing realistic engineering stages. Example:

    ```yaml
    buildLog:
      - stage: "Concept & Research"
        date: "Week 1"
        description: "Conducted literature review on locking mechanisms. Benchmarked 5 competing designs. Selected cam-lock variant for further development."
      - stage: "CAD & Simulation"
        date: "Week 2-4"
        description: "Created parametric CAD model in SolidWorks. Ran FEA stress analysis — identified stress concentration at pivot. Added 2mm fillet, reducing peak stress by 35%."
      - stage: "Prototyping"
        date: "Week 5-7"
        description: "Fabricated first prototype using CNC aluminum and 3D-printed ABS fixtures. Validated fit and assembly sequence."
      - stage: "Testing & Iteration"
        date: "Week 8-10"
        description: "Completed 500-cycle endurance test. Measured 0.02mm max deflection — well within 0.1mm tolerance. Iterated on surface finish for improved grip."
    ```

    Place the buildLog array after the `timeline` field in the frontmatter, before the `---` closing delimiter.

    Keep all existing frontmatter and body content unchanged.
  </action>
  <verify>npx astro build 2>&1 | Select-String -Pattern "error" -NotMatch | Select-Object -First 3</verify>
  <done>Sample project frontmatter includes a valid `buildLog` array with 3+ entries; project builds successfully.</done>
</task>

## Success Criteria
- [ ] `config.ts` schema includes `buildLog` as an optional array of objects with `stage`, `date`, `description`, `images`
- [ ] Sample project has realistic build log entries in frontmatter
- [ ] `npx astro build` completes without errors

---
title: "Multi-Head Bio Printer"
tagline: "A low-cost multi-material bioprinter built around a tool changer and syringe extruders."
date: 2021-09-01
tags: ["Bioengineering", "3D Printing", "Hardware Design", "Research"]
# TODO: thumbnail is a blank placeholder — add a photo or CAD render of the printer.
thumbnail: "/src/assets/projects/multi-head-bio-printer/thumbnail.png"
featured: false
summary: "Bioprinters that can print more than one material are expensive. I added a tool changer and syringe-pump extruders to a standard 3D printer frame, so it can swap between bio-inks within one print."
contributions:
  - "Designed a magnetic tool-changer that picks up and parks syringe print heads."
  - "Designed motor-driven syringe pump extruders for viscous bio-inks."
  - "Modified Marlin firmware for tool-change scripts and per-extruder offsets."
  - "Calibrated layer alignment between heads and test-printed alginate and gelatin."
specs:
  # TODO: fill in — number of heads, base printer, syringe volume, positional accuracy.
  - label: "Firmware"
    value: "Modified Marlin"
  - label: "Materials tested"
    value: "Alginate, gelatin"
highlights:
  - title: "Magnetic tool changer"
    body: |
      Magnetic couplings let the printer pick up one syringe head, print with it, park it and pick up the next — so multiple bio-inks can go into a single print.

      <!-- TODO: how did you get repeatable alignment after each pickup? CAD images would help here. -->
  - title: "Syringe pump extruders"
    body: |
      Bio-inks are too viscous and delicate for a normal filament extruder. Motor-driven syringe pumps give precise control over flow rate.

      <!-- TODO: lead screw / gearing, how you calibrated flow, retraction for gels. -->
  - title: "Firmware and offsets"
    body: |
      Marlin was modified to run tool-change scripts and to store an XYZ offset for each head, so layers from different materials line up.
---

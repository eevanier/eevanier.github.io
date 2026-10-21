---
title: "EEG Headset"
tagline: "A low-cost, comfortable EEG headset for brain-computer interface experiments."
date: 2022-09-01
tags: ["Neurotech", "Hardware Design", "Prototyping", "3D Printing"]
thumbnail: "/src/assets/projects/eeg-headset/thumbnail.png"
featured: false
summary: "Commercial EEG headsets are expensive and uncomfortable for long sessions. I designed a 3D-printable headset with adjustable electrode mounts and dry electrodes, built around an OpenBCI-compatible board."
contributions:
  - "Designed a printable headset frame that spreads pressure evenly for long sessions."
  - "Placed adjustable electrode mounts around the 10-20 electrode system."
  - "Iterated through printed versions to tune electrode contact pressure."
  - "Integrated an OpenBCI-compatible board with shielded cabling to cut power-line noise."
  # TODO: what changed between version 1 and version 2, and why?
specs:
  # TODO: fill in — channel count, electrode type/model, board, weight, material.
  - label: "Electrodes"
    value: "Dry, spring-loaded"
  - label: "Board"
    value: "OpenBCI-compatible"
highlights:
  - title: "Version 1: open headband"
    body: |
      The first version was a slim band that placed electrodes along the 10-20 system positions.

      <!-- TODO: what did you learn from wearing/testing V1? -->
    images:
      - src: "/src/assets/projects/eeg-headset/sideangle.png"
        caption: "V1 — side view."
      - src: "/src/assets/projects/eeg-headset/overangle.png"
        caption: "V1 — from above."
      - src: "/src/assets/projects/eeg-headset/underangle.png"
        caption: "V1 — from below."
  - title: "Version 2: wraparound visor"
    body: |
      The second version wraps further around the head to spread contact pressure more evenly, with spring-loaded dry electrodes that need no gel.

      <!-- TODO: why the visor shape? how did you get consistent electrode contact? signal results (alpha waves, motor imagery)? -->
    images:
      - src: "/src/assets/projects/eeg-headset/side-angle2ndvers.png"
        caption: "V2 — side view."
      - src: "/src/assets/projects/eeg-headset/3ang2ndvers.png"
        caption: "V2 — three-quarter view."
      - src: "/src/assets/projects/eeg-headset/1unmder2ndvers.png"
        caption: "V2 — from below."
---

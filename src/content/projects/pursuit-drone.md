---
title: "Pursuit Drone"
tagline: "A high-speed FPV chase drone for filming cars and fast action — sold as analog and DJI kits."
date: 2022-04-01
tags: ["Drones", "High Speed", "Video Production", "FPV"]
thumbnail: "/src/assets/projects/pursuit-drone/thumbnail.png"
featured: false
summary: "Off-the-shelf camera drones can't keep up with cars or other drones. I built a carbon-fiber quad tuned for speed and stability while carrying an action camera, and packaged it into ready-to-fly analog and DJI kits."
contributions:
  - "Picked a low-drag frame and motor combination for the best thrust-to-weight ratio."
  - "Tuned PIDs iteratively to remove oscillation at high speed."
  - "Packaged the build as two complete kits (analog and DJI digital) with radio, goggles, batteries and charger."
  # TODO: what was unique about your build vs. a stock racing quad?
specs:
  # TODO: verify — the old page claimed 100+ mph and 0–60 in under 2 s. Keep only numbers you measured.
  - label: "Top speed"
    value: "100+ mph"
  - label: "Flight time"
    value: "~4 min (high speed)"
  - label: "Range"
    value: "Up to ½ mile"
  - label: "Batteries"
    value: "850 mAh LiPo ×3"
  - label: "Control link"
    value: "TBS Crossfire"
  - label: "Payload"
    value: "GoPro-class action camera"
highlights:
  - title: "Frame and power system for speed"
    body: |
      The frame and motors were chosen to minimise drag and maximise thrust-to-weight, so the quad can stay with a car while carrying an action camera.

      <!-- TODO: frame name/arm length, motor size & kV, prop, cell count. Why those choices? -->
    images:
      - src: "/src/assets/projects/pursuit-drone/folloer-frame.png"
        caption: "Pursuit frame build."
  - title: "Tuning for stable footage at speed"
    body: |
      At high speed small oscillations show up as jello and shake in the footage. I tuned the flight controller's PIDs iteratively until the quad flew clean at the top of its speed range. Bluetooth lets the settings be changed in Betaflight in the field.

      <!-- TODO: what specifically did you change (filters, PID values, rates)? before/after footage? -->
  - title: "Two ready-to-fly kits"
    body: |
      The build was packaged into two complete kits so a client could fly out of the box: an analog kit with FatShark HDO2 goggles and a Tango 2 radio, and a digital kit with DJI Goggles 2 and the DJI controller. Both include three batteries, a charger and a field toolkit.
    images:
      - src: "/src/assets/projects/pursuit-drone/analog-kit.png"
        caption: "Analog kit — FatShark HDO2 goggles, Tango 2 radio."
      - src: "/src/assets/projects/pursuit-drone/dji-kit.png"
        caption: "DJI kit — DJI Goggles 2 and controller."
gallery:
  - src: "/src/assets/projects/pursuit-drone/photo-apr-15-2023-5-03-28-pm.jpg"
    caption: "Pursuit drone with action camera, ready to chase."
---

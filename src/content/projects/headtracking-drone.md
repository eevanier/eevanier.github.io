---
title: "Headtracking Drone"
tagline: "An FPV drone whose camera turns with the pilot's head."
date: 2022-06-01
tags: ["FPV", "Drones", "Robotics", "Head Tracking"]
thumbnail: "/src/assets/projects/headtracking-drone/thumbnail.png"
featured: false
summary: "Normal FPV cameras are fixed to the frame, so the pilot can only look where the drone points. I put the camera on a 2-axis gimbal driven by a head tracker in the goggles, so the pilot can look around freely while flying."
contributions:
  - "Designed and 3D printed a lightweight 2-axis camera gimbal."
  - "Routed head-tracker output from the goggles through the radio to gimbal servos via flight-controller passthrough."
  - "Wrote custom mixing to map head movement to servo motion, and tuned it for smooth video."
  # TODO: what was the hardest part? latency? servo jitter? weight?
specs:
  # TODO: fill in — gimbal axes/range, servo model, added weight, measured latency.
  - label: "Gimbal"
    value: "2-axis, 3D printed"
highlights:
  - title: "The gimbal"
    body: |
      A lightweight 2-axis gimbal, designed and printed to hold the FPV camera at the front of the frame, built for durability in crashes and smooth motion.

      <!-- TODO: how did you keep it light? material, servo choice, how it's mounted, range of motion. -->
    images:
      - src: "/src/assets/projects/headtracking-drone/img_4347.png"
        caption: "Side view — camera gimbal on the front of the frame."
      - src: "/src/assets/projects/headtracking-drone/img_4348.png"
        caption: "Top view of the build."
  - title: "Head-to-camera signal path"
    body: |
      An IMU in the goggles measures head orientation. That signal goes into the radio, over the control link to the flight controller, and out to the gimbal servos as passthrough channels. Custom mixing maps head angles to servo positions, and the path was kept short to minimise lag between moving your head and the view changing.

      <!-- TODO: a diagram of the signal path would be great here. Measured latency? -->
---

---
title: "Cheap Drone Swarm"
tagline: "A low-cost drone swarm built from off-the-shelf parts and printed frames."
date: 2022-01-01
tags: ["Drones", "Swarm Robotics", "Cost Optimization", "Prototyping"]
# TODO: thumbnail is a blank placeholder — add a photo of the swarm.
thumbnail: "/src/assets/projects/cheap-drone-swarm/thumbnail.png"
featured: false
summary: "Swarm robotics usually needs expensive hardware. I built a fleet of low-cost drones from off-the-shelf parts and printed frames, running a decentralized control approach for coordinated flight."
contributions:
  - "Selected the cheapest motors, ESCs and flight controllers that still flew reliably."
  - "Designed printed frames so units could be built quickly and cheaply."
  - "Implemented decentralized control for formation flight."
  # TODO: what was clever here? positioning method? comms between drones? cost per unit?
specs:
  # TODO: fill in — cost per drone, number of drones, flight controller, how drones localize.
  - label: "Control"
    value: "Decentralized"
highlights:
  - title: "Cost per unit"
    body: |
      Every component was chosen to bring down the per-drone cost without giving up stable flight, so the swarm could scale.

      <!-- TODO: give the actual cost and a BOM breakdown — that number is the story here. -->
  - title: "Swarm control"
    body: |
      The drones coordinate without a single central controller, so more units can join without redesigning the system.

      <!-- TODO: how do drones know where they and the others are? what algorithm? how did you test it? -->
---

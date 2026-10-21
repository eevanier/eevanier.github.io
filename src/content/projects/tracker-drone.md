---
title: "Tracker Drone"
tagline: "A small indoor drone that holds position and follows a subject without GPS."
date: 2022-10-01
tags: ["Drones", "Indoor Flight", "Robotics", "Tracking"]
thumbnail: "/src/assets/projects/tracker-drone/thumbnail.png"
featured: true
summary: "Indoors there's no GPS to hold position. I built a guarded micro-quad that uses optical flow and a rangefinder to hover in place, plus an onboard companion computer running vision-based tracking to follow a target."
contributions:
  - "Integrated optical-flow and rangefinder sensors for GPS-free position hold."
  - "Programmed tracking logic with computer-vision libraries on an onboard companion computer."
  - "Built on a guarded micro frame so it's safe to fly around people indoors."
  # TODO: which parts of the tracking did you write yourself? what made it work?
specs:
  # TODO: fill in — frame size, companion computer, sensors, weight, flight time.
  - label: "Positioning"
    value: "Optical flow + rangefinder"
highlights:
  - title: "Holding position without GPS"
    body: |
      A downward-facing optical-flow sensor tracks ground texture to measure drift, and a rangefinder holds altitude, so the drone can hover in place indoors.

      <!-- TODO: sensor models, how you tuned position hold, what surfaces it struggled on. -->
  - title: "Onboard vision tracking"
    body: |
      A companion computer runs the tracking: it finds the target in the camera feed and sends position commands to the flight controller to keep it in frame.

      <!-- TODO: which board, which library/model, frame rate, how commands reach the FC (MAVLink? MSP?). -->
    images:
      - src: "/src/assets/projects/tracker-drone/drone-elais-15.jpg"
        caption: "Guarded micro frame with the camera and electronics stack."
gallery:
  - src: "/src/assets/projects/tracker-drone/drone-elais-21.jpg"
    caption: "Full kit — drone, goggles, controller and backpack."
---

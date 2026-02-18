---
title: "Tracker Drone"
tagline: "Small indoor drone system."
date: 2022-10-01
tags: ["Drones", "Indoor Flight", "Robotics", "Tracking"]
thumbnail: "./thumbnail.png"
featured: true
challenge: "Designing a small-scale drone capable of controlled indoor flight and tracking."
solution: "Developed a compact drone platform equipped with optical flow sensors and a lightweight camera for indoor navigation. Implemented a custom tracking algorithm to follow subjects."
outcome: "Created a functional prototype that can autonomously hover and track a target within a confined indoor space."
role: "Robotics Engineer"
timeline: "Oct 2022 - Dec 2022"
buildLog:
  - stage: "Platform Selection"
    date: "Oct 2022"
    description: "Chose a micro-quadcopter frame suitable for indoor flight with propeller guards."
  - stage: "Sensor Integration"
    date: "Nov 2022"
    description: "Integrated optical flow and rangefinder sensors for position hold without GPS."
  - stage: "Tracking Algorithm"
    date: "Dec 2022"
    description: "Programmed accurate tracking logic using computer vision libraries running on an onboard companion computer."
---

## Overview

The Tracker Drone is designed for indoor applications where GPS is unavailable. It focuses on stability, safety, and autonomy in small spaces.

## Key Technologies

- **Optical Flow**: Uses downward-facing cameras to detect ground texture and maintain position.
- **Computer Vision**: Onboard processing to identify and follow targets.
- **Safety First**: Full propeller guards and lightweight design to prevent damage or injury indoors.

## Potential Applications

- **Indoor Security**: Autonomous patrol of indoor spaces.
- **Inventory Management**: Scanning barcodes or tags in warehouses.
- **Personal Assistant**: Following the user to capture video or carry small items.

---
title: "Headtracking Drone"
tagline: "FPV drone system with head-tracking capabilities."
date: 2022-06-01
tags: ["FPV", "Drones", "Robotics", "Head Tracking", "Immersive Technology"]
thumbnail: "./thumbnail.png"
featured: true
challenge: "Standard FPV drone systems offer a fixed camera view, limiting situational awareness. The goal was to create a system where the camera moves in sync with the pilot's head movements for an immersive flight experience."
solution: "Integrated a 2-axis gimbal on a custom drone frame, controlled by head-tracking sensors in the FPV goggles. Developed custom mixing logic to map head movements to gimbal servos."
outcome: "Achieved a deeply immersive flight experience allowing the pilot to look around freely during flight, significantly enhancing situational awareness and immersion."
role: "Systems Engineer"
timeline: "Jun 2022 - Aug 2022"
buildLog:
  - stage: "Gimbal Design"
    date: "Jun 2022"
    description: "Designed and 3D printed a lightweight 2-axis gimbal to hold the FPV camera."
  - stage: "System Integration"
    date: "Jul 2022"
    description: "Connected the head tracker module to the radio transmitter and configured the flight controller to pass through servo signals."
  - stage: "Flight Testing"
    date: "Aug 2022"
    description: "Tuned the PID loops for the gimbal and drone to ensure smooth video and stable flight."
---

## Overview

The Headtracking Drone project pushes the boundaries of First Person View (FPV) flight. By syncing the camera's orientation with the pilot's head movements, it creates a "cockpit" experience remotely.

## Technical Implementation

- **Head Tracker**: Uses an IMU sensor mounted on the FPV goggles to detect pitch, roll, and yaw.
- **Low Latency Control**: Optimized signal path to minimize latency between head movement and camera response.
- **Custom Gimbal**: A bespoke 3D printed gimbal mechanism designed for durability and smooth motion.

## Flight Experience

This system allows for unique flight styles, such as looking into turns before executing them or inspecting objects from different angles while hovering.

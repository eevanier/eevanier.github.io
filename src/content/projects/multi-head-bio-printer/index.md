---
title: "Multi-Head Bio Printer"
tagline: "Development of a multi-head 3D bioprinter."
date: 2021-09-01
tags: ["Bioengineering", "3D Printing", "Hardware Design", "Research"]
thumbnail: "./thumbnail.png"
featured: false
challenge: "Existing bioprinters were either prohibitively expensive or lacked the ability to print with multiple materials simultaneously. The challenge was to build an affordable, open-source multi-material bioprinter."
solution: "Designed a custom tool-changer system for a standard 3D printer frame, allowing for automatic swapping of syringe pump extruders. Developed firmware modifications to support multiple extruders."
outcome: "Successfully demonstrated multi-material prints with hydrogels and other bio-inks, proving the concept for low-cost tissue engineering research."
role: "Lead Mechanical Engineer"
timeline: "Sep 2021 - Dec 2021"
buildLog:
  - stage: "Mechanism Design"
    date: "Sep 2021"
    description: "Detailed CAD design of the tool-changing mechanism and syringe pump extruders."
  - stage: "Firmware Development"
    date: "Oct 2021"
    description: "Modified Marlin firmware to handle the tool change scripts and multiple extruder offsets."
  - stage: "Calibration & Testing"
    date: "Nov 2021 - Dec 2021"
    description: "Calibrated the system for precise layer alignment and tested printability with alginate and gelatin."
---

## Overview

This project aims to accelerate bioengineering research by providing an accessible platform for complex tissue scaffold fabrication. The Multi-Head Bio Printer is capable of printing with multiple bio-inks in a single print job.

## System Architecture

- **Tool Changer**: A magnetic coupling system allows the printer to pick up and park different print heads.
- **Syringe Extruders**: Motor-driven syringe pumps provide precise control over flow rates for viscous bio-materials.
- **Environmental Control**: (Optional) Enclosure design to maintain sterility and humidity.

## Impact

By reducing the cost of hardware, this project enables more labs and students to experiment with 3D bioprinting technologies.

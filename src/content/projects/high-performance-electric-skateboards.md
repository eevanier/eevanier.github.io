---
title: "High-Performance Electric Skateboards"
tagline: "Two purpose-built electric skateboards that fixed the safety, speed and stability flaws of early consumer boards."
date: 2020-12-01
tags: ["Mechanical Design", "Electronics Integration", "Vehicle Dynamics", "Prototyping"]
thumbnail: "/src/assets/projects/high-performance-electric-skateboards/cover.jpg"
featured: false
summary: "Early consumer e-boards cut power without warning, dropped their remote link and ran unprotected batteries — and standard longboard decks got dangerously unstable at their advertised speeds. I designed two boards, each tuned for one riding style, that solved those failure modes."
contributions:
  - "Picked every electrical component around a failure mode: ESCs with real overcurrent protection, a remote link that doesn't drop, and BMS-protected cells."
  - "Matched deck construction to the job — a flexible bamboo deck for a 28 mph all-terrain board and a stiff maple deck for a wobble-free 40 mph board."
  - "Speed- and wobble-tested both boards at target velocity and validated the overcurrent and remote failsafes."
  - "Re-tuned deck profiles and ESC settings from rider feedback gathered on forums and Reddit."
specs:
  - label: "Bamboo board top speed"
    value: "28 mph"
  - label: "Maple board top speed"
    value: "40 mph"
  # TODO: add battery config (e.g. 10s4p), motor kv, range, weight.
highlights:
  - title: "Deck stiffness tuned to speed"
    body: |
      Wobble at speed comes from a deck that flexes and lets the trucks oscillate. The two boards take opposite approaches on purpose:

      - **Bamboo all-terrain board (28 mph):** flexible bamboo composite that soaks up rough pavement and carves well, paired with a high-torque setup for hills.
      - **Maple high-speed board (40 mph):** stiff maple layup that keeps the trucks planted and the board tracking straight.

      <!-- TODO: how did you test flex? layup count, deflection test, truck angle/bushings chosen? -->
    images:
      - src: "/src/assets/projects/high-performance-electric-skateboards/decks.jpg"
        caption: "The two deck shapes after cutting."
      - src: "/src/assets/projects/high-performance-electric-skateboards/deck-edge.jpg"
        caption: "Edge of a deck, showing the laminated plies."
      - src: "/src/assets/projects/high-performance-electric-skateboards/deck-cad.jpg"
        caption: "Deck shape modeled in CAD."
      - src: "/src/assets/projects/high-performance-electric-skateboards/deck-cad-top.jpg"
        caption: "Top view of the deck outline in CAD."
  - title: "Designing out the failure modes"
    body: |
      Every component choice traced back to a specific way consumer boards were failing riders:

      - **Sudden power cuts** → ESCs with proper overcurrent protection and smooth power delivery.
      - **Remote disconnects at speed** → a reliable remote link with tested failsafe behavior.
      - **Battery fire risk** → properly rated cells with BMS protection.

      <!-- TODO: name the ESC / remote / cell model, and how you tested each failsafe. -->
    images:
      - src: "/src/assets/projects/high-performance-electric-skateboards/drivetrain-cad.jpg"
        caption: "Motor mount and drivetrain modeled in CAD."
      - src: "/src/assets/projects/high-performance-electric-skateboards/wiring.jpg"
        caption: "Wiring and setting up the electronics."
  - title: "Designing for riders, not just myself"
    body: |
      The first prototypes reflected my own riding preferences. Feedback from forums and Reddit showed most riders cared more about comfort and predictable braking than raw speed and hard acceleration, so I re-tuned deck profiles and ESC settings for that market.
    images:
      - src: "/src/assets/projects/high-performance-electric-skateboards/rider-feedback.jpg"
        caption: "Rider feedback on a Reddit launch post."
      - src: "/src/assets/projects/high-performance-electric-skateboards/web-listing.jpg"
        caption: "Deck listed for sale on the brand website."
gallery:
  - src: "/src/assets/projects/high-performance-electric-skateboards/board-outdoors.jpg"
    caption: "A finished board outdoors."
  - src: "/src/assets/projects/high-performance-electric-skateboards/board-gloves-remote.jpg"
    caption: "Board with riding gloves and the remote."
  - src: "/src/assets/projects/high-performance-electric-skateboards/render.jpg"
    caption: "Render of a complete board."
---

# auto-starting-position-2025

## Definition
The auto-starting-position-2025 data represents the (x, y) percentage coordinates of the position in which the center of the robot started within the starting zone. The point (0, 0) is defined to be the top left corner of the image near corner of the blue barge, and the point (100, 100) is defined to be the bottom right corner of the image near blue alliance's processor.

![Auto Starting Area 2025](/assets/auto-starting-area-2025.png)

## Values
This property stores an object with the keys "x" and "y" which map to integers between 0 and 100 inclusive.

## Examples
- {"x": 50, "y": 50}
- {"x": 10, "y": 90}

## Design Recommendation
This property can be implemented as a clickable image. A similar red alliance version of the image would be mirrored left to right, so the x value would be inverted (100 - x).
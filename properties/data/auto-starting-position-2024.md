# auto-starting-position-2024

## Definition
The (x,y) percentage coordinates of the position in which the robot started within the starting zone. (0,0) is defined to be the top left corner of the image (near the source.) (100,100) is defined to be the bottom right corner of the image (near the amp.)

![auto starting area 2024](auto-starting-area-2024.png)

## Values
This property stores an object with an "x" and a "y" where x and y are integers between 0 and 100 (inclusive)

## Examples
- {"x":50,"y":50}
- {"x":10,"y":90}

## Design Recommendation
This property can be implemented as a clickable image.
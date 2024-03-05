# auto-starting-position-2024

## Definition
The (x,y) percentage coordinates of the position in which the **center of the robot** started within the starting zone. 

For the blue alliance, (0,0) is defined to be the **top left** corner of this image (near the source). (100,100) is defined to be the **bottom right** corner of this image (near the amp).

![blue auto starting area 2024](../../assets/auto-starting-area-blue-2024.png)

For the red alliance, (0,0) is defined to be the **top right** corner of this image (near the source). (100,100) is defined to be the **bottom left** corner of this image (near the amp).

![red auto starting area 2024](../../assets/auto-starting-area-red-2024.png)


## Values
This property stores an object with the keys "x" and "y" which map to integers between 0 and 100 inclusive.

## Examples
- `{"x":50,"y":50}`
- `{"x":10,"y":90}`

## Design Recommendation
This property can be implemented as a clickable image and can be visualized as a heat map.

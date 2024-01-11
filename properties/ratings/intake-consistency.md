# intake-consistency

## Definition
The intake-consistency rating represents a subjective evaluation of the robot's ability to intake game pieces during the match.

## Values
This property stores an integer value on a 0-4 scale based on the robot's ability to intake game pieces.
- 4: exceptional consistency in intake ability
- 3: above average consistency in intake ability
- 2: average consistency in intake ability
- 1: below average consistency in intake ability
- 0: poor consistency in intake ability

## Examples
- 4
- 3
- 2
- 1
- 0

## Design Recommendation
This property can be implemented as a 5-star rating indicator, where a user can select anywhere from 1-5 stars (mapped internally on a 0-4 scale). Alternatively, this property could be implemented as a slider from 0 to 4 with a step size of 1.

# driver-skill

## Definition
The driver-skill rating represents a subjective evaluation of the driver's skill during the match.

## Values
This property stores an integer value on a 0-4 scale based on the driver's skill.
- 4: exceptional driver skill
- 3: above average driver skill
- 2: average driver skill
- 1: below average driver skill
- 0: poor driver skill

## Examples
- 4
- 3
- 2
- 1
- 0

## Design Recommendation
This property can be implemented as a 5-star rating indicator, where a user can select anywhere from 1-5 stars (mapped internally on a 0-4 scale). Alternatively, this property could be implemented as a slider from 0 to 4 with a step size of 1.

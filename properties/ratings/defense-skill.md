# defense-skill

## Definition
The defense-skill rating represents a subjective evaluation of the team's defense ability and strategy during the match.

## Values
This property stores an integer value on a 0-4 scale based on the bot's defense ability.
- 4: exceptional defense skill
- 3: above average defense skill
- 2: average defense skill
- 1: below average defense skill
- 0: poor defense skill / did not play defense

## Examples
- 4
- 3
- 2
- 1
- 0

## Design Recommendation
This property can be implemented as a 5-star rating indicator, where a user can select anywhere from 1-5 stars (mapped internally on a 0-4 scale). Alternatively, this property could be implemented as a slider from 0 to 4 with a step size of 1.

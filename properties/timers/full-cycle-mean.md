# full-cycle-mean

## Definition
A full cycle is defined as a trip from the far end of the field to pick up a game piece, back to the home end of the field to place the game piece, then back to the far end to pick up another game piece. A full cycle could also start with a placing in the home area, then a pick-up on the far side of the field, then back to the home end for another place.  Other actions that the robot performs interrupt a full cycle. Interruptions include dropping a game piece, missing when trying to place a game piece, or picking up a game piece that isn't at the far end of the field.  A team may complete many full cycles in a match, and this value records the mean (average).

## Values
This property stores an integer value of milliseconds.

## Examples
- 9839
- 15332

## Design Recommendation
This data can be derived automatically from collection and placement button presses. Impossibly fast full cycles should be ignored: it is not possible to complete a full cycle in less than 7 seconds. To calculate the mean, your app will need to either keep a list of all cycles, or record the sum time of all cycles and the number of cycles.
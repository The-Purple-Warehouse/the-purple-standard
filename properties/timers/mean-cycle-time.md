# mean-cycle-time

## Definition
A cycle is defined as the overall trip that a robot makes to score a game piece. It can be represented as a trip from the home end to the far end of the field to pick up a game piece, followed by a trip back to the home end of the field to place the piece. The starting point of a cycle can be chosen at any point in that journey as long as the ending point is in the same physical location as the starting point and one cycle has been completed when going from the starting point to the ending point. A team may complete many cycles in a match, and this value records the mean (average) cycle time.

## Values
This property stores an integer value of milliseconds.

## Examples
- 9839
- 15332

## Design Recommendation
This data can be derived automatically from button presses for scoring and/or game piece collection. Impossibly fast cycles should be ignored (it is not possible to complete a cycle in less than a second). To calculate the mean, the app will need to either keep a list of all cycles or record the cumulative time of all cycles as well as the total number of cycles.
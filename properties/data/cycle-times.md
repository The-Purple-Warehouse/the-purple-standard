# cycle-times

## Definition
A cycle is defined as the overall trip that a robot makes to score a game piece. It can be represented as a trip from the home end to the far end of the field to pick up a game piece, followed by a trip back to the home end of the field to place the piece. The starting point of a cycle can be chosen at any point in that journey as long as the ending point is in the same physical location as the starting point and one cycle has been completed when going from the starting point to the ending point. A team may complete many cycles in a match, and this value records the cycle time for each of them.

## Values
This property stores a list of integer values, each of which is a cycle time in milliseconds in the order that the cycles occurred.

## Examples
- []
- [9450, 15899, 8384]

## Design Recommendation
This data can be derived automatically from button presses for scoring and/or game piece collection. Impossibly fast cycles should be ignored (it is not possible to complete a cycle in less than a second).
# cage-time-2025

## Definition
The cage-time-2025 timer represents the time a robot spends between parking under the barge to clibm and the robot succesfully climbing the cage (leaving the ground).

## Values
This property stores an integer value of milliseconds based on the time a robot spends climbing the cage.

## Examples
- 100
- 1000
- 5000

## Design Recommendation
This property can be implemented as a timer, where a user can start and stop the timer whenever the robot is climbing the cage. Although not recommended, this property could alternatively be implemented as a numerical input box, where a user can provide an estimation of the number of milliseconds the robot is climbing the cage.

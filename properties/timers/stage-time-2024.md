# stage-time-2024

## Definition
The stage-time-2024 timer represents the time a robot spends between entering the stage zone to climb and the robot reaching the onstage position.

## Values
This property stores an integer value of milliseconds based on the time a robot spends climbing the stage.

## Examples
- 100
- 1000
- 5000

## Design Recommendation
This property can be implemented as a timer, where a user can start and stop the timer whenever the robot is climbing the stage. Although not recommended, this property could alternatively be implemented as a numerical input box, where a user can provide an estimation of the number of milliseconds the robot is climbing the stage.

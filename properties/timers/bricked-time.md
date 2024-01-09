# bricked-time

## Definition
The bricked-time timer represents the time a robot is incapable of playing due to a technical issue ("bricked").

## Values
This property stores an integer value of milliseconds based on the time a robot is bricked.

## Examples
- 100
- 1000
- 5000

## Design Recommendation
This property can be implemented as a timer, where a user can start and stop the timer whenever the robot is bricked. Although not recommended, this property could alternatively be implemented as a numerical input box, where a user can provide an estimation of the number of milliseconds the robot is bricked.

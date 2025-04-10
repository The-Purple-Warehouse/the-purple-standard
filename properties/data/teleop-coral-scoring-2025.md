# teleop-coral-scoring-2025

## Definition
The teleop-coral-scoring-2025 data represents a chronologically ordered list of coral scored on the reef during the teleop period of the match.

## Values
This property stores a list of values based on the locations of scored coral.
- "cs1" - a coral scored on level 1 (trough) of the reef
- "cs2" - a coral scored on level 2 of the reef
- "cs3" - a coral scored on level 3 of the reef
- "cs4" - a coral scored on level 4 of the reef
- "cm1" - a coral missed on level 1 (trough) of the reef
- "cm2" - a coral missed on level 2 of the reef
- "cm3" - a coral missed on level 3 of the reef
- "cm4" - a coral missed on level 4 of the reef

## Examples
- ["cs1", "cs2", "cm3", "cs4"]
- []

## Design Recommendation
This property can be implemented as a series of counter elements, where a user can increment or decrement various counters based on the locations of scored coral game pieces.
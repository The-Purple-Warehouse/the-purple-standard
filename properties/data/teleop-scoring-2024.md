# teleop-scoring-2024

## Definition
The teleop-scoring-2024 data represents a chronologically ordered list of game elements scored in various locations during the teleoperated period of the match.

## Values
This property stores a list of values based on the locations and types of scored game elements.
- "as" - a note scored in an amp
- "am" - a note missed in an amp
- "ss" - a note scored in a non-amplified speaker
- "sa" - a note scored in an amplified speaker
- "sm" - a note missed in a speaker
- "ts" - a note scored in a trap
- "tm" - a note missed in a trap

## Examples
- ["ss", "as", "am", "as", "sa", "as", "ss", "ts"]
- []

## Design Recommendation
This property can be implemented as a series of counter elements, where a user can increment or decrement various counters based on the locations of scored game elements.

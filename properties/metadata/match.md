# match

## Definition
The match metadata represents the TBA-formatted match number for the match being scouted.

## Values
This property stores an object representation of the TBA-formatted match number for the match being scouted.
- level - the TBA-formatted competition level ("q" for qualification matches, "sf" for all elimination matches, "f" for all finals matches)
- number - the TBA-formatted match number
- set - the TBA-formatted set number

## Examples
- {level: "q", number: 1, set: 1}
- {level: "q", number: 2, set: 1}
- {level: "q", number: 3, set: 1}
- {level: "sf", number: 1, set: 1}
- {level: "sf", number: 1, set: 2}
- {level: "sf", number: 1, set: 3}
- {level: "f", number: 1, set: 1}
- {level: "f", number: 2, set: 1}

## Design Recommendation
This property can be implemented as a series of dropdown menus or text input fields, where a user can select the match they are currently scouting.
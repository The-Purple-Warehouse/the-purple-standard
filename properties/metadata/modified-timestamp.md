# modified-timestamp

## Definition
The modified-timestamp metadata represents the timestamp at which this data was last modified (as opposed to the `timestamp` metadata property that records when the data was created).

## Values
This property stores a timestamp when the scouting data is last modified. The timestamp is in Unix milliseconds time format (the number of milliseconds since midnight UTC on January 1st, 1970)

## Examples
- 1711728192000
- 1711729092182

## Design Recommendation
This property does not need an associated user input as it can be determined automatically by the scouting app.

# auto-algae-scoring-2025

## Definition
The auto-algae-scoring-2025 data represents a chronologically ordered list of algae scored in the net or processor during the autonomous period of the match.

## Values
This property stores a list of values based on the locations of scored algae.
- "asn" - an algae scored in the net
- "asp" - an algae scored in the processor
- "amn" - an algae missed in the net
- "amp" - an algae missed in the processor

## Examples
- ["asn", "amn", "asp", "amp"]
- []

## Design Recommendation
This property can be implemented as a series of counter elements, where a user can increment or decrement various counters based on the locations of scored algae game pieces.
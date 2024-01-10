# scouter

## Definition
The scouter metadata represents the user currently scouting the match.

## Values
This property stores an object representation of the user currently scouting the match.
- name - the username or name of the person scouting
- team - the team that is affiliated with the scouter
- app - an identifier for the app used to collect the scouting data

## Examples
- {name: "kabir", team: "1072", app: "tpw"}

## Design Recommendation
This property can be implemented as a series of text input fields, where a user can enter their information.
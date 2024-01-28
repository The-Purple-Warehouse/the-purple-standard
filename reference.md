# Reference
These are the properties that currently exist in the TPS repository, but they are not a required list of data that needs to be submitted. If you collect data that does not fit within one of the existing properties, please add a property file under [/properties](/properties) by submitting a pull request so that the data can be standardized and interoperable!
## Table of Contents
- [Interfaces](#interfaces)
- [Properties](#properties)
	- [abilities](#abilities)
	- [counters](#counters)
	- [data](#data)
	- [metadata](#metadata)
	- [ratings](#ratings)
	- [timers](#timers)

## Interfaces
| name | definition | examples |
|---|---|---|
| [abilities](/interfaces/abilities.md) | An ability represents a singular action or state that a robot can take or be in during the match. | <ul><li>Leave Starting Zone: true</li><li>Leave Starting Zone: false</li><li>Ending Position: "none"</li><li>Ending Position: "parked"</li><li>Ending Position: "hanging"</li><li>Auto Status: 0</li><li>Auto Status: 1</li><li>Auto Status: 2</li></ul> |
| [counters](/interfaces/counters.md) | A counter represents a repeated action that a robot can take during the match. | <ul><li>Game Pieces Scored: 0</li><li>Game Pieces Scored: 1</li><li>Game Pieces Scored: 2</li><li>Game Pieces Scored: 3</li><li>Fouls: 0</li><li>Fouls: 1</li><li>Fouls: 2</li><li>Fouls: 3</li></ul> |
| [data](/interfaces/data.md) | This is the default interface and can be used for any type of data that does not match any other interface. | <ul><li>Pieces Scored: ["high", "medium", "high", "low", "low", "missed"]</li><li>Notes: "good robot"</li><li>Attachments: {image: "&lt;bytes&gt;"}</li></ul> |
| [metadata](/interfaces/metadata.md) | This is the metadata interface and can be used for any type of data that does not directly relate to actions performed by a robot during a match. | <ul><li>Event: 2024camb</li><li>Match: {level: "q", number: 1, set: 1}</li><li>Bot: "9999"</li><li>Scouter: {name: "kabir", team: "1072", app: "tpw"}</li><li>Timestamp: 1711728192000</li></ul> |
| [ratings](/interfaces/ratings.md) | A rating represents a subjective evaluation of actions that a robot can take during the match. | <ul><li>Drive Skill: 0</li><li>Drive Skill: 1</li><li>Drive Skill: 2</li><li>Drive Skill: 3</li><li>Drive Skill: 4</li><li>Intake Consistency: 2</li><li>Intake Consistency: 3</li></ul> |
| [timers](/interfaces/timers.md) | A timer represents the duration of time spent on an action that a robot can take during the match. | <ul><li>Defense Time: 0ms</li><li>Defense Time: 100ms</li><li>Defense Time: 3000ms</li><li>Brick Time: 5s</li><li>Brick Time: 10s</li></ul> |

## Properties

### abilities
| name | definition | values |
|---|---|---|
| [auto-center-line-pick-up](/properties/abilities/auto-center-line-pick-up.md) | The auto-center-line-pick-up ability represents whether the robot can pick up game pieces from the center line during the autonomous period of the match. | This property stores a boolean (true/false) value depending on whether or not the robot can pick up game pieces from the center line during the autonomous period of the match.<br><ul><li>true - the robot can pick up game pieces from the center line during autonomous</li><li>false - the robot cannot pick up game pieces from the center line during autonomous</li></ul> |
| [auto-leave-starting-zone](/properties/abilities/auto-leave-starting-zone.md) | The auto-leave-starting-zone ability represents whether the robot leaves the starting zone during the autonomous period of the match. | This property stores a boolean (true/false) value depending on whether or not the robot leaves the starting zone.<br><ul><li>true - the robot leaves the starting zone</li><li>false - the robot does not leave the starting zone</li></ul> |
| [bricked](/properties/abilities/bricked.md) | The bricked ability represents whether the robot was bricked (unable to participate due to a technical issue) at any point in the match for any amount of time. | This property stores a boolean (true/false) value depending on whether or not the robot was bricked at any point in the match for any amount of time.<br><ul><li>true - the robot bricked</li><li>false - the robot did not brick</li></ul> |
| [coopertition](/properties/abilities/coopertition.md) | If the robot's alliance met the coopertition requirements (regardless of whether or not the other alliance reciprocated). | This property stores a boolean (true/false) value |
| [defense](/properties/abilities/defense.md) | The defense ability represents whether the robot played defensively at any point in the match for any amount of time. | This property stores a boolean (true/false) value depending on whether or not the robot played defensively at any point in the match.<br><ul><li>true - the robot played defensively</li><li>false - the robot never played defensively</li></ul> |
| [ground-pick-up](/properties/abilities/ground-pick-up.md) | The ground-pick-up ability represents whether the robot can pick up game pieces from the ground. | This property stores a boolean (true/false) value depending on whether or not the robot can pick up game pieces from the ground.<br><ul><li>true - the robot can ground intake</li><li>false - the robot cannot ground intake</li></ul> |
| [teleop-spotlight-2024](/properties/abilities/teleop-spotlight-2024.md) | The teleop-spotlight-2024 ability represents whether the robot is spotlit (high note scored on their microphone by human player) during the teleoperated period of the match. | This property stores a boolean (true/false) value depending on whether or not the robot was spotlit during the final 20 seconds of the teleoperated period of the match.<br><ul><li>true - the robot was spotlit</li><li>false - the robot was not spotlit</li></ul> |
| [teleop-stage-level-2024](/properties/abilities/teleop-stage-level-2024.md) | The teleop-stage-level-2024 ability represents the level of stage climb of the robot at the end of the teleoperated period of the match. | This property stores an integer (0 - 4) based on the level of stage climb.<br><ul><li>4: onstage in harmony with two other robots</li><li>3: onstage in harmony with one other robot</li><li>2: onstage</li><li>1: parked</li><li>0: none</li></ul> |

### counters
| name | definition | values |
|---|---|---|
| [auto-scoring-amp-2024](/properties/counters/auto-scoring-amp-2024.md) | The auto-scoring-amp-2024 counter represents the number of game elements scored in an amp during the autonomous period of the match. | This property stores an integer value of the number of game elements scored in an amp during the autonomous period. |
| [auto-scoring-speaker-2024](/properties/counters/auto-scoring-speaker-2024.md) | The auto-scoring-speaker-2024 counter represents the number of game elements scored in a speaker during the autonomous period of the match. | This property stores an integer value of the number of game elements scored in a speaker during the autonomous period. |
| [teleop-scoring-amp-2024](/properties/counters/teleop-scoring-amp-2024.md) | The teleop-scoring-amp-2024 counter represents the number of game elements scored in an amp during the teleop period of the match. | This property stores an integer value of the number of game elements scored in an amp during the teleop period. |
| [teleop-scoring-amplified-speaker-2024](/properties/counters/teleop-scoring-amplified-speaker-2024.md) | The teleop-scoring-amplified-speaker-2024 counter represents the number of game elements scored in the speaker while amplified during the teleop period of the match. | This property stores an integer value of the number of game elements scored in the speaker while amplified during the teleop period. |
| [teleop-scoring-speaker-2024](/properties/counters/teleop-scoring-speaker-2024.md) | The teleop-scoring-speaker-2024 counter represents the number of game elements scored in the speaker while not amplified during the teleop period of the match. | This property stores an integer value of the number of game elements scored in the speaker while not amplified during the teleop period. |
| [teleop-scoring-trap-2024](/properties/counters/teleop-scoring-trap-2024.md) | The teleop-scoring-trap-2024 counter represents the number of game elements scored in a trap during the teleop period of the match. | This property stores an integer value of the number of game elements scored in a trap during the teleop period. |

### data
| name | definition | values |
|---|---|---|
| [auto-scoring-2024](/properties/data/auto-scoring-2024.md) | The auto-scoring-2024 data represents a chronologically ordered list of game elements scored in various locations during the autonomous period of the match. | This property stores a list of values based on the locations of scored game elements.<br><ul><li>"as" - a note scored in an amp</li><li>"am" - a note missed in an amp</li><li>"ss" - a note scored in a non-amplified speaker</li><li>"sm" - a note missed in a speaker</li></ul> |
| [notes](/properties/data/notes.md) | The notes data represents a block of text with qualitative observations about a robot or team. | This property stores a string of text, and the character "\n" is used to denote a newline. |
| [teleop-scoring-2024](/properties/data/teleop-scoring-2024.md) | The teleop-scoring-2024 data represents a chronologically ordered list of game elements scored in various locations during the teleoperated period of the match. | This property stores a list of values based on the locations and types of scored game elements.<br><ul><li>"as" - a note scored in an amp</li><li>"am" - a note missed in an amp</li><li>"ss" - a note scored in a non-amplified speaker</li><li>"sa" - a note scored in an amplified speaker</li><li>"sm" - a note missed in a speaker</li><li>"ts" - a note scored in a trap</li><li>"tm" - a note missed in a trap</li></ul> |

### metadata
| name | definition | values |
|---|---|---|
| [bot](/properties/metadata/bot.md) | The bot metadata represents the team number of the bot being scouted. | This property stores a string value value of the team number of the bot being scouted. |
| [event](/properties/metadata/event.md) | The event metadata represents the TBA-formatted event key for the match being scouted. | This property stores a string value value of the TBA-formatted event key for the match being scouted. |
| [match](/properties/metadata/match.md) | The match metadata represents the TBA-formatted match number for the match being scouted. | This property stores an object representation of the TBA-formatted match number for the match being scouted.<br><ul><li>level - the TBA-formatted competition level ("qm" for qualification matches, "sf" for elimination matches, "f" for finals matches)</li><li>number - the TBA-formatted match number</li><li>set - the TBA-formatted set number</li></ul> |
| [scouter](/properties/metadata/scouter.md) | The scouter metadata represents the user currently scouting the match. | This property stores an object representation of the user currently scouting the match.<br><ul><li>name - the username or name of the person scouting</li><li>team - the team that is affiliated with the scouter</li><li>app - an identifier for the app used to collect the scouting data</li></ul> |
| [timestamp](/properties/metadata/timestamp.md) | The timestamp metadata represents the client-side timestamp when the scouting data is submitted (if applicable) or otherwise finalized. | This property stores a timestamp when the scouting data is submitted (if applicable) or otherwise finalized using the number of milliseconds since the Unix timestamp. |

### ratings
| name | definition | values |
|---|---|---|
| [defense-skill](/properties/ratings/defense-skill.md) | The defense-skill rating represents a subjective evaluation of the team's defense ability and strategy during the match. | This property stores an integer value on a 0-4 scale based on the bot's defense ability.<br><ul><li>4: exceptional defense skill</li><li>3: above average defense skill</li><li>2: average defense skill</li><li>1: below average defense skill</li><li>0: poor defense skill / did not play defense</li></ul> |
| [driver-skill](/properties/ratings/driver-skill.md) | The driver-skill rating represents a subjective evaluation of the driver's skill during the match. | This property stores an integer value on a 0-4 scale based on the driver's skill.<br><ul><li>4: exceptional driver skill</li><li>3: above average driver skill</li><li>2: average driver skill</li><li>1: below average driver skill</li><li>0: poor driver skill</li></ul> |
| [intake-consistency](/properties/ratings/intake-consistency.md) | The intake-consistency rating represents a subjective evaluation of the robot's ability to intake game pieces during the match. | This property stores an integer value on a 0-4 scale based on the robot's ability to intake game pieces.<br><ul><li>4: exceptional consistency in intake ability</li><li>3: above average consistency in intake ability</li><li>2: average consistency in intake ability</li><li>1: below average consistency in intake ability</li><li>0: poor consistency in intake ability</li></ul> |
| [speed](/properties/ratings/speed.md) | The speed rating represents a subjective evaluation of the speed of the robot during the match. | This property stores an integer value on a 0-4 scale based on the robot's speed.<br><ul><li>4: very fast speed</li><li>3: above average speed</li><li>2: average speed</li><li>1: below average speed</li><li>0: very slow speed</li></ul> |
| [stability](/properties/ratings/stability.md) | The stability rating represents a subjective evaluation of the stability of the robot during the match. | This property stores an integer value on a 0-4 scale based on the robot's stability.<br><ul><li>4: exceptional stablility</li><li>3: above average stability</li><li>2: average stability</li><li>1: below average stability</li><li>0: poor stability</li></ul> |

### timers
| name | definition | values |
|---|---|---|
| [brick-time](/properties/timers/brick-time.md) | The brick-time timer represents the time a robot is incapable of playing due to a technical issue ("bricked"). | This property stores an integer value of milliseconds based on the time a robot is bricked. |
| [defense-time](/properties/timers/defense-time.md) | The defense-time timer represents the time a robot spends performing defensive maneuvers during the match. | This property stores an integer value of milliseconds based on the time a robot spends performing defensive maneuvers. |
| [stage-time-2024](/properties/timers/stage-time-2024.md) | The stage-time-2024 timer represents the time a robot spends between entering the stage zone to climb and the robot reaching the onstage position. | This property stores an integer value of milliseconds based on the time a robot spends climbing the stage. |
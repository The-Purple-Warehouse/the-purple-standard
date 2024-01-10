# Reference

## Table of Contents
- [Interfaces](#interfaces)
- [Properties](#properties)
	- [abilities](#abilities)
	- [counters](#counters)
	- [data](#data)
	- [ratings](#ratings)
	- [timers](#timers)

## Interfaces
| name | definition | examples |
|---|---|---|
| [ability](/interfaces/ability.md) | An ability represents a singular action that a robot can take during the match. | <ul><li>Leave Starting Zone: true</li><li>Leave Starting Zone: false</li><li>Ending Position: "none"</li><li>Ending Position: "parked"</li><li>Ending Position: "hanging"</li><li>Auto Status: 0</li><li>Auto Status: 1</li><li>Auto Status: 2</li></ul> |
| [counter](/interfaces/counter.md) | A counter represents a repeated action that a robot can take during the match. | <ul><li>Game Pieces Scored: 0</li><li>Game Pieces Scored: 1</li><li>Game Pieces Scored: 2</li><li>Game Pieces Scored: 3</li><li>Fouls: 0</li><li>Fouls: 1</li><li>Fouls: 2</li><li>Fouls: 3</li></ul> |
| [data](/interfaces/data.md) | This is the default interface and can be used for any type of data that does not match any other interface. | <ul><li>Pieces Scored: ["high", "medium", "high", "low", "low", "missed"]</li><li>Notes: "good robot"</li><li>Attachments: {image: "&lt;bytes&gt;"}</li></ul> |
| [rating](/interfaces/rating.md) | An rating represents a subjective evaluation of actions that a robot can take during the match. | <ul><li>Drive Skill: 0</li><li>Drive Skill: 1</li><li>Drive Skill: 2</li><li>Drive Skill: 3</li><li>Drive Skill: 4</li><li>Intake Consistency: 2</li><li>Intake Consistency: 3</li></ul> |
| [timer](/interfaces/timer.md) | A timer represents the duration of time spent on an action that a robot can take during the match. | <ul><li>Defense Time: 0ms</li><li>Defense Time: 100ms</li><li>Defense Time: 3000ms</li><li>Endgame Time: 5s</li><li>Endgame Time: 10s</li></ul> |

## Properties

### abilities
| name | definition | values |
|---|---|---|
| [center-line-pick-up](/properties/abilities/center-line-pick-up.md) | The center-line-pick-up ability represents whether the robot can pick up game pieces from the center line during the autonomous period of the match. | This property stores a boolean (true/false) value depending on whether or not the robot can pick up game pieces from the center line during the autonomous period of the match.<br><ul><li>true - the robot can pick up game pieces from the center line during autonomous</li><li>false - the robot cannot pick up game pieces from the center line during autonomous</li></ul> |
| [ground-pick-up](/properties/abilities/ground-pick-up.md) | The ground-pick-up ability represents whether the robot can pick up game pieces from the ground. | This property stores a boolean (true/false) value depending on whether or not the robot can pick up game pieces from the ground.<br><ul><li>true - the robot can ground intake</li><li>false - the robot cannot ground intake</li></ul> |
| [leave-starting-zone](/properties/abilities/leave-starting-zone.md) | The leave-starting-zone ability represents whether the robot leaves the starting zone during the autonomous period of the match. | This property stores a boolean (true/false) value depending on whether or not the robot leaves the starting zone.<br><ul><li>true - the robot leaves the starting zone</li><li>false - the robot does not leave the starting zone</li></ul> |
| [spotlight-2024](/properties/abilities/spotlight-2024.md) | The spotlight-2024 ability represents whether the robot can pick up game pieces from the ground. | This property stores a boolean (true/false) value depending on whether or not the robot was spotlit (High Note scored on their microphone by human player) during the final 20 seconds of the match.<br><ul><li>true - the robot was spotlit</li><li>false - the robot was not spotlit</li></ul> |
| [stage-level-2024](/properties/abilities/stage-level-2024.md) | The stage-level-2024 ability represents the level of stage climb of the robot at the end of the match. | This property stores an integer (0 - 3) based on the level of stage climb.<br><ul><li>3: onstage in harmony</li><li>2: onstage</li><li>1: parked</li><li>0: none</li></ul> |

### counters
| name | definition | values |
|---|---|---|
| [auto-scoring-amp-2024](/properties/counters/auto-scoring-amp-2024.md) | The auto-scoring-amp-2024 counter represents the number of game elements scored in an amp during the autonomous period of the match. | This property stores an integer value of the number of game elements scored in an amp during the autonomous period. |
| [auto-scoring-speaker-2024](/properties/counters/auto-scoring-speaker-2024.md) | The auto-scoring-speaker-2024 counter represents the number of game elements scored in a speaker during the autonomous period of the match. | This property stores an integer value of the number of game elements scored in a speaker during the autonomous period. |
| [teleop-scoring-amped-speaker-2024](/properties/counters/teleop-scoring-amped-speaker-2024.md) | The teleop-scoring-amped-speaker-2024 counter represents the number of game elements scored in the speaker while amplified during the teleop period of the match. | This property stores an integer value of the number of game elements scored in the speaker while amplified during the teleop period. |
| [teleop-scoring-speaker-2024](/properties/counters/teleop-scoring-speaker-2024.md) | The teleop-scoring-speaker-2024 counter represents the number of game elements scored in the speaker while not amplified during the teleop period of the match. | This property stores an integer value of the number of game elements scored in the speaker while not amplified during the teleop period. |

### data
| name | definition | values |
|---|---|---|
| [auto-scoring-2024](/properties/data/auto-scoring-2024.md) | The auto-scoring-2024 data represents a chronologically ordered list of game elements scored in various locations during the autonomous period of the match. | This property stores a list of values based on the locations of scored game elements.<br><ul><li>"as" - a note scored in an amp</li><li>"am" - a note missed in an amp</li><li>"ss" - a note scored in a non-amplified speaker</li><li>"sm" - a note missed in a speaker</li></ul> |
| [notes](/properties/data/notes.md) | The notes data represents a block of text with qualitative observations about a robot or team. | This property stores a string of text, and the character "\n" is used to denote a newline. |
| [teleop-scoring-2024](/properties/data/teleop-scoring-2024.md) | The teleop-scoring-2024 data represents a chronologically ordered list of game elements scored in various locations during the teleoperated period of the match. | This property stores a list of values based on the locations and types of scored game elements.<br><ul><li>"as" - a note scored in an amp</li><li>"am" - a note missed in an amp</li><li>"ss" - a note scored in a non-amplified speaker</li><li>"sa" - a note scored in an amplified speaker</li><li>"sm" - a note missed in a speaker</li><li>"ts" - a note scored in a trap</li><li>"tm" - a note missed in a trap</li></ul> |

### ratings
| name | definition | values |
|---|---|---|
| [defense-skill](/properties/ratings/defense-skill.md) | The defense-skill rating represents a subjective evaluation of the team's defense ability and strategy during the match. | This property stores an integer value on a 0-4 scale based on the bot's defense ability.<br><ul><li>4: exceptional defense skill</li><li>3: above average defense skill</li><li>2: average defense skill</li><li>1: below average defense skill</li><li>0: poor defense skill / did not play defense</li></ul> |
| [driver-skill](/properties/ratings/driver-skill.md) | The driver-skill rating represents a subjective evaluation of the driver's skill during the match. | This property stores an integer value on a 0-4 scale based on the driver's skill.<br><ul><li>4: exceptional driver skill</li><li>3: above average driver skill</li><li>2: average driver skill</li><li>1: below average driver skill</li><li>0: poor driver skill</li></ul> |
| [intake-consistency](/properties/ratings/intake-consistency.md) | The intake-consistency rating represents a subjective evaluation of the robot's ability to intake game pieces during the match. | This property stores an integer value on a 0-4 scale based on the robot's ability to intake game pieces.<br><ul><li>4: consistently good intake ability</li><li>3: above average</li><li>2: average</li><li>1: below average</li><li>0: poor intake ability</li></ul> |
| [speed](/properties/ratings/speed.md) | The speed rating represents a subjective evaluation of the speed of the robot during the match. | This property stores an integer value on a 0-4 scale based on the robot's speed.<br><ul><li>4: very fast</li><li>3: above average</li><li>2: average</li><li>1: below average</li><li>0: very slow</li></ul> |
| [stability](/properties/ratings/stability.md) | The stability rating represents a subjective evaluation of the stability of the robot during the match. | This property stores an integer value on a 0-4 scale based on the robot's stability.<br><ul><li>4: very stable</li><li>3: above average</li><li>2: average</li><li>1: below average</li><li>0: very unstable</li></ul> |

### timers
| name | definition | values |
|---|---|---|
| [brick-time](/properties/timers/brick-time.md) | The brick-time timer represents the time a robot is incapable of playing due to a technical issue ("bricked"). | This property stores an integer value of milliseconds based on the time a robot is bricked. |
| [defense-time](/properties/timers/defense-time.md) | The defense-time timer represents the time a robot spends performing defensive maneuvers during the match. | This property stores an integer value of milliseconds based on the time a robot spends performing defensive maneuvers. |
| [stage-time-2024](/properties/timers/stage-time-2024.md) | The stage-time-2024 timer represents the time a robot spends between entering the Stage Zone to climb and the robot reaching the Onstage position. | This property stores an integer value of milliseconds based on the time a robot spends climbing. |
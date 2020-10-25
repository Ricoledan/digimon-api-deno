# **デジタルモンスター API**

#### Digital Monster API

👾 Deno powered API for Digimon Digital Monsters.

## Routes

| Methods  | Description                     | Routes        |
| -------- | ------------------------------- | ------------- |
| `GET`    | return all digimon              | digimon       |
| `GET`    | return specific digimon by name | digimon/:name |
| `POST`   | create specific digimon by name | digimon/:name |
| `PUT`    | update specific digimon by name | digimon/:name |
| `DELETE` | delete specific digimon by name | digimon/:name |

## Expectations

[Type](https://wikimon.net/Type) - indicates what sort of category a Digimon's specific species belongs to.

[Attribute](https://wikimon.net/Attribute) - refers to type of computer file a Digimon represents.

[Field](https://wikimon.net/Field) - overall branching group of Digimon that each one belongs to.

## Resources

This work could not be done without the help of the digimon community and the folks at [With the Will](https://withthewill.net/), [Wikimon](wikimon), [Digimon Discord Community](https://discord.gg/0VODO3ww0zghqOCO), [File Island: The Complete Digimon Electronics Resource
](http://lcd.withthewill.net/).

[Wikimon](https://wikimon.net/Main_Page) - The best resource for Digimon info since December 2005.

## Commands

#### Run Dev Environment

```CLI
deno run -A drakefile.ts run
```

#### Format Project

```CLI
deno run -A drakefile.ts fmt
```

#### Test Project

```CLI
deno run -A drakefile.ts test
```

#### Lock Dependencies

```CLI
deno run -A drakefile.ts lock
```

#### Heroku Logs

```CLI
deno run -A drakefile.ts h-logs
```

#### Heroku Procfile

```CLI
deno run -A drakefile.ts h-local
```

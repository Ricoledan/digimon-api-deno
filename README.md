# **デジタルモンスター API**

#### Digital Monster API

👾 Deno powered API for Digimon Digital Monsters.

## Routes

| Methods  | Description                     | Routes        |
| -------- | ------------------------------- | ------------- |
| `GET`    | return all digimon              | digimon       |
| `GET`    | return specific digimon by name | digimon/:name |
| `POST`   | create specific digimon by name | digimon       |
| `PUT`    | update specific digimon by name | digimon/:name |
| `DELETE` | delete specific digimon by name | digimon/:name |

### References

#### Response Schema glossary

[Level](https://wikimon.net/Evolution_Stage) - level of development

[Type](https://wikimon.net/Type) - indicates what sort of category a Digimon's specific species belongs

[Attribute](https://wikimon.net/Attribute) - refers to type of computer file a Digimon represents

[Field](https://wikimon.net/Field) - overall branching group that each digimon is associated with

[Group](https://wikimon.net/Group) - specific theme a digimon is associated with

Technique - signature attacks and abilities

Artwork - profile image

Profile - brief description

## Resources

### **Thank You! ❤️**

This work could not be done without the help of the digimon community and the folks at [With the Will](https://withthewill.net/), [Wikimon](wikimon), [Digimon Discord Community](https://discord.gg/0VODO3ww0zghqOCO), [File Island: The Complete Digimon Electronics Resource
](http://lcd.withthewill.net/), the people at Bandai, the amazing people who will use this to power their applications and my beautiful girlfriend who had the patience to allow me to work on my labor of love through the long nights.

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
deno run -A drakefile.ts hlogs
```

#### Heroku Procfile

```CLI
deno run -A drakefile.ts hlocal
```

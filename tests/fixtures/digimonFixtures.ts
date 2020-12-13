import { ProfileSchema } from "../../src/types.ts";

const allProfiles: ProfileSchema[] = [{
  _id: {
    $oid: "5fd69b1200472f55004e3e05",
  },
  __v: 0,
  name: "agumon",
  level: "child",
  type: "reptile",
  attribute: "vaccine",
  field: [
    "metal empire",
    "nature spirits",
    "virus busters",
    "unknown",
    "dragon's roar",
  ],
  group: null,
  technique: [{
    name: "baby flame",
    description: "Releases a stream of fire from its mouth.",
  }],
  artwork: "https://digimon.net/cimages/digimon/agumon.jpg",
  profile:
    "A Reptile Digimon with an appearance resembling a small dinosaur, it has grown and become able to walk on two legs. Its strength is weak as it is still in the process of growing, but it has a fearless and rather ferocious personality. Hard, sharp claws grow from both its hands and feet, and their power is displayed in battle. It also foreshadows an evolution into a great and powerful Digimon. Its Special Move is spitting a fiery breath from its mouth to attack the opponent (Baby Flame).",
  timestamp: {
    created_at: "2020-12-13T10:24:26.552Z",
    updated_at: null,
    deleted_at: null,
  },
}];

const oneProfile: ProfileSchema = {
  _id: { "$oid": "5fd69b1200472f55004e3e05" },
  __v: 0,
  name: "agumon",
  level: "child",
  type: "reptile",
  attribute: "vaccine",
  field: [
    "metal empire",
    "nature spirits",
    "virus busters",
    "unknown",
    "dragon's roar",
  ],
  group: null,
  technique: [
    {
      name: "baby flame",
      description: "Releases a stream of fire from its mouth.",
    },
  ],
  artwork: "https://digimon.net/cimages/digimon/agumon.jpg",
  profile:
    "A Reptile Digimon with an appearance resembling a small dinosaur, it has grown and become able to wa...",
  timestamp: {
    created_at: "2020-12-13T10:24:26.552Z",
    updated_at: null,
    deleted_at: null,
  },
};

export { allProfiles, oneProfile };

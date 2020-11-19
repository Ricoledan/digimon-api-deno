import digimonRepository from "../repositories/digimonRepository.ts";
import type { Profile } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<Profile[]> {
    const data = await digimonRepository.selectAllProfiles();

    return data;
  }

  async getDigimonByName(name: string): Promise<Profile> {
    const data = await digimonRepository.selectProfileByName(name);

    return data;
  }

  async createDigimon(): Promise<Profile> {
    const profile: Profile = {
    "name": "agumon",
    "level": "child",
    "type": "reptile",
    "attribute": "vaccine",
    "field": ["metal empire", "nature spirits", "virus busters", "unknown", "dragon's roar"],
    "technique": [
        {
            "name": "baby flame",
            "description": "Releases a stream of fire from its mouth."
        }
    ],
    "artwork": "https://digimon.net/cimages/digimon/agumon.jpg",
    "profile": "A Reptile Digimon with an appearance resembling a small dinosaur, it has grown and become able to walk on two legs. Its strength is weak as it is still in the process of growing, but it has a fearless and rather ferocious personality. Hard, sharp claws grow from both its hands and feet, and their power is displayed in battle. It also foreshadows an evolution into a great and powerful Digimon. Its Special Move is spitting a fiery breath from its mouth to attack the opponent (Baby Flame)."
    };

    const data = await digimonRepository.create(profile);

    return data;
  }

  // async updateDigimon(ctx: any): Promise<Profile> {
  //   //
  // }

  // async deleteDigimon(name: string): Promise<Profile> {
  //   //
  // }
}

export default new digimonService();

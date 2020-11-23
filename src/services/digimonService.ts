import digimonRepository from "../repositories/digimonRepository.ts";
import type { Profile } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<Profile[] | string> {
    const data = await digimonRepository.selectAllProfiles();

    return data;
  }

  async getDigimonByName(name: string): Promise<Profile> {
    const data = await digimonRepository.selectProfileByName(name);

    return data;
  }

  async createDigimon(profileData: Profile): Promise<string> {
    const data = await digimonRepository.create(profileData);

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

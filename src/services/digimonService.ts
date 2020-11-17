import digimonRepository from "../repositories/digimonRepository.ts";
import type { Profile } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<any> {
    const data = await digimonRepository.selectAllProfiles();

    return data as Profile[];
  }

  async getDigimonByName(name: string): Promise<any> {
    const data = await digimonRepository.selectProfileByName(name);

    return data as Profile;
  }

  async createDigimon(ctx: any): Promise<any> {
    //
  }

  async updateDigimon(ctx: any): Promise<any> {
    //
  }

  async deleteDigimon(name: string): Promise<any> {
    //
  }
}

export default new digimonService();

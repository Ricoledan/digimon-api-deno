import digimonRepository from "../repositories/digimonRepository.ts";
import type { profile } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<any> {
    const data = await digimonRepository.selectAll();

    return data as profile;
  }

  async getDigimonByName(name: string): Promise<any> {
    //
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

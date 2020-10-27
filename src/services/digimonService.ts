import digimonRepository from "../repositories/digimonRepository.ts";
import type { Digimon } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<any> {
    const data = await digimonRepository.selectAll();
    const digimon = new Array<Digimon>();

    data.rows.map((Digimon: []) => {
      let obj: any;

      data.rowDescription.columns.map((items: any, index: number) => {
        obj[items.name] = digimon[index];
      });

      digimon.push(obj);
    });

    return digimon;
  }

  async getDigimonByName(): Promise<any> {
    //
  }

  async createDigimon(): Promise<any> {
    //
  }

  async updateDigimon(): Promise<any> {
    //
  }

  async deleteDigimon(): Promise<any> {
    //
  }
}

export default new digimonService();

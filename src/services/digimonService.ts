import digimonRepository from "../repositories/digimonRepository.ts";
import type { DigimonProfile } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<any> {
    // const data = await digimonRepository.selectAll();
    // const allDigimon = new Array<DigimonProfile>();

    // data.rows.map((digimon: []) => {
    //   let obj: any;

    //   data.rowDescription.columns.map((item: any, index: number) => {
    //     obj[item.name] = digimon[index];
    //   });

    //   allDigimon.push(obj);
    // });

    // console.log(allDigimon);

    // return allDigimon;
    return 'test1'
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

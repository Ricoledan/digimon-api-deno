import digimonRepository from "../repositories/digimonRepository.ts";
import type { Digimon } from "../types.ts";

class digimonService {
  async getAllDigimon(): Promise<any> {
    const data = await digimonRepository.selectAll();
    const allDigimon = new Array<Digimon>();

    data.rows.map((digimon: []) => {
      let obj: any;

      data.rowDescription.columns.map((item: any, index: number) => {
        obj[item.name] = digimon[index];
      });

      allDigimon.push(obj);
    });

    return allDigimon;
  }

  async getDigimonByName(name: string): Promise<any> {
    const data = await digimonRepository.selectByName(name);
    let digimon: any;

    data.rows.map((digimonData: []) => {
      data.rowDescription.columns.map((item: any, index: number) => {
        digimon[item.name] = digimonData[index];
      });
    });

    return digimon;
  }

  async createDigimon(ctx: any): Promise<any> {
    const body = await ctx.request.body({
      contentTypes: {
        text: ["application/json"],
      },
    });

    let digimon: any;
    digimon.name = body.value.name;
    digimon.level = body.value.level;
    digimon.type = body.value.type;
    digimon.attribute = body.value.attribute;
    digimon.field = body.value.field;
    digimon.group = body.value.group;
    digimon.abilities = body.value.abilities;
    digimon.profile = body.value.profile;
    digimon.profile_img = body.value.profile_img;

    return await digimonRepository.create(digimon);
  }

  async updateDigimon(ctx: any): Promise<any> {
    const body = await ctx.request.body({
      contentTypes: {
        text: ["application/json"],
      },
    });

    let digimon: any;
    digimon.name = ctx.params.name;
    digimon.level = body.value.level;
    digimon.type = body.value.type;
    digimon.attribute = body.value.attribute;
    digimon.field = body.value.field;
    digimon.group = body.value.group;
    digimon.abilities = body.value.abilities;
    digimon.profile = body.value.profile;
    digimon.profile_img = body.value.profile_img;

    return await digimonRepository.update(digimon);
  }

  async deleteDigimon(name: string): Promise<any> {
    return await digimonRepository.delete(name);
  }
}

export default new digimonService();

import digimonRepository from "../repositories/digimonRepository.ts";
import type { Profile } from "../types.ts";

class digimonService {
  async getAllProfiles(): Promise<Profile[] | string> {
    const data = await digimonRepository.selectAllProfiles();

    return data;
  }

  async getProfileByName(name: string): Promise<Profile> {
    const data = await digimonRepository.selectProfileByName(name);

    return data;
  }

  async createProfile(profileData: Profile): Promise<string> {
    const data = await digimonRepository.create(profileData);

    return data;
  }

  async updateProfile(name: string): Promise<any> {
    const getExistingProfile = await digimonRepository.selectProfileByName(name);
    console.log(getExistingProfile);
    const updateProfile = await digimonRepository.update(getExistingProfile)
    

    return updateProfile;
  }

  // async deleteProfile(name: string): Promise<Profile> {
  //   //
  // }
}

export default new digimonService();

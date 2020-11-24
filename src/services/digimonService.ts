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

  async updateProfile(profileData: Profile): Promise<string> {
    const updateProfile = await digimonRepository.update(profileData);

    return updateProfile;
  }

  async deleteProfile(name: string): Promise<any> {
    const deleteProfile = await digimonRepository.delete(name);

    return deleteProfile;
  }
}

export default new digimonService();

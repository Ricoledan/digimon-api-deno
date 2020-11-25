import digimonRepository from "../repositories/digimonRepository.ts";
import type {
  CreateDocumentResponse,
  GetProfileResponse,
  ModifiedDocumentResponse,
  Profile,
} from "../types.ts";

class digimonService {
  async getAllProfiles(): Promise<GetProfileResponse[] | undefined> {
    const data = await digimonRepository.selectAllProfiles();

    return data;
  }

  async getProfileByName(
    name: string,
  ): Promise<GetProfileResponse | undefined> {
    const data = await digimonRepository.selectProfileByName(name);

    return data;
  }

  async createProfile(
    profileData: Profile,
  ): Promise<CreateDocumentResponse | undefined> {
    const data = await digimonRepository.create(profileData);

    return data;
  }

  async updateProfile(
    profileData: Profile,
  ): Promise<ModifiedDocumentResponse | undefined> {
    const updateProfile = await digimonRepository.update(profileData);

    return updateProfile;
  }

  async deleteProfile(
    name: string,
  ): Promise<ModifiedDocumentResponse | undefined> {
    const deleteProfile = await digimonRepository.delete(name);

    return deleteProfile;
  }
}

export default new digimonService();

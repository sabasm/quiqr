import { Profile, IProfile } from '../../../entities/Profile';
import { ProfileRepository, IProfileRepository } from '../../../repository/ProfileRepository';
import { CreateProfileDto, UpdateProfileDto } from '../dto';

export interface IProfileService {
  createProfile(createProfileDto: CreateProfileDto): Promise<IProfile>;
  getProfileById(id: string): Promise<IProfile | null>;
  getProfileByUserId(userId: string): Promise<IProfile | null>;
  updateProfile(id: string, updateProfileDto: UpdateProfileDto): Promise<IProfile | null>;
  deleteProfile(id: string): Promise<boolean>;
  getAllProfiles(): Promise<IProfile[]>;
}

export class ProfileService implements IProfileService {
  private profileRepository: IProfileRepository;

  constructor() {
    this.profileRepository = new ProfileRepository();
  }

  async createProfile(createProfileDto: CreateProfileDto): Promise<IProfile> {
    const profile = new Profile(
      Date.now().toString(), // temporary ID, will be replaced by DB
      createProfileDto.userId,
      createProfileDto.bio,
      createProfileDto.avatarUrl
    );
    return this.profileRepository.create(profile);
  }

  async getProfileById(id: string): Promise<IProfile | null> {
    return this.profileRepository.findById(id);
  }

  async getProfileByUserId(userId: string): Promise<IProfile | null> {
    return this.profileRepository.findByUserId(userId);
  }

  async updateProfile(id: string, updateProfileDto: UpdateProfileDto): Promise<IProfile | null> {
    return this.profileRepository.update(id, updateProfileDto);
  }

  async deleteProfile(id: string): Promise<boolean> {
    return this.profileRepository.delete(id);
  }

  async getAllProfiles(): Promise<IProfile[]> {
    return this.profileRepository.findAll();
  }
}



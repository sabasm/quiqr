import { Profile, IProfile } from '../../../entities/Profile';
import { ProfileRepository } from '../../../repository/ProfileRepository';
import { CreateProfileDto, UpdateProfileDto } from '../dto';
import { LoggerService } from '../../../services/LoggerService';

export class ProfileService {
  private profileRepository: ProfileRepository;
  private logger: LoggerService;

  constructor() {
    this.profileRepository = new ProfileRepository();
    this.logger = new LoggerService();
  }

  async createProfile(createProfileDto: CreateProfileDto): Promise<IProfile> {
    try {
      const profile = new Profile(
        Date.now().toString(),
        createProfileDto.userId,
        createProfileDto.name,
        createProfileDto.bio,
        createProfileDto.avatarUrl
      );
      const createdProfile = await this.profileRepository.create(profile);
      this.logger.info(`Profile created for user: ${createProfileDto.userId}`);
      return createdProfile;
    } catch (error) {
      this.logger.error(`Error creating profile: ${error}`);
      throw error;
    }
  }

  async getProfileById(id: string): Promise<IProfile | null> {
    try {
      return await this.profileRepository.findById(id);
    } catch (error) {
      this.logger.error(`Error fetching profile by ID: ${error}`);
      throw error;
    }
  }

  async getProfileByUserId(userId: string): Promise<IProfile | null> {
    try {
      return await this.profileRepository.findByUserId(userId);
    } catch (error) {
      this.logger.error(`Error fetching profile by user ID: ${error}`);
      throw error;
    }
  }

  async updateProfile(id: string, updateProfileDto: UpdateProfileDto): Promise<IProfile | null> {
    try {
      const updatedProfile = await this.profileRepository.update(id, updateProfileDto);
      if (updatedProfile) {
        this.logger.info(`Profile updated: ${id}`);
      }
      return updatedProfile;
    } catch (error) {
      this.logger.error(`Error updating profile: ${error}`);
      throw error;
    }
  }

  async deleteProfile(id: string): Promise<boolean> {
    try {
      const result = await this.profileRepository.delete(id);
      if (result) {
        this.logger.info(`Profile deleted: ${id}`);
      }
      return result;
    } catch (error) {
      this.logger.error(`Error deleting profile: ${error}`);
      throw error;
    }
  }

  async getAllProfiles(): Promise<IProfile[]> {
    try {
      return await this.profileRepository.findAll();
    } catch (error) {
      this.logger.error(`Error fetching all profiles: ${error}`);
      throw error;
    }
  }
}



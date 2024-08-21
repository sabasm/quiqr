import { CreateProfileDto } from '../dto/CreateProfileDto';
import { Profile } from '@/entities';

export class ProfileService {
  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    const { name } = createProfileDto;
    const profile = new Profile();
    profile.name = name;
    return profile;
  }
}



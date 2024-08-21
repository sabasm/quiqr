import { Entity } from './entity.abstract';

export class Profile extends Entity {
  userId: string;
  name: string;
  bio: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, userId: string, name: string, bio: string, avatarUrl: string) {
    super(id);
    this.userId = userId;
    this.name = name;
    this.bio = bio;
    this.avatarUrl = avatarUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}



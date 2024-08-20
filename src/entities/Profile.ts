import { Entity } from './entity.abstract';

export interface IProfile {
  id: string;
  userId: string;
  bio: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Profile extends Entity implements IProfile {
  userId: string;
  bio: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, userId: string, bio: string, avatarUrl: string) {
    super(id);
    this.userId = userId;
    this.bio = bio;
    this.avatarUrl = avatarUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}



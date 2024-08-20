import { Entity } from './entity.abstract';

export class Media extends Entity {
  url: string;
  type: 'image' | 'video' | 'audio';
  ownerId: string;

  constructor(id: string, url: string, type: 'image' | 'video' | 'audio', ownerId: string) {
    super(id);
    this.url = url;
    this.type = type;
    this.ownerId = ownerId;
  }
}



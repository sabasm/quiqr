import { AbstractRepository } from './repository.abstract';
import { Media } from '../entities/Media';

export class MediaRepository extends AbstractRepository<Media> {
  protected entity = Media;

  async findByType(type: string): Promise<Media[]> {
    // Implementation for finding media by type
    throw new Error('Method not implemented');
  }
}



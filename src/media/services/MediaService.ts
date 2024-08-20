import { AbstractService } from '../../services/service.abstract';

export class MediaService extends AbstractService {
  async execute(action: string, ...args: any[]): Promise<any> {
    // Implement general media actions
    throw new Error('Method not implemented');
  }
}



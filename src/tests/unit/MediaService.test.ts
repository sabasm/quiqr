import { MediaService } from '../../services/MediaService';

describe('MediaService', () => {
  const mediaService = new MediaService();

  it('should upload media', async () => {
    const file = { mimetype: 'image/jpeg' } as File;
    const userId = 'user123';
    const uploadedMedia = await mediaService.uploadMedia(file, userId);
    expect(uploadedMedia).toBeDefined();
  });
});



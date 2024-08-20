import { MediaService } from '../../media/services/MediaService';

describe('MediaService', () => {
  it('should upload a media file', async () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const uploadedMedia = await MediaService.uploadMedia(file);
    expect(uploadedMedia).toBeDefined();
    expect(uploadedMedia.url).toBeTruthy();
  });

  it('should get media by ID', async () => {
    const mediaId = '456';
    const media = await MediaService.getMediaById(mediaId);
    expect(media).toBeDefined();
    expect(media.id).toBe(mediaId);
  });
});



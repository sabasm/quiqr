import request from 'supertest';
import { app } from '../../server';

describe('Media API', () => {
  it('should upload a media file', async () => {
    const response = await request(app)
      .post('/api/media')
      .attach('file', 'path/to/test/file.jpg');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('url');
  });
});



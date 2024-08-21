import { PrismaClient } from '@prisma/client';
import { File } from 'multer';

export class MediaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async uploadMedia(file: File, userId: string) {
    // Implement file upload logic
    const uploadedFileUrl = 'https://example.com/uploaded-file.jpg';

    return this.prisma.media.create({
      data: {
        url: uploadedFileUrl,
        type: file.mimetype.startsWith('image/') ? 'image' : 'video',
        userId,
      },
    });
  }

  async getMediaById(id: string) {
    return this.prisma.media.findUnique({ where: { id } });
  }

  async deleteMedia(id: string) {
    await this.prisma.media.delete({ where: { id } });
    return true;
  }
}



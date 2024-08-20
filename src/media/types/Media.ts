export interface Media {
  id: string;
  url: string;
  type: 'image' | 'video' | 'audio';
  userId: string;
  createdAt: Date;
}



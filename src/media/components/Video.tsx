import React from 'react';

interface VideoProps {
  src: string;
  type: string;
}

export const Video: React.FC<VideoProps> = ({ src, type }) => {
  return (
    <video controls>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};



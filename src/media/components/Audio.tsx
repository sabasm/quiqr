import React from 'react';

interface AudioProps {
  src: string;
  type: string;
}

export const Audio: React.FC<AudioProps> = ({ src, type }) => {
  return (
    <audio controls>
      <source src={src} type={type} />
      Your browser does not support the audio element.
    </audio>
  );
};



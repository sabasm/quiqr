import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const CustomImage: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};



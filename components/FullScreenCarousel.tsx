import { useState } from 'react';
import Carousel from './Carousel';

interface FullScreenCarousel {
  images: string[];
  autoplayInterval?: number;
}

const FullScreenCarousel = ({
  images,
  autoplayInterval = 3000,
}: FullScreenCarousel) => {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      <div className="h-full w-full">
        <Carousel images={images} autoplayInterval={autoplayInterval} />
      </div>
    </div>
  );
};

export default FullScreenCarousel;

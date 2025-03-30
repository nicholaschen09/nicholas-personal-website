import { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  images: string[];
  autoplayInterval?: number;
}

const Carousel = ({ images, autoplayInterval = 3000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number | null>(null);

  // Reset autoplay timer when currentIndex changes
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }

    autoplayTimerRef.current = window.setTimeout(() => {
      goToNext();
    }, autoplayInterval);

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, autoplayInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTranslateX(0);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTranslateX(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setTranslateX(0);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);

    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }

    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    let currentX: number;
    if ('touches' in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }

    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // If the user dragged far enough, change the slide
    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    } else {
      // Reset position
      setTranslateX(0);
    }

    // Restart autoplay
    autoplayTimerRef.current = window.setTimeout(() => {
      goToNext();
    }, autoplayInterval);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="relative w-full h-full"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {/* Images container */}
        <div className="absolute w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out ${
                index === currentIndex ? 'z-10' : 'z-0'
              }`}
              style={{
                transform:
                  index === currentIndex
                    ? `translateX(${translateX}px)`
                    : index === (currentIndex + 1) % images.length
                      ? `translateX(calc(100% + ${translateX}px))`
                      : index ===
                          (currentIndex - 1 + images.length) % images.length
                        ? `translateX(calc(-100% + ${translateX}px))`
                        : 'translateX(100%)',
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125 opacity-100'
                : 'bg-white/50 opacity-70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left and right arrow buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 bg-black/25 hover:bg-black/40 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 bg-black/25 hover:bg-black/40 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;

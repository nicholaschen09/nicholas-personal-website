import FullScreenCarousel from './FullScreenCarousel';

const CarouselContainer = () => {
  const images = ['/tt.png', '/tt2.PNG', '/tt3.PNG'];

  return (
    <div className="h-[225vh] bg-black relative overflow-hidden">
      <div className="w-full h-full">
        <FullScreenCarousel images={images} autoplayInterval={5000} />
      </div>
    </div>
  );
};

export default CarouselContainer;

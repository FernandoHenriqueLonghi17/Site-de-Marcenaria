import React from 'react';
import Carousel from './Carousel';

interface CategoryCarouselProps {
  title: string;
  images: {
    url: string;
    alt: string;
  }[];
  description: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ title, images, description }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-[#B8860B]">{title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>
      <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
        <Carousel images={images} autoPlayInterval={6000} />
      </div>
    </div>
  );
};

export default CategoryCarousel;
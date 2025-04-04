import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1581016120489-8fcc8a6f3d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Marcenaria Profissional'
    },
    {
      url: 'https://images.unsplash.com/photo-1565793979206-10951493332d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Móveis Planejados'
    },
    {
      url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Oficina de Marcenaria'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <Carousel images={carouselImages} />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Qualidade"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-[#B8860B]">Qualidade Premium</h3>
            <p className="text-gray-600">Utilizamos os melhores materiais e técnicas de fabricação</p>
          </div>
          <div className="text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Personalização"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-[#B8860B]">Projetos Personalizados</h3>
            <p className="text-gray-600">Criamos ambientes únicos para seu espaço</p>
          </div>
          <div className="text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1580130037321-446dba3cacc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Experiência"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-[#B8860B]">20+ Anos de Experiência</h3>
            <p className="text-gray-600">Tradição e expertise em ambientes planejados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
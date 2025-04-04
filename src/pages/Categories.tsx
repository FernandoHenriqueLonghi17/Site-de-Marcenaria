import React from 'react';
import CategoryCarousel from '../components/CategoryCarousel';

const Categories = () => {
  const categories = [
    {
      title: 'Salas Planejadas',
      description: 'Ambientes sofisticados e aconchegantes para sua família',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Sala de Estar Moderna'
        },
        {
          url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Sala de TV'
        },
        {
          url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Sala de Jantar'
        }
      ]
    },
    {
      title: 'Quartos Planejados',
      description: 'Espaços confortáveis e funcionais para seu descanso',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Quarto Casal'
        },
        {
          url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Quarto Infantil'
        },
        {
          url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Closet'
        }
      ]
    },
    {
      title: 'Cozinhas Planejadas',
      description: 'Ambientes práticos e elegantes para suas refeições',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Cozinha Moderna'
        },
        {
          url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Cozinha Gourmet'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Cozinha Integrada'
        }
      ]
    },
    {
      title: 'Escritórios Planejados',
      description: 'Espaços produtivos e organizados para seu trabalho',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600494603989-9650cf6dad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Home Office'
        },
        {
          url: 'https://images.unsplash.com/photo-1600494603346-62c8e4f9c6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Escritório Corporativo'
        },
        {
          url: 'https://images.unsplash.com/photo-1600494603989-9650cf6dad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Estação de Trabalho'
        }
      ]
    },
    {
      title: 'Banheiros Planejados',
      description: 'Ambientes sofisticados com soluções inteligentes',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Banheiro Moderno'
        },
        {
          url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Banheiro Suite'
        },
        {
          url: 'https://images.unsplash.com/photo-1600566752547-33e52165dd3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
          alt: 'Lavabo'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Nossos Ambientes</h1>
        
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <CategoryCarousel
                title={category.title}
                images={category.images}
                description={category.description}
              />
            </div>
          </div>
        ))}

        <div className="mt-16 text-center py-12 bg-black text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Transforme Seu Espaço</h2>
          <p className="text-xl mb-8 text-gray-300">
            Crie ambientes únicos com soluções personalizadas e acabamento premium
          </p>
          <button className="bg-[#B8860B] text-white px-8 py-3 rounded-lg hover:bg-[#8B6914] transition-colors">
            Solicite um Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
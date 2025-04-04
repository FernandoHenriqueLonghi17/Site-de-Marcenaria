import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  description: string;
  details: {
    materials: string[];
    dimensions: string;
    timeframe: string;
    features: string[];
  };
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Mesa de Jantar Rústica',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Mesa feita com madeira de demolição',
      details: {
        materials: ['Madeira de demolição', 'Base em aço carbono', 'Verniz fosco protetor'],
        dimensions: '2.20m x 1.00m x 0.78m (C x L x A)',
        timeframe: '45 dias para produção',
        features: [
          'Acabamento artesanal',
          'Proteção contra umidade',
          'Capacidade para 8 pessoas',
          'Garantia de 5 anos'
        ]
      }
    },
    {
      title: 'Estante Moderna',
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Estante minimalista para sala',
      details: {
        materials: ['MDF Premium', 'Acabamento em laca', 'Ferragens importadas'],
        dimensions: '1.80m x 0.40m x 2.20m (C x L x A)',
        timeframe: '30 dias para produção',
        features: [
          'Design modular',
          'Iluminação LED integrada',
          'Nichos ajustáveis',
          'Sistema de fixação reforçado'
        ]
      }
    },
    {
      title: 'Cozinha Planejada',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Projeto completo de cozinha',
      details: {
        materials: ['MDF Ultra', 'Pedra natural', 'Dobradiças Blum'],
        dimensions: 'Projeto sob medida',
        timeframe: '60 dias para produção',
        features: [
          'Gavetas com amortecedor',
          'Iluminação planejada',
          'Organização otimizada',
          'Revestimento antimicrobiano'
        ]
      }
    },
    {
      title: 'Móveis de Escritório',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Conjunto corporativo personalizado',
      details: {
        materials: ['MDF Premium', 'Vidro temperado', 'Alumínio'],
        dimensions: 'Projeto corporativo personalizado',
        timeframe: '45 dias para produção',
        features: [
          'Passagem de fiação embutida',
          'Ergonomia certificada',
          'Divisórias acústicas',
          'Sistema modular expansível'
        ]
      }
    },
    {
      title: 'Rack para TV',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Rack moderno com painel',
      details: {
        materials: ['MDF Premium', 'LED integrado', 'Vidro fumê'],
        dimensions: '2.20m x 0.45m x 1.80m (C x L x A)',
        timeframe: '30 dias para produção',
        features: [
          'Sistema de som integrado',
          'Iluminação ambiente',
          'Passagem de cabos oculta',
          'Suporte para TV até 65"'
        ]
      }
    },
    {
      title: 'Closet Planejado',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      description: 'Closet completo sob medida',
      details: {
        materials: ['MDF Premium', 'Espelho cristal', 'Alumínio'],
        dimensions: 'Projeto sob medida',
        timeframe: '45 dias para produção',
        features: [
          'Iluminação automática',
          'Gavetas organizadoras',
          'Portas com amortecedor',
          'Cabideiros retráteis'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Nossos Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#B8860B]">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#B8860B]">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Materiais Utilizados</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.details.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dimensões</h3>
                  <p className="text-gray-600">{selectedProject.details.dimensions}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prazo de Execução</h3>
                  <p className="text-gray-600">{selectedProject.details.timeframe}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Características</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-8 w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
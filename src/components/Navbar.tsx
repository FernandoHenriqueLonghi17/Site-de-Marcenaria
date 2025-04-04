import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LayoutGrid } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <LayoutGrid className="h-8 w-8 text-[#B8860B]" />
              <span className="text-xl font-bold">Évora Ambientes Planejados</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/') 
                    ? 'bg-[#B8860B] text-white' 
                    : 'text-white hover:bg-[#B8860B]/20'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/categorias" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/categorias') 
                    ? 'bg-[#B8860B] text-white' 
                    : 'text-white hover:bg-[#B8860B]/20'
                }`}
              >
                Categorias
              </Link>
              <Link 
                to="/projetos" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/projetos') 
                    ? 'bg-[#B8860B] text-white' 
                    : 'text-white hover:bg-[#B8860B]/20'
                }`}
              >
                Projetos
              </Link>
              <Link 
                to="/contato" 
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive('/contato') 
                    ? 'bg-[#B8860B] text-white' 
                    : 'text-white hover:bg-[#B8860B]/20'
                }`}
              >
                Contato
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#B8860B]/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-[#B8860B] text-white' 
                  : 'text-white hover:bg-[#B8860B]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/categorias"
              className={`block px-3 py-2 rounded-md transition-colors ${
                isActive('/categorias') 
                  ? 'bg-[#B8860B] text-white' 
                  : 'text-white hover:bg-[#B8860B]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Categorias
            </Link>
            <Link
              to="/projetos"
              className={`block px-3 py-2 rounded-md transition-colors ${
                isActive('/projetos') 
                  ? 'bg-[#B8860B] text-white' 
                  : 'text-white hover:bg-[#B8860B]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </Link>
            <Link
              to="/contato"
              className={`block px-3 py-2 rounded-md transition-colors ${
                isActive('/contato') 
                  ? 'bg-[#B8860B] text-white' 
                  : 'text-white hover:bg-[#B8860B]/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
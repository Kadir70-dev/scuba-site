import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-serif text-xl text-stone-800">
            Miraal by Saima Shaikh
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about-founder')}
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('ajrak-fabrics')}
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Ajrak Fabrics
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about-founder')}
                className="text-stone-600 hover:text-stone-900 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('ajrak-fabrics')}
                className="text-stone-600 hover:text-stone-900 transition-colors text-left"
              >
                Ajrak Fabrics
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-stone-600 hover:text-stone-900 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-stone-600 hover:text-stone-900 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
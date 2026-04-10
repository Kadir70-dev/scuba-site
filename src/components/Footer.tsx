import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-white mb-4">Miraal by Saima Shaikh</h3>
            <p className="text-stone-400 leading-relaxed">
              Connecting global textile trade with fashion innovation through authentic 
              Ajrak craftsmanship and sustainable practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about-founder');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('ajrak-fabrics');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Ajrak Fabrics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-2 text-stone-400">
              <p>saima@miraal.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, India | Dubai, UAE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">
            © 2024 Miraal by Saima Shaikh. All rights reserved.
          </p>
          <p className="text-stone-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for sustainable fashion
          </p>
        </div>
      </div>
    </footer>
  );
}
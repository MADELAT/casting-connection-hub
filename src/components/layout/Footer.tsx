
import { Link } from "react-router-dom";
import { Film, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=2274&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-casting-950/90"></div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Film className="h-8 w-8 text-accent-copper" />
              <span className="ml-2 text-xl font-playfair font-bold tracking-tight">CastingHub</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Conectando actores y creadores para impulsar el arte dramático.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent-copper transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-copper transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-copper transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-copper transition-colors duration-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-copper">Plataforma</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-copper">Recursos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/actor-resources" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Para actores
                </Link>
              </li>
              <li>
                <Link to="/producer-resources" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Para productores
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Consejos para castings
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-copper">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} CastingHub. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

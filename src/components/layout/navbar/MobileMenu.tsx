
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isScrolled: boolean;
  pathname: string;
}

const MobileMenu = ({ isScrolled, pathname }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userProfile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-md p-2 transition-colors",
          {
            "text-white hover:bg-white/10": !isScrolled && pathname === "/",
            "text-casting-600 hover:bg-casting-100": isScrolled || pathname !== "/"
          }
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Abrir menú</span>
        {isMenuOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-50">
          <div className="bg-white px-4 pt-2 pb-3 space-y-1 animate-fade-in shadow-md">
            <Link to="/for-talent" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Para Talento
            </Link>
            <Link to="/search" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Actores
            </Link>
            <Link to="/models" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Modelos
            </Link>
            <Link to="/post-job" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Publicar Rol
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Nosotros
            </Link>
            <Link to="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Cómo Funciona
            </Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50">
              Precios
            </Link>
            
            {user ? (
              <>
                <Link 
                  to={
                    userProfile?.userType === 'actor' ? '/actor/dashboard' :
                    userProfile?.userType === 'producer' ? '/producer/dashboard' :
                    userProfile?.userType === 'model' ? '/model/dashboard' : 
                    userProfile?.userType === 'admin' ? '/admin/dashboard' : '/'
                  }
                  className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50"
                >
                  Mi Dashboard
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <div className="pt-4 flex flex-col space-y-2">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to="/register" className="w-full">
                  <Button className="w-full bg-accent-copper hover:bg-accent-copper/90 text-white">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

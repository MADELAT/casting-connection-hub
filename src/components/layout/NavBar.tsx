
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Film, Settings, LogOut, UserCheck, Search, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavBarProps {
  userType?: 'actor' | 'producer' | 'agent' | null;
  isLoggedIn: boolean;
}

const NavBar = ({ userType, isLoggedIn }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-casting-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Film className="h-8 w-8 text-accent-copper" />
              <span className="ml-2 text-xl font-playfair font-bold tracking-tight">CastingHub</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              to="/" 
              className={cn(
                "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                isActive("/") && "text-accent-copper"
              )}
            >
              Inicio
            </Link>
            
            <Link 
              to="/how-it-works" 
              className={cn(
                "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                isActive("/how-it-works") && "text-accent-copper"
              )}
            >
              Cómo funciona
            </Link>
            
            <Link 
              to="/pricing" 
              className={cn(
                "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                isActive("/pricing") && "text-accent-copper"
              )}
            >
              Precios
            </Link>
            
            {isLoggedIn ? (
              <>
                {userType === 'actor' && (
                  <Link 
                    to="/actor/dashboard" 
                    className={cn(
                      "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                      isActive("/actor/dashboard") && "text-accent-copper"
                    )}
                  >
                    Mi Perfil
                  </Link>
                )}
                
                {userType === 'producer' && (
                  <Link 
                    to="/producer/dashboard" 
                    className={cn(
                      "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                      isActive("/producer/dashboard") && "text-accent-copper"
                    )}
                  >
                    Panel de Control
                  </Link>
                )}
                
                {(userType === 'producer' || userType === 'agent') && (
                  <Link 
                    to="/search" 
                    className={cn(
                      "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                      isActive("/search") && "text-accent-copper"
                    )}
                  >
                    Buscar Talento
                  </Link>
                )}
                
                <Link 
                  to="/account/settings" 
                  className={cn(
                    "text-casting-600 hover:text-accent-copper px-3 py-2 text-sm font-medium transition-colors", 
                    isActive("/account/settings") && "text-accent-copper"
                  )}
                >
                  Configuración
                </Link>
                
                <Button 
                  variant="ghost" 
                  className="text-casting-600 hover:text-accent-copper"
                  onClick={() => console.log("Logout clicked")}
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-casting-600 hover:text-accent-copper">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white">
                    Registrarse
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-casting-600 hover:text-accent-copper focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white border-b border-casting-100 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                isActive("/") ? "text-accent-copper" : "text-casting-600"
              )}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Inicio
              </div>
            </Link>
            
            <Link 
              to="/how-it-works" 
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                isActive("/how-it-works") ? "text-accent-copper" : "text-casting-600"
              )}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Film className="mr-2 h-5 w-5" />
                Cómo funciona
              </div>
            </Link>
            
            <Link 
              to="/pricing" 
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                isActive("/pricing") ? "text-accent-copper" : "text-casting-600"
              )}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Precios
              </div>
            </Link>
            
            {isLoggedIn ? (
              <>
                {userType === 'actor' && (
                  <Link 
                    to="/actor/dashboard" 
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                      isActive("/actor/dashboard") ? "text-accent-copper" : "text-casting-600"
                    )}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Mi Perfil
                    </div>
                  </Link>
                )}
                
                {userType === 'producer' && (
                  <Link 
                    to="/producer/dashboard" 
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                      isActive("/producer/dashboard") ? "text-accent-copper" : "text-casting-600"
                    )}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center">
                      <UserCheck className="mr-2 h-5 w-5" />
                      Panel de Control
                    </div>
                  </Link>
                )}
                
                {(userType === 'producer' || userType === 'agent') && (
                  <Link 
                    to="/search" 
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                      isActive("/search") ? "text-accent-copper" : "text-casting-600"
                    )}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center">
                      <Search className="mr-2 h-5 w-5" />
                      Buscar Talento
                    </div>
                  </Link>
                )}
                
                <Link 
                  to="/account/settings" 
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium hover:bg-casting-50", 
                    isActive("/account/settings") ? "text-accent-copper" : "text-casting-600"
                  )}
                  onClick={closeMenu}
                >
                  <div className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Configuración
                  </div>
                </Link>
                
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50"
                  onClick={() => {
                    closeMenu();
                    console.log("Logout clicked");
                  }}
                >
                  <div className="flex items-center">
                    <LogOut className="mr-2 h-5 w-5" />
                    Cerrar Sesión
                  </div>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-casting-600 hover:bg-casting-50"
                  onClick={closeMenu}
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-accent-copper hover:bg-accent-copper/90"
                  onClick={closeMenu}
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

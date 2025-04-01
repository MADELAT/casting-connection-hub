import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Menu, X, Film } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { UserType } from "@/types";

interface NavBarProps {
  userType?: UserType | null;
  isLoggedIn?: boolean;
}

const NavBar = ({ userType = null, isLoggedIn = false }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, userProfile, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    await signOut();
  };

  const navbarClasses = cn(
    "sticky top-0 z-50 w-full transition-all duration-300",
    {
      "bg-white/80 backdrop-blur-md shadow-sm": isScrolled,
      "bg-transparent": !isScrolled && location.pathname === "/",
      "bg-white": !isScrolled && location.pathname !== "/"
    }
  );

  const logoClasses = cn(
    "text-xl font-bold tracking-tight transition-colors duration-300 flex items-center",
    {
      "text-white": !isScrolled && location.pathname === "/",
      "text-casting-900": isScrolled || location.pathname !== "/"
    }
  );

  const linkClasses = cn(
    "text-sm transition-colors duration-300",
    {
      "text-white/80 hover:text-white": !isScrolled && location.pathname === "/",
      "text-casting-600 hover:text-casting-900": isScrolled || location.pathname !== "/"
    }
  );

  return (
    <header className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className={logoClasses}>
              <Film className="h-6 w-6 mr-2 text-accent-copper" />
              CastingHub
            </Link>
            
            <div className="hidden md:ml-10 md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/for-talent">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Para Talento
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Casting</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <li>
                          <Link to="/search">
                            <NavigationMenuLink className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                              <div className="text-sm font-medium leading-none">Actores</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Encuentra actores y actrices para tus proyectos
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/models">
                            <NavigationMenuLink className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                              <div className="text-sm font-medium leading-none">Modelos</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Explora perfiles de modelos profesionales
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/models">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Modelos
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/post-job">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Publicar Rol
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/about">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Nosotros
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/how-it-works">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Cómo Funciona
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/pricing">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Precios
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="hidden md:block">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full transition-all duration-300 hover:bg-accent-copper/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-casting-100">
                      <User className="h-5 w-5 text-casting-600" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-casting-100">
                      <User className="h-4 w-4 text-casting-600" />
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <p className="text-sm font-medium">{userProfile?.name || "Usuario"}</p>
                      <p className="text-xs text-casting-500">{userProfile?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link 
                      to={
                        userProfile?.userType === 'actor' ? '/actor/dashboard' :
                        userProfile?.userType === 'producer' ? '/producer/dashboard' :
                        userProfile?.userType === 'model' ? '/model/dashboard' : 
                        userProfile?.userType === 'admin' ? '/admin/dashboard' : '/'
                      }
                      className="cursor-pointer"
                    >
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login">
                  <Button variant="ghost" className={linkClasses}>
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex md:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2 transition-colors",
                {
                  "text-white hover:bg-white/10": !isScrolled && location.pathname === "/",
                  "text-casting-600 hover:bg-casting-100": isScrolled || location.pathname !== "/"
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
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white px-4 pt-2 pb-3 space-y-1 animate-fade-in">
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
    </header>
  );
};

export default NavBar;

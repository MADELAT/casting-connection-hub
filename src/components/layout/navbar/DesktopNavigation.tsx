
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface DesktopNavigationProps {
  linkClasses: string;
}

const DesktopNavigation = ({ linkClasses }: DesktopNavigationProps) => {
  return (
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
  );
};

export default DesktopNavigation;

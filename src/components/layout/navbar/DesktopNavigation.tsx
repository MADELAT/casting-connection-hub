
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface DesktopNavigationProps {
  linkClasses: string;
}

const DesktopNavigation = ({ linkClasses }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex gap-8 ml-10">
      <Link to="/for-talent" className={linkClasses}>
        Para Talento
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(linkClasses, "flex items-center gap-1 outline-none")}>
          Casting <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-48">
          <DropdownMenuItem asChild>
            <Link to="/search" className="w-full cursor-pointer">Actores</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/models" className="w-full cursor-pointer">Modelos</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link to="/models" className={linkClasses}>
        Modelos
      </Link>
      
      <Link to="/post-job" className={linkClasses}>
        Publicar Rol
      </Link>
      
      <Link to="/about" className={linkClasses}>
        Nosotros
      </Link>
      
      <Link to="/how-it-works" className={linkClasses}>
        Cómo Funciona
      </Link>
      
      <Link to="/pricing" className={linkClasses}>
        Precios
      </Link>
    </nav>
  );
};

export default DesktopNavigation;

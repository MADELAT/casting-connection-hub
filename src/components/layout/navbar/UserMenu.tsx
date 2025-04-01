
import { Link } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, LogOut, Settings, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

interface UserMenuProps {
  linkClasses: string;
}

const UserMenu = ({ linkClasses }: UserMenuProps) => {
  const { user, userProfile, signOut } = useAuth();
  
  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <Link to="/login" className={linkClasses}>
          Iniciar Sesión
        </Link>
        <Link to="/register">
          <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg font-sans font-normal">
            Regístrate
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          {userProfile?.profilePicture ? (
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <UserCircle className="h-6 w-6" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userProfile?.name || user.email}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={
            userProfile?.userType === 'actor' ? '/actor/dashboard' :
            userProfile?.userType === 'producer' ? '/producer/dashboard' :
            userProfile?.userType === 'model' ? '/model/dashboard' :
            userProfile?.userType === 'admin' ? '/admin/dashboard' : '/'
          } className="w-full cursor-pointer">
            Mi Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/castings-abiertos" className="w-full cursor-pointer">
            Castings Abiertos
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/settings" className="w-full cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Configuración</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Cerrar Sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

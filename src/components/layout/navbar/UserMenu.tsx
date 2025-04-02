
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut, Settings, Clipboard, CameraIcon, Film } from "lucide-react";
import { UserType } from "@/types";

const UserMenu = () => {
  const { user, userProfile, signOut } = useAuth();
  
  if (!user || !userProfile) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="text-sm text-casting-600 hover:text-accent-copper transition-colors"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-sm font-medium text-white bg-accent-copper rounded-md hover:bg-accent-copper/90 transition-colors"
        >
          Regístrate
        </Link>
      </div>
    );
  }

  const getDashboardLink = (userType: UserType) => {
    switch (userType) {
      case 'actor':
        return '/actor/dashboard';
      case 'producer':
        return '/producer/dashboard';
      case 'model':
        return '/model/dashboard';
      case 'admin':
        return '/admin/dashboard';
      default:
        return '/';
    }
  };

  const getNameInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none focus:ring-2 focus:ring-accent-copper focus:ring-offset-2 rounded-full">
          <Avatar>
            <AvatarFallback className="bg-accent-copper text-white">
              {getNameInitials(userProfile.name)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userProfile.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userProfile.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <Link to={getDashboardLink(userProfile.userType)}>
          <DropdownMenuItem className="cursor-pointer">
            {userProfile.userType === 'actor' && <Film className="mr-2 h-4 w-4" />}
            {userProfile.userType === 'model' && <CameraIcon className="mr-2 h-4 w-4" />}
            {userProfile.userType === 'producer' && <Clipboard className="mr-2 h-4 w-4" />}
            {userProfile.userType === 'admin' && <Settings className="mr-2 h-4 w-4" />}
            Mi Dashboard
          </DropdownMenuItem>
        </Link>
        
        {userProfile.userType !== 'admin' && (
          <Link to={`/${userProfile.userType}/profile`}>
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Mi Perfil
            </DropdownMenuItem>
          </Link>
        )}
        
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar Sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

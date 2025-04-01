
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UserMenuProps {
  linkClasses: string;
}

const UserMenu = ({ linkClasses }: UserMenuProps) => {
  const { user, userProfile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
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
    </>
  );
};

export default UserMenu;

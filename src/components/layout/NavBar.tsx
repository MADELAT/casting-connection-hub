import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavbarStyles } from "./navbar/useNavbarStyles";
import Logo from "./navbar/Logo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import UserMenu from "./navbar/UserMenu";
import MobileMenu from "./navbar/MobileMenu";
import { UserType } from "@/types";

interface NavBarProps {
  userType?: UserType | null;
  isLoggedIn?: boolean;
}

const NavBar = ({ userType = null, isLoggedIn = false }: NavBarProps) => {
  const location = useLocation();
  const { navbarClasses, logoClasses, linkClasses, isScrolled } = useNavbarStyles();

  useEffect(() => {
    // Ensure mobile menu closes on route change
    // This is handled by the dependency array including location
  }, [location]);

  return (
    <header className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo logoClasses={logoClasses} />
            <DesktopNavigation linkClasses={linkClasses} />
          </div>
          
          <div className="hidden md:block">
            <UserMenu linkClasses={linkClasses} />
          </div>
          
          <MobileMenu 
            isScrolled={isScrolled} 
            pathname={location.pathname} 
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;

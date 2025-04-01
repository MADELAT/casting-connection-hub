
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  userType?: 'actor' | 'producer' | 'agent' | 'model' | null;
  isLoggedIn?: boolean;
  hideFooter?: boolean;
}

const MainLayout = ({ 
  children, 
  userType = null, 
  isLoggedIn = false,
  hideFooter = false
}: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar userType={userType} isLoggedIn={isLoggedIn} />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

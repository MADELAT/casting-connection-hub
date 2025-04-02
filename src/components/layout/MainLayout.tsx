
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { UserType } from "@/types";

interface MainLayoutProps {
  children: ReactNode;
  userType?: UserType;
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
      <main className="flex-grow animate-fade-in">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

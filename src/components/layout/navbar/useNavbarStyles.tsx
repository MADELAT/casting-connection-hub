
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const useNavbarStyles = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return {
    isScrolled,
    navbarClasses,
    logoClasses,
    linkClasses,
    pathname: location.pathname
  };
};


import { Link } from "react-router-dom";
import { Film } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  logoClasses: string;
}

const Logo = ({ logoClasses }: LogoProps) => {
  return (
    <Link to="/" className={logoClasses}>
      <Film className="h-6 w-6 mr-2 text-accent-copper" />
      CastingHub
    </Link>
  );
};

export default Logo;


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ActorProfile } from "@/types";
import { 
  Heart, 
  Star, 
  Eye, 
  User, 
  Mail, 
  FileText, 
  ArrowRight 
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ActorCardProps {
  actor: ActorProfile;
  isFavorite?: boolean;
  onToggleFavorite?: (actorId: string) => void;
}

const ActorCard = ({ actor, isFavorite = false, onToggleFavorite }: ActorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white border border-casting-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={actor.profilePicture || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"} 
          alt={`${actor.name}`} 
          className="w-full h-56 object-cover object-center"
        />
        
        {onToggleFavorite && (
          <button 
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-casting-900 p-2 rounded-full hover:bg-white transition"
            onClick={() => onToggleFavorite(actor.id)}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </button>
        )}
        
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent py-4 px-4">
          <h3 className="text-white font-bold text-lg truncate">{actor.name}</h3>
          <p className="text-white/90 text-sm">
            {actor.age} años, {actor.height}cm
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="bg-casting-50">
            {actor.gender}
          </Badge>
          <Badge variant="outline" className="bg-casting-50">
            {actor.physicalType}
          </Badge>
          <Badge variant="outline" className="bg-casting-50">
            {actor.bodyType}
          </Badge>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-casting-600">
            <User className="h-4 w-4 mr-2 text-casting-400" />
            <span>
              <span className="font-medium">Características:</span> Cabello {actor.hairColor}, Ojos {actor.eyeColor}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-casting-600">
            <FileText className="h-4 w-4 mr-2 text-casting-400" />
            <span>
              <span className="font-medium">Clips:</span> {actor.clips.length} disponibles
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {actor.clips.slice(0, 4).flatMap(clip => clip.tags).filter((tag, index, self) => 
            self.indexOf(tag) === index
          ).slice(0, 3).map((tag, index) => (
            <Badge key={index} className="bg-accent-copper/10 text-accent-copper border-accent-copper/20">
              {tag}
            </Badge>
          ))}
          {actor.clips.flatMap(clip => clip.tags).filter((tag, index, self) => 
            self.indexOf(tag) === index
          ).length > 3 && (
            <Badge variant="outline">+{actor.clips.flatMap(clip => clip.tags).filter((tag, index, self) => 
              self.indexOf(tag) === index
            ).length - 3} más</Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4 text-casting-400" />
            <span className="text-xs text-casting-500">42 vistas</span>
          </div>
          
          <Link to={`/actor/${actor.id}`}>
            <Button 
              variant="outline" 
              className="text-accent-blue border-accent-blue hover:bg-accent-blue/10"
            >
              Ver perfil
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;

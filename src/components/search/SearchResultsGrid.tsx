
import React from "react";
import ActorCard from "@/components/producer/ActorCard";
import { ActorProfile } from "@/types";

interface SearchResultsGridProps {
  actors: ActorProfile[];
  favoriteActors: string[];
  onToggleFavorite: (actorId: string) => void;
}

const SearchResultsGrid = ({ actors, favoriteActors, onToggleFavorite }: SearchResultsGridProps) => {
  if (actors.length === 0) {
    return (
      <div className="bg-casting-50 border border-casting-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-medium mb-2">No se encontraron resultados</h3>
        <p className="text-casting-500">
          Intenta con criterios de búsqueda diferentes.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {actors.map((actor) => (
        <ActorCard 
          key={actor.id} 
          actor={actor}
          isFavorite={favoriteActors.includes(actor.id)}
          onToggleFavorite={onToggleFavorite}
          className="animate-fade-in hover-scale"
        />
      ))}
    </div>
  );
};

export default SearchResultsGrid;

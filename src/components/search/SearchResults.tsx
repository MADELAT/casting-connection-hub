
import React from "react";
import { ActorProfile, SearchFilters } from "@/types";
import SearchResultsHeader from "./SearchResultsHeader";
import SearchResultsGrid from "./SearchResultsGrid";
import EmptySearchState from "./EmptySearchState";

interface SearchResultsProps {
  hasSearched: boolean;
  actors: ActorProfile[];
  favoriteActors: string[];
  onToggleFavorite: (actorId: string) => void;
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

const SearchResults = ({
  hasSearched,
  actors,
  favoriteActors,
  onToggleFavorite,
  activeFilter,
  setActiveFilter
}: SearchResultsProps) => {
  if (!hasSearched) {
    return <EmptySearchState />;
  }

  return (
    <div className="space-y-6">
      <SearchResultsHeader 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
      />
      
      <SearchResultsGrid 
        actors={actors} 
        favoriteActors={favoriteActors} 
        onToggleFavorite={onToggleFavorite} 
      />
    </div>
  );
};

export default SearchResults;

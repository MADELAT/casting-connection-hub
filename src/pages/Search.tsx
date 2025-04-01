
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ActorSearch from "@/components/producer/ActorSearch";
import { SearchFilters } from "@/types";
import SearchHero from "@/components/search/SearchHero";
import SearchResults from "@/components/search/SearchResults";
import { mockActors } from "@/data/mockActors";

const Search = () => {
  const [actors, setActors] = useState(mockActors);
  const [favoriteActors, setFavoriteActors] = useState<string[]>(["2", "3"]);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const handleToggleFavorite = (actorId: string) => {
    setFavoriteActors(prev =>
      prev.includes(actorId)
        ? prev.filter(id => id !== actorId)
        : [...prev, actorId]
    );
  };
  
  const handleSearch = (filters: SearchFilters) => {
    console.log("Search filters:", filters);
    // In a real app, you would filter the actors based on the filters
    setHasSearched(true);
    
    // For demo, let's shuffle the actors to simulate a search
    const shuffled = [...mockActors].sort(() => 0.5 - Math.random());
    setActors(shuffled.slice(0, 6));
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <SearchHero />
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Advanced Search Filters */}
        <div className="bg-white shadow-md rounded-xl p-6 -mt-10 mb-8 relative z-20 border border-casting-100 animate-fade-in">
          <ActorSearch onSearch={handleSearch} />
        </div>
        
        <SearchResults 
          hasSearched={hasSearched}
          actors={actors}
          favoriteActors={favoriteActors}
          onToggleFavorite={handleToggleFavorite}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </MainLayout>
  );
};

export default Search;

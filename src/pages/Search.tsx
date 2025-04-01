
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ActorSearch from "@/components/producer/ActorSearch";
import { Button } from "@/components/ui/button";
import { SearchFilters } from "@/types";
import SearchHero from "@/components/search/SearchHero";
import SearchResults from "@/components/search/SearchResults";
import { mockActors } from "@/data/mockActors";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Search = () => {
  const { user } = useAuth();
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
      
      {/* Join CTA Section */}
      <section className="py-16 relative text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619344755866-f5c7ca79b2f6?q=80&w=2230&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-casting-950/90 to-casting-900/80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl font-bold font-sans mb-6">
            ¿Eres un actor profesional?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-sans font-normal">
            Crea tu perfil en CastingHub y conecta con las mejores productoras y directores para impulsar tu carrera.
          </p>
          {!user ? (
            <Link to="/register">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg font-sans font-normal">
                Unirte como actor <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/actor/dashboard">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg font-sans font-normal">
                Ir a mi perfil <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Search;

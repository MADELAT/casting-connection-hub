
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518929301966-019439ed8149?q=80&w=2275&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] bg-gradient-to-r from-casting-950 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="md:w-3/5 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-normal font-sans leading-tight mb-4">
            Búsqueda de <span className="text-accent-copper">talento</span>
          </h1>
          <p className="text-xl mb-6 text-gray-200 font-sans font-normal">
            Encuentra el actor perfecto para tu próxima producción.
          </p>
          <div className="max-w-lg">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar por nombre, categoría o ubicación..."
                className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 transition-all duration-300 focus:bg-white/20"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;

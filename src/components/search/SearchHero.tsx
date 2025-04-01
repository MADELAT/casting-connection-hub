
import React from "react";

const SearchHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518929301966-019439ed8149?q=80&w=2275&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="md:w-3/5 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair leading-tight mb-4">
            Búsqueda de <span className="text-accent-copper">talento</span>
          </h1>
          <p className="text-xl mb-6 text-gray-200">
            Encuentra el actor perfecto para tu próxima producción.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;

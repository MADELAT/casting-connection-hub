
import React from "react";
import { Search } from "lucide-react";

const EmptySearchState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-casting-50 border border-casting-200 rounded-xl animate-fade-in">
      <div className="w-24 h-24 bg-casting-100 rounded-full flex items-center justify-center mb-6">
        <Search className="h-10 w-10 text-casting-500" />
      </div>
      <h2 className="text-2xl font-medium mb-2">Busca actores</h2>
      <p className="text-casting-500 text-center max-w-md mb-6">
        Utiliza los filtros para encontrar el talento perfecto para tu producción.
      </p>
    </div>
  );
};

export default EmptySearchState;

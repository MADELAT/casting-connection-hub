
import React from "react";
import { Clock, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface SearchResultsHeaderProps {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

const SearchResultsHeader = ({ activeFilter, setActiveFilter }: SearchResultsHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold font-playfair">Resultados</h2>
        <div className="flex items-center text-sm text-casting-500 mt-1">
          <Clock className="h-4 w-4 mr-1" />
          <span>Última actualización: hace 2 minutos</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Select onValueChange={(value) => setActiveFilter(value === activeFilter ? null : value)}>
          <SelectTrigger className="w-[120px] border-casting-200 hover:border-accent-copper transition-colors">
            <SelectValue placeholder="Género" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="femenino">Femenino</SelectItem>
            <SelectItem value="masculino">Masculino</SelectItem>
            <SelectItem value="no-binario">No binario</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => setActiveFilter(value === activeFilter ? null : value)}>
          <SelectTrigger className="w-[120px] border-casting-200 hover:border-accent-copper transition-colors">
            <SelectValue placeholder="Edad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="18-25">18-25</SelectItem>
            <SelectItem value="26-35">26-35</SelectItem>
            <SelectItem value="36-45">36-45</SelectItem>
            <SelectItem value="46+">46+</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => setActiveFilter(value === activeFilter ? null : value)}>
          <SelectTrigger className="w-[120px] border-casting-200 hover:border-accent-copper transition-colors">
            <SelectValue placeholder="Experiencia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="principiante">Principiante</SelectItem>
            <SelectItem value="intermedio">Intermedio</SelectItem>
            <SelectItem value="avanzado">Avanzado</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" className="flex items-center gap-2 border-casting-200 hover:border-accent-copper transition-colors">
          <SlidersHorizontal className="h-4 w-4" />
          Más filtros
        </Button>
      </div>
    </div>
  );
};

export default SearchResultsHeader;

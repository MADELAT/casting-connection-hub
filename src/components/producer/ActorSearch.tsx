
import { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Search, X, Filter } from "lucide-react";
import { SearchFilters } from "@/types";

interface ActorSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

const genreOptions = [
  "Acción", "Romance", "Drama", "Comedia", "Terror", "Thriller", 
  "Ciencia ficción", "Fantasía", "Histórico", "Época", "Aventura", "Musical"
];

const ActorSearch = ({ onSearch }: ActorSearchProps) => {
  const [searchText, setSearchText] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Filter state
  const [filters, setFilters] = useState<SearchFilters>({
    ageRange: [18, 65],
    gender: "",
    physicalType: "",
    heightRange: [150, 200],
    bodyType: "",
    hairColor: "",
    eyeColor: "",
    tags: [],
  });
  
  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    
    // Add to active filters if not already there
    if (value && !activeFilters.includes(key)) {
      setActiveFilters(prev => [...prev, key]);
    } else if (!value && activeFilters.includes(key)) {
      setActiveFilters(prev => prev.filter(f => f !== key));
    }
  };
  
  const handleRemoveFilter = (key: string) => {
    // Reset the specific filter
    if (key === "ageRange") {
      setFilters(prev => ({ ...prev, ageRange: [18, 65] }));
    } else if (key === "heightRange") {
      setFilters(prev => ({ ...prev, heightRange: [150, 200] }));
    } else if (key === "tags") {
      setFilters(prev => ({ ...prev, tags: [] }));
      setSelectedTags([]);
    } else {
      setFilters(prev => ({ ...prev, [key]: "" }));
    }
    
    // Remove from active filters
    setActiveFilters(prev => prev.filter(f => f !== key));
  };
  
  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newTags);
    handleFilterChange("tags", newTags);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ ...filters, searchText });
  };
  
  const clearAllFilters = () => {
    setFilters({
      ageRange: [18, 65],
      gender: "",
      physicalType: "",
      heightRange: [150, 200],
      bodyType: "",
      hairColor: "",
      eyeColor: "",
      tags: [],
    });
    setSelectedTags([]);
    setActiveFilters([]);
    setSearchText("");
  };
  
  const getFilterLabel = (key: string): string => {
    switch (key) {
      case "ageRange": return `Edad: ${filters.ageRange?.[0]}-${filters.ageRange?.[1]} años`;
      case "gender": return `Género: ${filters.gender}`;
      case "physicalType": return `Tipo físico: ${filters.physicalType}`;
      case "heightRange": return `Altura: ${filters.heightRange?.[0]}-${filters.heightRange?.[1]} cm`;
      case "bodyType": return `Complexión: ${filters.bodyType}`;
      case "hairColor": return `Cabello: ${filters.hairColor}`;
      case "eyeColor": return `Ojos: ${filters.eyeColor}`;
      case "tags": return `Géneros: ${filters.tags?.length} seleccionados`;
      default: return key;
    }
  };

  return (
    <div className="search-container mb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-casting-400" />
            <Input
              placeholder="Buscar por nombre, características o habilidades..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 border-casting-200 focus:border-accent-copper focus:ring-1 focus:ring-accent-copper"
            />
          </div>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:w-auto w-full justify-between"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtros
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
          </Button>
          
          <Button 
            type="submit" 
            className="bg-accent-copper hover:bg-accent-copper/90 text-white md:w-auto w-full"
          >
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </div>
        
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm text-casting-500">Filtros activos:</span>
            {activeFilters.map((filter) => (
              <Badge 
                key={filter} 
                variant="outline" 
                className="bg-casting-100 border-casting-200 flex items-center gap-1"
              >
                {getFilterLabel(filter)}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => handleRemoveFilter(filter)}
                />
              </Badge>
            ))}
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              className="text-xs h-7 text-casting-500"
              onClick={clearAllFilters}
            >
              Limpiar todos
            </Button>
          </div>
        )}
        
        {/* Advanced Filters */}
        <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <CollapsibleContent className="pt-4 space-y-6 border-t border-casting-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Age Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Rango de edad: {filters.ageRange?.[0]}-{filters.ageRange?.[1]} años
                </label>
                <Slider
                  value={filters.ageRange}
                  min={18}
                  max={80}
                  step={1}
                  onValueChange={(value) => handleFilterChange("ageRange", value)}
                  className="my-4"
                />
              </div>
              
              {/* Height Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Altura: {filters.heightRange?.[0]}-{filters.heightRange?.[1]} cm
                </label>
                <Slider
                  value={filters.heightRange}
                  min={140}
                  max={210}
                  step={1}
                  onValueChange={(value) => handleFilterChange("heightRange", value)}
                  className="my-4"
                />
              </div>
              
              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-2">Género</label>
                <Select 
                  value={filters.gender} 
                  onValueChange={(value) => handleFilterChange("gender", value)}
                >
                  <SelectTrigger className="border-casting-200">
                    <SelectValue placeholder="Cualquier género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                    <SelectItem value="no-binario">No binario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Physical Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Tipo físico</label>
                <Select 
                  value={filters.physicalType} 
                  onValueChange={(value) => handleFilterChange("physicalType", value)}
                >
                  <SelectTrigger className="border-casting-200">
                    <SelectValue placeholder="Cualquier tipo físico" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="caucasico">Caucásico</SelectItem>
                    <SelectItem value="moreno">Moreno</SelectItem>
                    <SelectItem value="apinonado">Apiñonado</SelectItem>
                    <SelectItem value="afroamericano">Afroamericano</SelectItem>
                    <SelectItem value="asiatico">Asiático</SelectItem>
                    <SelectItem value="latino">Latino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Body Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Complexión</label>
                <Select 
                  value={filters.bodyType} 
                  onValueChange={(value) => handleFilterChange("bodyType", value)}
                >
                  <SelectTrigger className="border-casting-200">
                    <SelectValue placeholder="Cualquier complexión" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="delgada">Delgada</SelectItem>
                    <SelectItem value="atletica">Atlética</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="corpulenta">Corpulenta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Hair Color */}
              <div>
                <label className="block text-sm font-medium mb-2">Color de cabello</label>
                <Select 
                  value={filters.hairColor} 
                  onValueChange={(value) => handleFilterChange("hairColor", value)}
                >
                  <SelectTrigger className="border-casting-200">
                    <SelectValue placeholder="Cualquier color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="negro">Negro</SelectItem>
                    <SelectItem value="castano">Castaño</SelectItem>
                    <SelectItem value="rubio">Rubio</SelectItem>
                    <SelectItem value="pelirrojo">Pelirrojo</SelectItem>
                    <SelectItem value="canoso">Canoso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Eye Color */}
              <div>
                <label className="block text-sm font-medium mb-2">Color de ojos</label>
                <Select 
                  value={filters.eyeColor} 
                  onValueChange={(value) => handleFilterChange("eyeColor", value)}
                >
                  <SelectTrigger className="border-casting-200">
                    <SelectValue placeholder="Cualquier color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="marron">Marrón</SelectItem>
                    <SelectItem value="negro">Negro</SelectItem>
                    <SelectItem value="azul">Azul</SelectItem>
                    <SelectItem value="verde">Verde</SelectItem>
                    <SelectItem value="gris">Gris</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Tags/Genres */}
            <div>
              <label className="block text-sm font-medium mb-2">Géneros/Categorías</label>
              <div className="flex flex-wrap gap-2">
                {genreOptions.map((genre) => (
                  <Badge 
                    key={genre}
                    variant={selectedTags.includes(genre) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedTags.includes(genre) 
                        ? "bg-accent-copper hover:bg-accent-copper/90" 
                        : "hover:bg-casting-100"
                    }`}
                    onClick={() => handleTagToggle(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </form>
    </div>
  );
};

export default ActorSearch;

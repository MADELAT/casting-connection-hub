
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, Calendar, MapPin, User, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

// Mock data for castings - This would come from Supabase in a real app
const mockCastings = [
  {
    id: "1",
    projectName: "Película Independiente",
    roleName: "Protagonista masculino",
    location: "Madrid, España",
    deadline: "2023-10-30",
    requirements: "25-35 años, atlético, experiencia en drama",
    description: "Buscamos actor para protagonizar película independiente de drama psicológico.",
    productorId: "1",
    status: "open"
  },
  {
    id: "2",
    projectName: "Serie de TV - Temporada 3",
    roleName: "Actriz secundaria",
    location: "Barcelona, España",
    deadline: "2023-11-15",
    requirements: "20-30 años, cualquier complexión, talento para comedia",
    description: "Papel secundario para serie de comedia en su tercera temporada.",
    productorId: "2",
    status: "open"
  },
  {
    id: "3",
    projectName: "Comercial Televisivo",
    roleName: "Modelo masculino",
    location: "Valencia, España",
    deadline: "2023-10-25",
    requirements: "25-40 años, buena presencia, experiencia en publicidad",
    description: "Casting para comercial de marca de ropa deportiva.",
    productorId: "1",
    status: "open"
  },
  {
    id: "4",
    projectName: "Cortometraje Universitario",
    roleName: "Actor principal",
    location: "Sevilla, España",
    deadline: "2023-11-10",
    requirements: "18-25 años, aspecto juvenil, sin experiencia requerida",
    description: "Proyecto final de carrera para escuela de cine.",
    productorId: "3",
    status: "open"
  }
];

const CastingsAbiertos = () => {
  const { user, userProfile } = useAuth();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [castings, setCastings] = useState(mockCastings);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2340&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] bg-gradient-to-r from-casting-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-normal font-sans leading-tight mb-4">
              Castings <span className="text-accent-copper">Abiertos</span>
            </h1>
            <p className="text-xl mb-6 text-gray-200 font-sans font-normal">
              Descubre oportunidades de casting para actores y modelos en España.
            </p>
            <div className="max-w-lg">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar por proyecto, rol o ubicación..."
                  className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 transition-all duration-300 focus:bg-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Castings List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-normal font-sans">
              Oportunidades Disponibles
            </h2>
            <p className="text-sm text-casting-500 mt-1">
              Explora y aplica a castings que coincidan con tu perfil
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Select onValueChange={(value) => setActiveFilter(value === activeFilter ? null : value)}>
              <SelectTrigger className="w-[120px] border-casting-200 hover:border-accent-copper transition-colors">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="actor">Actor</SelectItem>
                <SelectItem value="actriz">Actriz</SelectItem>
                <SelectItem value="modelo">Modelo</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={(value) => setActiveFilter(value === activeFilter ? null : value)}>
              <SelectTrigger className="w-[120px] border-casting-200 hover:border-accent-copper transition-colors">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="madrid">Madrid</SelectItem>
                <SelectItem value="barcelona">Barcelona</SelectItem>
                <SelectItem value="valencia">Valencia</SelectItem>
                <SelectItem value="sevilla">Sevilla</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="flex items-center gap-2 border-casting-200 hover:border-accent-copper transition-colors">
              <Filter className="h-4 w-4" />
              Más filtros
            </Button>
          </div>
        </div>
        
        {/* Castings Grid */}
        <div className="space-y-6 mb-12">
          {castings.map((casting) => (
            <div key={casting.id} className="border border-casting-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover-scale">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium mb-2 font-sans">{casting.projectName}</h3>
                    <p className="text-accent-copper font-medium mb-3">{casting.roleName}</p>
                  </div>
                  <div className="bg-casting-50 text-casting-600 px-3 py-1 rounded text-sm">
                    Fecha límite: {formatDate(casting.deadline)}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
                  <div className="flex items-center text-casting-500">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{casting.location}</span>
                  </div>
                  <div className="flex items-center text-casting-500">
                    <User className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{casting.requirements}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-casting-600">{casting.description}</p>
                
                <div className="mt-6 flex justify-end">
                  <Link to={`/casting/${casting.id}`}>
                    <Button className="bg-casting-900 hover:bg-casting-800 transition-all duration-300 font-sans font-normal">
                      Ver detalles y aplicar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA for Producers */}
        <div className="bg-casting-50 border border-casting-100 rounded-xl p-8 text-center animate-fade-in">
          <Film className="h-12 w-12 mx-auto text-accent-copper mb-4" />
          <h3 className="text-2xl font-medium mb-3 font-sans">¿Buscas talento para tu proyecto?</h3>
          <p className="text-casting-600 max-w-2xl mx-auto mb-6">
            Publica tu casting en CastingHub y conecta con miles de actores y modelos profesionales.
          </p>
          <Link to="/post-job">
            <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg font-sans font-normal">
              Publicar un nuevo casting
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default CastingsAbiertos;

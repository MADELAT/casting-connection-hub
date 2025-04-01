
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

const ModelsPage = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Datos de ejemplo - estos deberían venir de Supabase en una implementación real
  const models = [
    {
      id: "1",
      name: "Laura Martínez",
      image: "https://images.unsplash.com/photo-1551621955-fa07d4b1376b?q=80&w=2487&auto=format&fit=crop",
      category: "Editorial, Comercial",
      height: "175cm",
      city: "Madrid"
    },
    {
      id: "2",
      name: "Ana García",
      image: "https://images.unsplash.com/photo-1550928323-31789f5b5d61?q=80&w=1971&auto=format&fit=crop",
      category: "Fitness, Deportivo",
      height: "172cm",
      city: "Barcelona"
    },
    {
      id: "3",
      name: "Carlos Ibáñez",
      image: "https://images.unsplash.com/photo-1675434704310-2af52463a6d0?q=80&w=2487&auto=format&fit=crop",
      category: "Alta moda, Pasarela",
      height: "188cm",
      city: "Sevilla"
    },
    {
      id: "4",
      name: "Lucía Romero",
      image: "https://images.unsplash.com/photo-1590123047191-898a69afb209?q=80&w=2340&auto=format&fit=crop",
      category: "Comercial, Catálogos",
      height: "176cm",
      city: "Valencia"
    },
    {
      id: "5",
      name: "Javier Fuentes",
      image: "https://images.unsplash.com/photo-1643651576156-c062a5b8c324?q=80&w=2340&auto=format&fit=crop",
      category: "Editorial, Publicidad",
      height: "185cm",
      city: "Málaga"
    },
    {
      id: "6",
      name: "Sofía Muñoz",
      image: "https://plus.unsplash.com/premium_photo-1720454225404-3da06867738a?q=80&w=2487&auto=format&fit=crop",
      category: "Belleza, Maquillaje",
      height: "174cm",
      city: "Madrid"
    },
    {
      id: "7",
      name: "Daniel Sánchez",
      image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=2274&auto=format&fit=crop",
      category: "Casual, Lifestyle",
      height: "183cm",
      city: "Barcelona"
    },
    {
      id: "8",
      name: "Marina López",
      image: "https://images.unsplash.com/photo-1518929301966-019439ed8149?q=80&w=2275&auto=format&fit=crop",
      category: "Comercial, Editorial",
      height: "170cm",
      city: "Valencia"
    },
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1728022038090-8ab88f8339bf?q=80&w=2340&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
          <div className="md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              Descubre <span className="text-accent-copper">modelos</span> profesionales
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Encuentra el talento perfecto para tu próxima campaña publicitaria, editorial o desfile.
            </p>
            <div className="relative max-w-lg">
              <Input
                type="text"
                placeholder="Buscar por nombre, categoría o ubicación..."
                className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 transition-all duration-300 focus:bg-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Models Gallery with Filters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                Modelos Destacados
              </h2>
              <p className="text-sm text-casting-500 mt-1">
                Encuentra el talento ideal usando nuestros filtros de búsqueda
              </p>
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
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="editorial">Editorial</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                  <SelectItem value="pasarela">Pasarela</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="flex items-center gap-2 border-casting-200 hover:border-accent-copper transition-colors">
                <SlidersHorizontal className="h-4 w-4" />
                Más filtros
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <div key={model.id} className="group animate-fade-in hover-scale">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{model.name}</h3>
                    <p className="text-sm text-gray-300">{model.category}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-casting-500">{model.height} • {model.city}</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent-copper hover:text-accent-copper/90 transition-all duration-300 hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-casting-900 hover:bg-casting-800 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
              Cargar más modelos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-16 relative text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619344755866-f5c7ca79b2f6?q=80&w=2230&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-casting-950/90 to-casting-900/80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl font-bold font-playfair mb-6">
            ¿Eres un modelo profesional?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Crea tu perfil en CastingHub y conecta con las mejores agencias y productores para impulsar tu carrera.
          </p>
          {!user ? (
            <Link to="/register">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                Unirte como modelo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/model/dashboard">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                Ir a mi perfil <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ModelsPage;


import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Filter } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

const ModelsPage = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Datos de ejemplo - estos deberían venir de Supabase en una implementación real
  const models = [
    {
      id: "1",
      name: "Laura Martínez",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Editorial, Comercial",
      height: "175cm",
      city: "Madrid"
    },
    {
      id: "2",
      name: "Ana García",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Fitness, Deportivo",
      height: "172cm",
      city: "Barcelona"
    },
    {
      id: "3",
      name: "Carlos Ibáñez",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Alta moda, Pasarela",
      height: "188cm",
      city: "Sevilla"
    },
    {
      id: "4",
      name: "Lucía Romero",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Comercial, Catálogos",
      height: "176cm",
      city: "Valencia"
    },
    {
      id: "5",
      name: "Javier Fuentes",
      image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Editorial, Publicidad",
      height: "185cm",
      city: "Málaga"
    },
    {
      id: "6",
      name: "Sofía Muñoz",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Belleza, Maquillaje",
      height: "174cm",
      city: "Madrid"
    },
    {
      id: "7",
      name: "Daniel Sánchez",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Casual, Lifestyle",
      height: "183cm",
      city: "Barcelona"
    },
    {
      id: "8",
      name: "Marina López",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Comercial, Editorial",
      height: "170cm",
      city: "Valencia"
    },
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2038')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
          <div className="md:w-3/5">
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
                className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Models Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair">
              Modelos Destacados
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <div key={model.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
                  <Button variant="ghost" size="sm" className="text-accent-copper hover:text-accent-copper/90">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-casting-900 hover:bg-casting-800 text-white">
              Cargar más modelos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="py-16 bg-casting-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">
            ¿Eres un modelo profesional?
          </h2>
          <p className="text-xl text-casting-600 max-w-3xl mx-auto mb-8">
            Crea tu perfil en CastingHub y conecta con las mejores agencias y productores para impulsar tu carrera.
          </p>
          {!user ? (
            <Link to="/register">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                Unirte como modelo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/model/dashboard">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
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

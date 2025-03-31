
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";
import CastingRequestsList from "@/components/producer/CastingRequestsList";
import ActorSearch from "@/components/producer/ActorSearch";
import ActorCard from "@/components/producer/ActorCard";
import { Users, Star, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ActorProfile, CastingSubmission, SearchFilters } from "@/types";

// Mock data for development
const mockActors: ActorProfile[] = [
  {
    id: "1",
    userId: "u1",
    name: "Carmen López",
    age: 28,
    gender: "Femenino",
    physicalType: "Latino",
    height: "168",
    bodyType: "Atlética",
    hairColor: "Castaño",
    eyeColor: "Marrón",
    profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    cv: "cv-link.pdf",
    bio: "Actriz versátil con experiencia en teatro y cine. Especializada en papeles dramáticos y comedias.",
    clips: [
      {
        id: "c1",
        actorId: "1",
        title: "Escena dramática",
        description: "Escena de confrontación familiar",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1576767479936-552cccee5a34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 60,
        tags: ["Drama", "Familiar"],
        uploadDate: new Date("2023-05-15"),
      },
      {
        id: "c2",
        actorId: "1",
        title: "Comedia romántica",
        description: "Escena de comedia romántica",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 45,
        tags: ["Comedia", "Romance"],
        uploadDate: new Date("2023-06-20"),
      },
    ],
    castings: [],
  },
  {
    id: "2",
    userId: "u2",
    name: "Miguel Ángel Rojas",
    age: 35,
    gender: "Masculino",
    physicalType: "Caucásico",
    height: "182",
    bodyType: "Medio",
    hairColor: "Negro",
    eyeColor: "Azul",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    cv: "cv-link.pdf",
    bio: "Actor con amplia experiencia en cine y televisión. Especializado en acción y drama.",
    clips: [
      {
        id: "c3",
        actorId: "2",
        title: "Escena de acción",
        description: "Escena de persecución",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 55,
        tags: ["Acción", "Thriller"],
        uploadDate: new Date("2023-07-10"),
      }
    ],
    castings: [],
  },
  {
    id: "3",
    userId: "u3",
    name: "Laura Fernández",
    age: 24,
    gender: "Femenino",
    physicalType: "Caucásico",
    height: "165",
    bodyType: "Delgada",
    hairColor: "Rubio",
    eyeColor: "Verde",
    profilePicture: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    cv: "cv-link.pdf",
    bio: "Actriz joven con experiencia en teatro y cortometrajes. Especializada en drama y fantasía.",
    clips: [
      {
        id: "c4",
        actorId: "3",
        title: "Monólogo dramático",
        description: "Monólogo sobre la pérdida",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 65,
        tags: ["Drama", "Monólogo"],
        uploadDate: new Date("2023-08-05"),
      },
      {
        id: "c5",
        actorId: "3",
        title: "Escena fantástica",
        description: "Escena de fantasía medieval",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 50,
        tags: ["Fantasía", "Época"],
        uploadDate: new Date("2023-08-20"),
      }
    ],
    castings: [],
  },
  {
    id: "4",
    userId: "u4",
    name: "Carlos Mendoza",
    age: 42,
    gender: "Masculino",
    physicalType: "Latino",
    height: "175",
    bodyType: "Medio",
    hairColor: "Canoso",
    eyeColor: "Marrón",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    cv: "cv-link.pdf",
    bio: "Actor experimentado con trayectoria en cine, televisión y teatro. Especializado en drama y comedia.",
    clips: [
      {
        id: "c6",
        actorId: "4",
        title: "Escena dramática",
        description: "Confrontación emocional",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1541819307150-da9371b57a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 70,
        tags: ["Drama", "Emocional"],
        uploadDate: new Date("2023-09-10"),
      }
    ],
    castings: [],
  },
];

const mockCastings: CastingSubmission[] = [
  {
    id: "1",
    actorId: "1",
    producerId: "p1",
    projectName: "El último otoño",
    roleName: "Sara - Protagonista",
    instructions: "Escena emotiva donde Sara descubre la verdad sobre su pasado. La escena requiere un rango emocional amplio, pasando de la confusión a la ira y finalmente a la aceptación.",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    submissionDate: new Date("2023-08-10"),
    status: "pending",
  },
  {
    id: "2",
    actorId: "3",
    producerId: "p1",
    projectName: "Luces de ciudad",
    roleName: "Ana - Secundario",
    instructions: "Ana es una mujer de negocios ambiciosa pero con un sentido del humor sarcástico. Esta escena muestra su lado más vulnerable cuando conoce a alguien que le hace cuestionar sus prioridades.",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    submissionDate: new Date("2023-09-05"),
    status: "viewed",
  },
  {
    id: "3",
    actorId: "4",
    producerId: "p1",
    projectName: "El último otoño",
    roleName: "Javier - Secundario",
    instructions: "Javier es un personaje conflictivo con un pasado turbulento. Esta escena muestra su lado más vulnerable cuando se enfrenta a su mayor miedo.",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    submissionDate: new Date("2023-09-15"),
    status: "pending",
  },
];

const ProducerDashboard = () => {
  const [activeTab, setActiveTab] = useState("castings");
  const [castings, setCastings] = useState<CastingSubmission[]>(mockCastings);
  const [actors, setActors] = useState<ActorProfile[]>(mockActors);
  const [favoriteActors, setFavoriteActors] = useState<string[]>(["2"]);
  const [filteredActors, setFilteredActors] = useState<ActorProfile[]>(mockActors);
  
  const handleCastingStatusChange = (castingId: string, newStatus: 'viewed' | 'shortlisted' | 'rejected') => {
    setCastings(prev =>
      prev.map(casting =>
        casting.id === castingId ? { ...casting, status: newStatus } : casting
      )
    );
  };
  
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
    // For now, let's just pretend we're filtering and return the same actors
    setFilteredActors(actors);
  };

  return (
    <MainLayout userType="producer" isLoggedIn={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold font-playfair">Panel de control</h1>
            <p className="text-casting-500 mt-1">
              Gestiona tus proyectos, castings y encuentra talento.
            </p>
          </div>
          
          <Link to="/search">
            <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white mt-4 md:mt-0">
              <Search className="mr-2 h-4 w-4" />
              Buscar talento
            </Button>
          </Link>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-casting-50 border border-casting-100">
            <TabsTrigger value="castings" className="data-[state=active]:bg-white">
              Castings recibidos
            </TabsTrigger>
            <TabsTrigger value="search" className="data-[state=active]:bg-white">
              Buscar actores
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-white">
              Favoritos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="castings" className="mt-6">
            <CastingRequestsList 
              castings={castings}
              onStatusChange={handleCastingStatusChange}
            />
          </TabsContent>
          
          <TabsContent value="search" className="mt-6">
            <ActorSearch onSearch={handleSearch} />
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-playfair">Actores disponibles</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredActors.map((actor) => (
                  <ActorCard 
                    key={actor.id} 
                    actor={actor}
                    isFavorite={favoriteActors.includes(actor.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites" className="mt-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-playfair">Mis actores favoritos</h2>
              
              {favoriteActors.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 border border-dashed border-casting-200 rounded-xl bg-casting-50">
                  <Star className="h-12 w-12 text-casting-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No tienes actores favoritos</h3>
                  <p className="text-casting-500 text-center mb-4">
                    Añade actores a favoritos para acceder rápidamente a sus perfiles.
                  </p>
                  <Link to="/search">
                    <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white">
                      <Search className="mr-2 h-4 w-4" />
                      Buscar actores
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {actors
                    .filter(actor => favoriteActors.includes(actor.id))
                    .map((actor) => (
                      <ActorCard 
                        key={actor.id} 
                        actor={actor}
                        isFavorite={true}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))
                  }
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProducerDashboard;

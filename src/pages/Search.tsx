import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ActorSearch from "@/components/producer/ActorSearch";
import ActorCard from "@/components/producer/ActorCard";
import { ActorProfile, SearchFilters } from "@/types";
import { Clock, Search as SearchIcon } from "lucide-react";

// Mock data
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
  {
    id: "5",
    userId: "u5",
    name: "Ana María Torres",
    age: 31,
    gender: "Femenino",
    physicalType: "Apiñonado",
    height: "170",
    bodyType: "Media",
    hairColor: "Castaño",
    eyeColor: "Marrón",
    profilePicture: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    cv: "cv-link.pdf",
    bio: "Actriz con experiencia en publicidad y teatro. Especializada en personajes carismáticos y comedias.",
    clips: [
      {
        id: "c7",
        actorId: "5",
        title: "Escena cómica",
        description: "Situación cómica en una oficina",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 48,
        tags: ["Comedia", "Situacional"],
        uploadDate: new Date("2023-08-15"),
      }
    ],
    castings: [],
  },
  {
    id: "6",
    userId: "u6",
    name: "Javier Ruiz",
    age: 38,
    gender: "Masculino",
    physicalType: "Moreno",
    height: "178",
    bodyType: "Atlético",
    hairColor: "Negro",
    eyeColor: "Marrón",
    profilePicture: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    cv: "cv-link.pdf",
    bio: "Actor y doble de acción con experiencia en cine y televisión. Especializado en acción y aventura.",
    clips: [
      {
        id: "c8",
        actorId: "6",
        title: "Escena de acción",
        description: "Secuencia de lucha",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 62,
        tags: ["Acción", "Lucha"],
        uploadDate: new Date("2023-07-25"),
      },
      {
        id: "c9",
        actorId: "6",
        title: "Drama intenso",
        description: "Confrontación emocional",
        url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        duration: 53,
        tags: ["Drama", "Intenso"],
        uploadDate: new Date("2023-08-05"),
      }
    ],
    castings: [],
  },
];

const Search = () => {
  const [actors, setActors] = useState<ActorProfile[]>(mockActors);
  const [favoriteActors, setFavoriteActors] = useState<string[]>(["2", "3"]);
  const [hasSearched, setHasSearched] = useState(false);
  
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair mb-2">Búsqueda de talento</h1>
          <p className="text-casting-500">
            Encuentra el actor perfecto para tu próxima producción.
          </p>
        </div>
        
        <ActorSearch onSearch={handleSearch} />
        
        {hasSearched ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-playfair">Resultados</h2>
              <div className="flex items-center text-sm text-casting-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>Última actualización: hace 2 minutos</span>
              </div>
            </div>
            
            {actors.length === 0 ? (
              <div className="bg-casting-50 border border-casting-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No se encontraron resultados</h3>
                <p className="text-casting-500">
                  Intenta con criterios de búsqueda diferentes.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {actors.map((actor) => (
                  <ActorCard 
                    key={actor.id} 
                    actor={actor}
                    isFavorite={favoriteActors.includes(actor.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-casting-50 border border-casting-200 rounded-xl">
            <div className="w-24 h-24 bg-casting-100 rounded-full flex items-center justify-center mb-6">
              <SearchIcon className="h-10 w-10 text-casting-500" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Busca actores</h2>
            <p className="text-casting-500 text-center max-w-md mb-6">
              Utiliza los filtros para encontrar el talento perfecto para tu producción.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Search;


import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Download, 
  Play, 
  Heart, 
  Star, 
  Video, 
  File, 
  Clock, 
  Film,
  MessageSquare,
  ArrowRight,
  Share
} from "lucide-react";
import { toast } from "sonner";
import { ActorProfile as ActorProfileType, VideoClip } from "@/types";

// Mock data - in a real app, you would fetch this data from your backend
const mockActor: ActorProfileType = {
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
  bio: "Actriz versátil con más de 5 años de experiencia en teatro, cine y televisión. Formada en la Escuela de Arte Dramático de Madrid y con diversos cursos de especialización en técnicas de interpretación. Especializada en papeles dramáticos y comedias, con facilidad para los acentos y dialectos.",
  clips: [
    {
      id: "c1",
      actorId: "1",
      title: "Escena dramática - Confrontación familiar",
      description: "Una intensa confrontación familiar donde interpreto a una hija que descubre un secreto familiar de años. La escena requiere un amplio rango emocional, pasando de la confusión inicial a la ira y finalmente a la aceptación.",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1576767479936-552cccee5a34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: 58,
      tags: ["Drama", "Conflicto", "Familia"],
      uploadDate: new Date("2023-06-15"),
    },
    {
      id: "c2",
      actorId: "1",
      title: "Comedia - Entrevista de trabajo",
      description: "Escena cómica donde interpreto a una candidata nerviosa en una entrevista de trabajo que sale terriblemente mal. Este clip muestra mi capacidad para la comedia física y timing cómico.",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: 45,
      tags: ["Comedia", "Humor", "Situacional"],
      uploadDate: new Date("2023-07-20"),
    },
    {
      id: "c3",
      actorId: "1",
      title: "Escena romántica - Primer encuentro",
      description: "Una delicada escena romántica que muestra el primer encuentro entre dos personas destinadas a enamorarse. La interpretación se centra en las miradas y la sutileza de los gestos.",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: 52,
      tags: ["Romance", "Sutil", "Delicado"],
      uploadDate: new Date("2023-08-05"),
    },
  ],
  castings: [],
};

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const ActorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [actor, setActor] = useState<ActorProfileType>(mockActor);
  const [selectedClip, setSelectedClip] = useState<VideoClip | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const [downloadCode, setDownloadCode] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handlePlay = (clip: VideoClip) => {
    setSelectedClip(clip);
    setShowDialog(true);
  };
  
  const handleDownload = (clip: VideoClip) => {
    setSelectedClip(clip);
    setShowDownloadDialog(true);
  };
  
  const checkDownloadCode = () => {
    if (downloadCode.trim() === "") {
      toast.error("Por favor ingresa un código de descarga");
      return;
    }
    
    // In a real app, you would validate the code against a backend
    if (downloadCode === "ABC123") {
      toast.success("Código válido. Descarga iniciada.");
      setShowDownloadDialog(false);
      setDownloadCode("");
    } else {
      toast.error("Código inválido. Por favor verifica e intenta de nuevo.");
    }
  };
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Actor eliminado de favoritos" : "Actor añadido a favoritos");
  };
  
  const handleContactActor = () => {
    toast.success("Se ha enviado una solicitud de contacto al actor");
  };
  
  const handleInviteToCasting = () => {
    toast.success("Invitación a casting enviada correctamente");
  };

  return (
    <MainLayout userType="producer" isLoggedIn={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl overflow-hidden border border-casting-200 shadow-sm">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={actor.profilePicture} 
                    alt={actor.name} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-casting-900 p-2 rounded-full hover:bg-white transition"
                    onClick={handleToggleFavorite}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  </button>
                </div>
                
                <div className="p-6">
                  <h1 className="text-2xl font-bold font-playfair mb-1">{actor.name}</h1>
                  <p className="text-casting-500 mb-4">{actor.age} años, {actor.height} cm</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 text-casting-400 mr-3" />
                      <span>
                        <span className="font-medium mr-1">Tipo:</span>
                        {actor.gender}, {actor.physicalType}, {actor.bodyType}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-casting-400 mr-3" />
                      <span>
                        <span className="font-medium mr-1">Cabello:</span>
                        {actor.hairColor}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-casting-400 mr-3" />
                      <span>
                        <span className="font-medium mr-1">Ojos:</span>
                        {actor.eyeColor}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      className="bg-accent-copper hover:bg-accent-copper/90 text-white w-full"
                      onClick={handleContactActor}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contactar
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleInviteToCasting}
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Invitar a casting
                    </Button>
                    {actor.cv && (
                      <a 
                        href={actor.cv} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-sm font-medium hover:underline text-accent-blue"
                      >
                        <File className="mr-2 h-4 w-4" />
                        Descargar CV
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden border border-casting-200 shadow-sm mt-6 p-6">
                <h2 className="text-lg font-bold mb-4">Habilidades y especialidades</h2>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(actor.clips.flatMap(clip => clip.tags))).map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-casting-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-white rounded-xl overflow-hidden border border-casting-200 shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold font-playfair mb-4">Biografía</h2>
                <p className="text-casting-600 whitespace-pre-line">{actor.bio}</p>
              </div>
              
              <Tabs defaultValue="clips" className="space-y-6">
                <TabsList className="bg-casting-50 border border-casting-100">
                  <TabsTrigger value="clips" className="data-[state=active]:bg-white">
                    Clips ({actor.clips.length})
                  </TabsTrigger>
                  <TabsTrigger value="castings" className="data-[state=active]:bg-white">
                    Castings recibidos
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="clips" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {actor.clips.map((clip) => (
                      <div key={clip.id} className="clip-card group">
                        <div className="relative aspect-video overflow-hidden rounded-t-md">
                          <img 
                            src={clip.thumbnailUrl} 
                            alt={clip.title} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="gradient-overlay"></div>
                          <button 
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handlePlay(clip)}
                          >
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <Play className="h-8 w-8 text-white" />
                            </div>
                          </button>
                          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {formatDuration(clip.duration)}
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white border border-t-0 border-casting-100 rounded-b-md">
                          <h3 className="font-bold mb-1 truncate">{clip.title}</h3>
                          <p className="text-sm text-casting-500 mb-3 line-clamp-2">{clip.description}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {clip.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-casting-50">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex justify-between gap-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => handlePlay(clip)}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Ver
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => handleDownload(clip)}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Descargar
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="castings" className="mt-6">
                  <div className="flex flex-col items-center justify-center p-8 border border-dashed border-casting-200 rounded-xl bg-casting-50">
                    <Film className="h-12 w-12 text-casting-400 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No hay castings</h3>
                    <p className="text-casting-500 text-center mb-4">
                      Este actor no ha enviado castings para tus proyectos todavía.
                    </p>
                    <Button 
                      className="bg-accent-copper hover:bg-accent-copper/90 text-white"
                      onClick={handleInviteToCasting}
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Invitar a casting
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Player Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedClip?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-md overflow-hidden">
            {selectedClip && (
              <video 
                src={selectedClip.url} 
                poster={selectedClip.thumbnailUrl}
                controls
                className="w-full h-full"
              />
            )}
          </div>
          <div>
            <h4 className="font-bold mb-2">Descripción</h4>
            <p className="text-casting-500">{selectedClip?.description}</p>
            
            <div className="mt-4">
              <h4 className="font-bold mb-2">Etiquetas</h4>
              <div className="flex flex-wrap gap-1">
                {selectedClip?.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-casting-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline"
                onClick={() => {
                  setShowDialog(false);
                  if (selectedClip) handleDownload(selectedClip);
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar este clip
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Download Dialog */}
      <Dialog open={showDownloadDialog} onOpenChange={setShowDownloadDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Descargar clip</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-casting-600">
              Para descargar este clip, necesitas un código de descarga proporcionado por el actor.
            </p>
            
            <div className="flex">
              <Input 
                placeholder="Ingresa el código de descarga" 
                className="rounded-r-none"
                value={downloadCode}
                onChange={(e) => setDownloadCode(e.target.value)}
              />
              <Button 
                className="rounded-l-none bg-accent-copper hover:bg-accent-copper/90"
                onClick={checkDownloadCode}
              >
                Verificar
              </Button>
            </div>
            
            <div className="bg-casting-50 border border-casting-200 rounded-md p-3">
              <h4 className="font-bold text-sm mb-2">¿No tienes un código?</h4>
              <p className="text-sm text-casting-500">
                Puedes solicitar un código de descarga contactando directamente al actor.
              </p>
              <Button 
                variant="link" 
                className="text-accent-blue p-0 h-auto text-sm mt-2"
                onClick={handleContactActor}
              >
                Contactar al actor
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default ActorProfile;

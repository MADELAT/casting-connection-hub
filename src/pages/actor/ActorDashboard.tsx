
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";
import ActorProfileForm from "@/components/actor/ActorProfileForm";
import VideoClipsList from "@/components/actor/VideoClipsList";
import AddVideoClipForm from "@/components/actor/AddVideoClipForm";
import CastingSubmissionsList from "@/components/actor/CastingSubmissionsList";
import SubmitCastingForm from "@/components/actor/SubmitCastingForm";
import { Plus, Video } from "lucide-react";
import { VideoClip, CastingSubmission } from "@/types";

// Mock data for development
const mockClips: VideoClip[] = [
  {
    id: "1",
    actorId: "1",
    title: "Escena dramática - Confrontación familiar",
    description: "Una intensa confrontación familiar donde interpreto a una hija que descubre un secreto familiar de años.",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1576767479936-552cccee5a34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: 58,
    tags: ["Drama", "Conflicto", "Familia"],
    uploadDate: new Date("2023-06-15"),
  },
  {
    id: "2",
    actorId: "1",
    title: "Comedia - Entrevista de trabajo",
    description: "Escena cómica donde interpreto a una candidata nerviosa en una entrevista de trabajo que sale terriblemente mal.",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: 45,
    tags: ["Comedia", "Humor", "Situacional"],
    uploadDate: new Date("2023-07-20"),
  },
];

const mockSubmissions: CastingSubmission[] = [
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
    status: "viewed",
  },
  {
    id: "2",
    actorId: "1",
    producerId: "p2",
    projectName: "Luces de ciudad",
    roleName: "Ana - Secundario",
    instructions: "Ana es una mujer de negocios ambiciosa pero con un sentido del humor sarcástico. Esta escena muestra su lado más vulnerable cuando conoce a alguien que le hace cuestionar sus prioridades.",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    submissionDate: new Date("2023-09-05"),
    status: "shortlisted",
    notes: "Excelente interpretación. Nos gustaría verte en una segunda audición para este papel.",
  },
];

// User account state for development
const mockUserState = {
  isPremium: false,
  maxClips: 3,
  maxClipDuration: 60, // seconds
  maxCastingDuration: 120, // seconds
};

const ActorDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showAddClipForm, setShowAddClipForm] = useState(false);
  const [showSubmitCastingForm, setShowSubmitCastingForm] = useState(false);
  const [clips, setClips] = useState<VideoClip[]>(mockClips);
  const [submissions, setSubmissions] = useState<CastingSubmission[]>(mockSubmissions);
  
  const handleAddClipSuccess = () => {
    // In a real app, you would add the new clip to the state
    // For now, we'll just close the form
    setShowAddClipForm(false);
    
    // Mock adding a new clip
    const newClip: VideoClip = {
      id: `${clips.length + 1}`,
      actorId: "1",
      title: "Nuevo clip de ejemplo",
      description: "Este es un nuevo clip añadido como ejemplo",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      duration: 45,
      tags: ["Drama", "Ejemplo"],
      uploadDate: new Date(),
    };
    
    setClips([newClip, ...clips]);
  };
  
  const handleSubmitCastingSuccess = () => {
    // In a real app, you would add the new submission to the state
    // For now, we'll just close the form
    setShowSubmitCastingForm(false);
    
    // Mock adding a new submission
    const newSubmission: CastingSubmission = {
      id: `${submissions.length + 1}`,
      actorId: "1",
      projectName: "Nuevo proyecto",
      roleName: "Personaje de ejemplo",
      instructions: "Instrucciones para el casting",
      videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      submissionDate: new Date(),
      status: "pending",
    };
    
    setSubmissions([newSubmission, ...submissions]);
  };
  
  return (
    <MainLayout userType="actor" isLoggedIn={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold font-playfair">Mi perfil de actor</h1>
            <p className="text-casting-500 mt-1">
              Gestiona tu perfil, clips y castings desde este panel.
            </p>
          </div>
          
          {activeTab === "clips" && !showAddClipForm && (
            <Button 
              className="bg-accent-copper hover:bg-accent-copper/90 text-white mt-4 md:mt-0"
              onClick={() => setShowAddClipForm(true)}
              disabled={clips.length >= mockUserState.maxClips}
            >
              <Plus className="mr-2 h-4 w-4" />
              Añadir clip
            </Button>
          )}
          
          {activeTab === "castings" && !showSubmitCastingForm && (
            <Button 
              className="bg-accent-copper hover:bg-accent-copper/90 text-white mt-4 md:mt-0"
              onClick={() => setShowSubmitCastingForm(true)}
            >
              <Video className="mr-2 h-4 w-4" />
              Enviar casting
            </Button>
          )}
        </div>
        
        {!mockUserState.isPremium && (
          <div className="bg-gradient-to-r from-accent-blue to-casting-800 text-white p-4 rounded-xl mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h3 className="font-bold mb-1">Actualiza a Premium</h3>
                <p className="text-sm text-gray-200">
                  Sube clips ilimitados, accede a videos de mayor duración y genera códigos de descarga.
                </p>
              </div>
              <Button className="bg-white text-accent-blue hover:bg-gray-100 mt-3 md:mt-0">
                Ver planes
              </Button>
            </div>
          </div>
        )}
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-casting-50 border border-casting-100">
            <TabsTrigger value="profile" className="data-[state=active]:bg-white">
              Información personal
            </TabsTrigger>
            <TabsTrigger value="clips" className="data-[state=active]:bg-white">
              Mis clips
            </TabsTrigger>
            <TabsTrigger value="castings" className="data-[state=active]:bg-white">
              Castings enviados
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <ActorProfileForm />
          </TabsContent>
          
          <TabsContent value="clips" className="mt-6">
            {showAddClipForm ? (
              <AddVideoClipForm 
                isPremium={mockUserState.isPremium} 
                maxDuration={mockUserState.maxClipDuration}
                onSuccess={handleAddClipSuccess}
                onCancel={() => setShowAddClipForm(false)}
              />
            ) : (
              <VideoClipsList 
                clips={clips} 
                isPremium={mockUserState.isPremium}
                maxClips={mockUserState.maxClips}
                onAddClip={() => setShowAddClipForm(true)}
              />
            )}
          </TabsContent>
          
          <TabsContent value="castings" className="mt-6">
            {showSubmitCastingForm ? (
              <SubmitCastingForm 
                isPremium={mockUserState.isPremium} 
                maxDuration={mockUserState.maxCastingDuration}
                onSuccess={handleSubmitCastingSuccess}
                onCancel={() => setShowSubmitCastingForm(false)}
              />
            ) : (
              <CastingSubmissionsList 
                submissions={submissions}
                isPremium={mockUserState.isPremium}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ActorDashboard;

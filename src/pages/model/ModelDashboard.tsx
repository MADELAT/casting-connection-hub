
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Image, Upload, Plus, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

const ModelDashboard = () => {
  const { userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  
  // Datos de ejemplo - estos vendrían de Supabase en una implementación real
  const [photos, setPhotos] = useState<{id: string, url: string, title: string}[]>([
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
      title: "Retrato profesional"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
      title: "Comercial verano"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      title: "Editorial moda"
    }
  ]);
  
  const [submissions, setSubmissions] = useState([
    {
      id: "1",
      projectName: "Campaña Primavera",
      roleName: "Modelo para catálogo",
      submissionDate: "2023-06-15",
      status: "viewed"
    },
    {
      id: "2",
      projectName: "Editorial Revista Moda",
      roleName: "Modelo portada",
      submissionDate: "2023-07-03",
      status: "shortlisted"
    },
    {
      id: "3",
      projectName: "Anuncio TV Internacional",
      roleName: "Modelo para spot",
      submissionDate: "2023-07-20",
      status: "pending"
    }
  ]);
  
  const handlePhotoUpload = () => {
    // Aquí iría la lógica para subir una foto a Supabase
    toast.success("Foto subida correctamente");
    setShowPhotoUpload(false);
    
    // Añadir la nueva foto al estado local
    setPhotos([
      ...photos,
      {
        id: Math.random().toString(),
        url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
        title: "Nueva foto"
      }
    ]);
  };
  
  const deletePhoto = (id: string) => {
    // Aquí iría la lógica para eliminar la foto de Supabase
    setPhotos(photos.filter(photo => photo.id !== id));
    toast.success("Foto eliminada correctamente");
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-xs">Pendiente</span>;
      case "viewed":
        return <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-xs">Visto</span>;
      case "shortlisted":
        return <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">Preseleccionado</span>;
      case "rejected":
        return <span className="text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs">Rechazado</span>;
      default:
        return <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-xs">{status}</span>;
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair mb-2">Mi Panel de Modelo</h1>
          <p className="text-casting-600">
            Bienvenido de nuevo, {userProfile?.name || "Usuario"}. Gestiona tu perfil, fotos y postulaciones.
          </p>
        </div>
        
        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
            <TabsTrigger value="photos">Mis Fotos</TabsTrigger>
            <TabsTrigger value="submissions">Mis Postulaciones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-casting-100 p-6">
              {/* Perfil de modelo */}
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden bg-casting-100 mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" 
                        alt="Perfil" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Cambiar foto
                    </Button>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <dt className="text-sm text-casting-500">Nombre</dt>
                      <dd className="font-medium">Sofia García</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-casting-500">Edad</dt>
                      <dd className="font-medium">26 años</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-casting-500">Altura</dt>
                      <dd className="font-medium">175 cm</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-casting-500">Tipo físico</dt>
                      <dd className="font-medium">Delgada</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-casting-500">Color de ojos</dt>
                      <dd className="font-medium">Marrones</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-casting-500">Color de pelo</dt>
                      <dd className="font-medium">Castaño</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-sm text-casting-500 mb-1">Bio</dt>
                      <dd className="font-medium text-casting-600">
                        Modelo profesional con experiencia en campañas de moda, catálogos y editoriales. 
                        Especializada en moda casual y deportiva. Disponible para trabajos en Madrid y Barcelona.
                      </dd>
                    </div>
                  </dl>
                  
                  <div className="mt-6 flex justify-end">
                    <Button>
                      Editar perfil
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="photos" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold font-playfair">Mis fotos ({photos.length}/5)</h2>
              <Button 
                onClick={() => setShowPhotoUpload(true)} 
                className="bg-accent-copper hover:bg-accent-copper/90 text-white"
                disabled={photos.length >= 5}
              >
                <Plus className="mr-2 h-4 w-4" />
                Añadir foto
              </Button>
            </div>
            
            {photos.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 border border-dashed border-casting-200 rounded-xl bg-casting-50">
                <Image className="h-16 w-16 text-casting-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No tienes fotos</h3>
                <p className="text-casting-500 text-center mb-6">
                  Añade fotos profesionales para mostrar tu versatilidad a directores y productores.
                </p>
                <Button 
                  onClick={() => setShowPhotoUpload(true)}
                  className="bg-accent-copper hover:bg-accent-copper/90 text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Añadir mi primera foto
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-bold text-white mb-2">{photo.title}</h3>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30">
                          Editar
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30"
                          onClick={() => deletePhoto(photo.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {photos.length < 5 && (
                  <div 
                    className="flex flex-col items-center justify-center p-8 border border-dashed border-casting-200 rounded-lg bg-casting-50 aspect-[3/4] cursor-pointer hover:bg-casting-100 transition-colors"
                    onClick={() => setShowPhotoUpload(true)}
                  >
                    <Plus className="h-12 w-12 text-casting-400 mb-4" />
                    <p className="text-casting-500 text-center">Añadir nueva foto</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Diálogo para subir foto */}
            <Dialog open={showPhotoUpload} onOpenChange={setShowPhotoUpload}>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Subir nueva foto</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-casting-200 rounded-lg p-12 flex flex-col items-center justify-center">
                    <Upload className="h-12 w-12 text-casting-400 mb-4" />
                    <p className="text-casting-600 text-center mb-4">
                      Arrastra una imagen aquí o haz clic para seleccionar
                    </p>
                    <Button variant="outline" size="sm">
                      Seleccionar archivo
                    </Button>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handlePhotoUpload}
                      className="bg-accent-copper hover:bg-accent-copper/90 text-white"
                    >
                      Subir foto
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </TabsContent>
          
          <TabsContent value="submissions" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold font-playfair">Mis postulaciones</h2>
              <Link to="/search">
                <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white">
                  Buscar castings
                </Button>
              </Link>
            </div>
            
            {submissions.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 border border-dashed border-casting-200 rounded-xl bg-casting-50">
                <Image className="h-16 w-16 text-casting-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No tienes postulaciones</h3>
                <p className="text-casting-500 text-center mb-6">
                  Explora los castings disponibles y postúlate para comenzar a recibir oportunidades.
                </p>
                <Link to="/search">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white">
                    Explorar castings disponibles
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-casting-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-casting-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-casting-500 uppercase tracking-wider">Proyecto</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-casting-500 uppercase tracking-wider">Rol</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-casting-500 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-casting-500 uppercase tracking-wider">Estado</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-casting-500 uppercase tracking-wider">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-casting-100">
                    {submissions.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{submission.projectName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-casting-600">
                          {submission.roleName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-casting-600">
                          {new Date(submission.submissionDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusLabel(submission.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="ghost" size="sm" className="text-accent-copper hover:text-accent-copper/90">
                            Ver detalles
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ModelDashboard;

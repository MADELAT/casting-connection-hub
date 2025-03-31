
import { useState } from "react";
import { VideoClip } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Film, Download, Clock, Link, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface VideoClipsListProps {
  clips: VideoClip[];
  isPremium: boolean;
  maxClips: number;
  onAddClip: () => void;
}

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const VideoClipsList = ({ clips, isPremium, maxClips, onAddClip }: VideoClipsListProps) => {
  const [selectedClip, setSelectedClip] = useState<VideoClip | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [downloadCodeDialog, setDownloadCodeDialog] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  
  const handlePlay = (clip: VideoClip) => {
    setSelectedClip(clip);
    setShowDialog(true);
  };
  
  const handleDownloadCode = (clip: VideoClip) => {
    if (!isPremium) {
      toast.error("Esta función solo está disponible para usuarios premium");
      return;
    }
    
    setSelectedClip(clip);
    // Generate a random code
    const newCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    setGeneratedCode(newCode);
    setDownloadCodeDialog(true);
  };
  
  const copyToClipboard = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      toast.success("Código copiado al portapapeles");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-playfair">Mis clips ({clips.length}/{maxClips})</h2>
        
        <Button 
          onClick={onAddClip} 
          className="bg-accent-copper hover:bg-accent-copper/90 text-white"
          disabled={clips.length >= maxClips}
        >
          <Plus className="mr-2 h-4 w-4" />
          Añadir clip
        </Button>
      </div>
      
      {clips.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 border border-dashed border-casting-200 rounded-xl bg-casting-50">
          <Film className="h-12 w-12 text-casting-400 mb-4" />
          <h3 className="text-xl font-medium mb-2">No tienes clips</h3>
          <p className="text-casting-500 text-center mb-4">
            Añade clips para mostrar tu rango actoral a productores y directores.
          </p>
          <Button onClick={onAddClip} className="bg-accent-copper hover:bg-accent-copper/90 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Añadir mi primer clip
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clips.map((clip) => (
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
                    variant={isPremium ? "outline" : "ghost"} 
                    className={`flex-1 ${isPremium ? "" : "text-casting-400 cursor-not-allowed"}`}
                    onClick={() => handleDownloadCode(clip)}
                    disabled={!isPremium}
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {clips.length > 0 && clips.length < maxClips && (
        <div 
          className="border border-dashed border-casting-200 rounded-xl bg-casting-50 p-6 cursor-pointer hover:bg-casting-100 transition-colors flex flex-col items-center justify-center"
          onClick={onAddClip}
        >
          <Plus className="h-8 w-8 text-casting-400 mb-2" />
          <p className="text-casting-500">Añadir nuevo clip</p>
        </div>
      )}
      
      {!isPremium && clips.length >= maxClips && (
        <div className="bg-casting-50 border border-casting-200 rounded-xl p-6">
          <h3 className="font-bold mb-2">¿Quieres subir más clips?</h3>
          <p className="text-casting-500 mb-4">
            Actualiza a premium para subir clips ilimitados y acceder a más características.
          </p>
          <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white">
            Actualizar a premium
          </Button>
        </div>
      )}
      
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
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Download Code Dialog */}
      <Dialog open={downloadCodeDialog} onOpenChange={setDownloadCodeDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Código de descarga</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-casting-600">
              Este código permite a productores y directores descargar tu clip "{selectedClip?.title}".
            </p>
            
            <div className="flex">
              <div className="flex-1 bg-casting-50 border border-casting-200 rounded-l-md p-3 font-mono text-center">
                {generatedCode}
              </div>
              <Button 
                variant="outline" 
                className="rounded-l-none border-l-0"
                onClick={copyToClipboard}
              >
                Copiar
              </Button>
            </div>
            
            <div className="bg-casting-50 border border-casting-200 rounded-md p-3">
              <h4 className="font-bold text-sm flex items-center mb-2">
                <Clock className="h-4 w-4 mr-1" />
                Configuración del código
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-casting-500">Vencimiento:</span>
                  <span>7 días</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-casting-500">Límite de descargas:</span>
                  <span>5 descargas</span>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoClipsList;


import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Download, Star, X, MessageSquare, Check } from "lucide-react";
import { toast } from "sonner";
import { CastingSubmission } from "@/types";

interface CastingRequestsListProps {
  castings: CastingSubmission[];
  onStatusChange: (castingId: string, newStatus: 'viewed' | 'shortlisted' | 'rejected') => void;
}

const CastingRequestsList = ({ castings, onStatusChange }: CastingRequestsListProps) => {
  const [selectedCasting, setSelectedCasting] = useState<CastingSubmission | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  
  const handlePlay = (casting: CastingSubmission) => {
    setSelectedCasting(casting);
    setShowDialog(true);
    
    // Mark as viewed if it's pending
    if (casting.status === 'pending') {
      onStatusChange(casting.id, 'viewed');
    }
  };
  
  const handleDownload = (casting: CastingSubmission) => {
    setSelectedCasting(casting);
    setShowDownloadDialog(true);
  };
  
  const handleStatusChange = (castingId: string, newStatus: 'viewed' | 'shortlisted' | 'rejected') => {
    onStatusChange(castingId, newStatus);
    toast.success(`Estado del casting actualizado a "${getStatusText(newStatus)}"`);
  };
  
  const checkDownloadCode = () => {
    // Here you would validate the code against the backend
    toast.success("Descarga iniciada");
    setShowDownloadDialog(false);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">Pendiente</Badge>;
      case 'viewed':
        return <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">Visto</Badge>;
      case 'shortlisted':
        return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Preseleccionado</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">No seleccionado</Badge>;
      default:
        return <Badge variant="outline">Desconocido</Badge>;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return "Pendiente";
      case 'viewed': return "Visto";
      case 'shortlisted': return "Preseleccionado";
      case 'rejected': return "No seleccionado";
      default: return "Desconocido";
    }
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-playfair">Castings recibidos</h2>
      
      {castings.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 border border-dashed border-casting-200 rounded-xl bg-casting-50">
          <MessageSquare className="h-12 w-12 text-casting-400 mb-4" />
          <h3 className="text-xl font-medium mb-2">No hay castings recibidos</h3>
          <p className="text-casting-500 text-center">
            Aquí aparecerán los castings enviados por actores para tus proyectos.
          </p>
        </div>
      ) : (
        <div className="border border-casting-200 rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Actor</TableHead>
                <TableHead>Proyecto</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {castings.map((casting) => (
                <TableRow key={casting.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                          alt={`Actor for ${casting.roleName}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>Carmen López</span>
                    </div>
                  </TableCell>
                  <TableCell>{casting.projectName}</TableCell>
                  <TableCell>{casting.roleName}</TableCell>
                  <TableCell>{formatDate(casting.submissionDate)}</TableCell>
                  <TableCell>{getStatusBadge(casting.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0" 
                        onClick={() => handlePlay(casting)}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0" 
                        onClick={() => handleDownload(casting)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      
      {/* Video Player Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {selectedCasting?.projectName}: {selectedCasting?.roleName}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-md overflow-hidden">
            {selectedCasting && (
              <video 
                src={selectedCasting.videoUrl} 
                poster={selectedCasting.thumbnailUrl}
                controls
                className="w-full h-full"
              />
            )}
          </div>
          <div>
            <h4 className="font-bold mb-2">Instrucciones del casting</h4>
            <p className="text-casting-500 mb-4">{selectedCasting?.instructions}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="font-bold mr-2">Estado:</span>
                {selectedCasting && getStatusBadge(selectedCasting.status)}
              </div>
              
              <div className="flex items-center">
                <span className="font-bold mr-2">Enviado:</span>
                <span className="text-casting-500">
                  {selectedCasting && formatDate(selectedCasting.submissionDate)}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
                onClick={() => selectedCasting && handleStatusChange(selectedCasting.id, 'viewed')}
              >
                <Eye className="mr-2 h-4 w-4" />
                Marcar como visto
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
                onClick={() => selectedCasting && handleStatusChange(selectedCasting.id, 'shortlisted')}
              >
                <Star className="mr-2 h-4 w-4" />
                Preseleccionar
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                onClick={() => selectedCasting && handleStatusChange(selectedCasting.id, 'rejected')}
              >
                <X className="mr-2 h-4 w-4" />
                No seleccionar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Download Dialog */}
      <Dialog open={showDownloadDialog} onOpenChange={setShowDownloadDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Descargar casting</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-casting-600">
              Para descargar este casting, necesitas un código de descarga proporcionado por el actor.
            </p>
            
            <div className="flex">
              <Input 
                placeholder="Ingresa el código de descarga" 
                className="rounded-r-none"
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CastingRequestsList;

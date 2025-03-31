
import { useState } from "react";
import { CastingSubmission } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Play, 
  Film, 
  Check, 
  Clock, 
  Link,
  ExternalLink,
  X,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface CastingSubmissionsListProps {
  submissions: CastingSubmission[];
  isPremium: boolean;
}

const CastingSubmissionsList = ({ submissions, isPremium }: CastingSubmissionsListProps) => {
  const [selectedSubmission, setSelectedSubmission] = useState<CastingSubmission | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [downloadCodeDialog, setDownloadCodeDialog] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  
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
  
  const handlePlay = (submission: CastingSubmission) => {
    setSelectedSubmission(submission);
    setShowDialog(true);
  };
  
  const handleDownloadCode = (submission: CastingSubmission) => {
    if (!isPremium) {
      toast.error("Esta función solo está disponible para usuarios premium");
      return;
    }
    
    setSelectedSubmission(submission);
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
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-playfair">Mis castings enviados</h2>
      
      {submissions.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 border border-dashed border-casting-200 rounded-xl bg-casting-50">
          <Film className="h-12 w-12 text-casting-400 mb-4" />
          <h3 className="text-xl font-medium mb-2">No has enviado castings aún</h3>
          <p className="text-casting-500 text-center mb-4">
            Aquí aparecerán los castings que envíes a productores y directores.
          </p>
        </div>
      ) : (
        <div className="border border-casting-200 rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proyecto</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.projectName}</TableCell>
                  <TableCell>{submission.roleName}</TableCell>
                  <TableCell>{formatDate(submission.submissionDate)}</TableCell>
                  <TableCell>{getStatusBadge(submission.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0" 
                        onClick={() => handlePlay(submission)}
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className={`h-8 w-8 p-0 ${isPremium ? "" : "text-casting-400 cursor-not-allowed"}`}
                        onClick={() => handleDownloadCode(submission)}
                        disabled={!isPremium}
                      >
                        <Link className="h-4 w-4" />
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
              {selectedSubmission?.projectName}: {selectedSubmission?.roleName}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-md overflow-hidden">
            {selectedSubmission && (
              <video 
                src={selectedSubmission.videoUrl} 
                poster={selectedSubmission.thumbnailUrl}
                controls
                className="w-full h-full"
              />
            )}
          </div>
          <div>
            <h4 className="font-bold mb-2">Instrucciones del casting</h4>
            <p className="text-casting-500">{selectedSubmission?.instructions}</p>
            
            {selectedSubmission?.notes && (
              <div className="mt-4">
                <h4 className="font-bold mb-2">Notas del productor</h4>
                <p className="text-casting-500">{selectedSubmission.notes}</p>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <span className="font-bold mr-2">Estado:</span>
                {selectedSubmission && getStatusBadge(selectedSubmission.status)}
              </div>
              
              <div className="flex items-center">
                <span className="font-bold mr-2">Enviado:</span>
                <span className="text-casting-500">
                  {selectedSubmission && formatDate(selectedSubmission.submissionDate)}
                </span>
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
              Este código permite a productores y directores descargar tu casting para "{selectedSubmission?.roleName}" en "{selectedSubmission?.projectName}".
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

export default CastingSubmissionsList;

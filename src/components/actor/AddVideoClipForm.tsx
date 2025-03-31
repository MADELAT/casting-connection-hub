
import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Upload, Film, Clock } from "lucide-react";
import { toast } from "sonner";

const clipSchema = z.object({
  title: z.string().min(2, { message: "El título debe tener al menos 2 caracteres" }),
  description: z.string().min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  tags: z.array(z.string()).min(1, { message: "Añade al menos una etiqueta" }),
});

interface AddVideoClipFormProps {
  isPremium: boolean;
  maxDuration: number; // in seconds
  onSuccess: () => void;
  onCancel: () => void;
}

const genreOptions = [
  "Acción", "Romance", "Drama", "Comedia", "Terror", "Thriller", 
  "Ciencia ficción", "Fantasía", "Histórico", "Época", "Aventura", "Musical"
];

const AddVideoClipForm = ({ isPremium, maxDuration, onSuccess, onCancel }: AddVideoClipFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  
  const form = useForm<z.infer<typeof clipSchema>>({
    resolver: zodResolver(clipSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
  });
  
  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.includes("video/")) {
      toast.error("Por favor selecciona un archivo de video válido");
      return;
    }
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setVideoPreview(url);
    
    // Create a video element to check duration
    const video = document.createElement("video");
    video.preload = "metadata";
    
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(video.src);
      
      if (video.duration > maxDuration) {
        toast.error(`El video excede la duración máxima de ${Math.floor(maxDuration / 60)} minutos`);
        setVideoPreview(null);
        return;
      }
      
      setSelectedFile(file);
      
      // Generate thumbnail from video
      const canvas = document.createElement("canvas");
      canvas.width = 640;
      canvas.height = 360;
      
      // Wait a bit to get a frame from the middle of the video
      setTimeout(() => {
        video.currentTime = Math.min(video.duration / 2, 3);
      }, 100);
      
      video.addEventListener("seeked", () => {
        canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumbnailPreview(canvas.toDataURL("image/jpeg"));
      });
    };
    
    video.src = url;
  };
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
    
    form.setValue("tags", selectedTags.includes(tag) 
      ? selectedTags.filter(t => t !== tag) 
      : [...selectedTags, tag]
    );
  };
  
  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      const newTags = [...selectedTags, customTag.trim()];
      setSelectedTags(newTags);
      form.setValue("tags", newTags);
      setCustomTag("");
    }
  };
  
  const handleCustomTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomTag();
    }
  };
  
  const removeTag = (tag: string) => {
    const newTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newTags);
    form.setValue("tags", newTags);
  };
  
  const onSubmit = (data: z.infer<typeof clipSchema>) => {
    if (!selectedFile || !thumbnailPreview) {
      toast.error("Por favor sube un video");
      return;
    }
    
    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      console.log("Form submitted:", {
        ...data,
        file: selectedFile,
        thumbnail: thumbnailPreview,
      });
      
      toast.success("Clip añadido correctamente");
      setIsUploading(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-casting-100">
      <h2 className="text-2xl font-bold font-playfair mb-6">Añadir nuevo clip</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0 md:w-2/5">
              {!videoPreview ? (
                <div className="aspect-video bg-casting-50 border border-casting-200 border-dashed rounded-md flex flex-col items-center justify-center">
                  <Film className="h-12 w-12 text-casting-400 mb-4" />
                  <p className="text-casting-500 text-center mb-2">
                    Sube tu clip en formato MP4
                  </p>
                  <p className="text-casting-400 text-sm text-center mb-4">
                    Duración máxima: {isPremium ? "3" : "1"} minutos
                  </p>
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <div className="bg-accent-copper hover:bg-accent-copper/90 text-white px-4 py-2 rounded-md flex items-center">
                      <Upload className="h-4 w-4 mr-2" />
                      <span>Seleccionar video</span>
                    </div>
                    <input
                      id="video-upload"
                      type="file"
                      accept="video/mp4,video/quicktime"
                      className="hidden"
                      onChange={handleVideoChange}
                    />
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="aspect-video bg-black rounded-md overflow-hidden relative">
                    <video
                      src={videoPreview}
                      poster={thumbnailPreview || undefined}
                      controls
                      className="w-full h-full"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setVideoPreview(null);
                        setThumbnailPreview(null);
                        setSelectedFile(null);
                      }}
                      className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="bg-casting-50 border border-casting-200 rounded-md p-3">
                    <h4 className="font-bold text-sm flex items-center mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      Información del video
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-casting-500">Nombre:</span>
                        <span className="truncate max-w-[200px]">{selectedFile?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-casting-500">Tamaño:</span>
                        <span>{(selectedFile?.size ? selectedFile.size / (1024 * 1024) : 0).toFixed(2)} MB</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex-grow">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Título de tu clip" {...field} className="input-styled" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe este clip, el personaje, la escena..." 
                        className="input-styled resize-none h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tags"
                render={() => (
                  <FormItem>
                    <FormLabel>Etiquetas</FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {genreOptions.map((tag) => (
                            <Badge 
                              key={tag}
                              variant={selectedTags.includes(tag) ? "default" : "outline"}
                              className={`cursor-pointer ${
                                selectedTags.includes(tag) 
                                  ? "bg-accent-copper hover:bg-accent-copper/90" 
                                  : "hover:bg-casting-100"
                              }`}
                              onClick={() => toggleTag(tag)}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Etiqueta personalizada"
                            value={customTag}
                            onChange={(e) => setCustomTag(e.target.value)}
                            onKeyDown={handleCustomTagKeyDown}
                            className="input-styled flex-grow"
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={addCustomTag}
                            disabled={!customTag.trim()}
                          >
                            Añadir
                          </Button>
                        </div>
                        
                        {selectedTags.length > 0 && (
                          <div>
                            <p className="text-sm text-casting-500 mb-2">Etiquetas seleccionadas:</p>
                            <div className="flex flex-wrap gap-1">
                              {selectedTags.map((tag) => (
                                <Badge key={tag} className="bg-accent-copper text-white flex items-center gap-1">
                                  {tag}
                                  <X 
                                    className="h-3 w-3 cursor-pointer" 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      removeTag(tag);
                                    }}
                                  />
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="bg-accent-copper hover:bg-accent-copper/90 text-white"
              disabled={isUploading}
            >
              {isUploading ? "Subiendo..." : "Guardar clip"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddVideoClipForm;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { toast } from "sonner";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

const postJobSchema = z.object({
  projectName: z.string().min(2, { message: "El nombre del proyecto es requerido" }),
  roleName: z.string().min(2, { message: "El nombre del rol es requerido" }),
  description: z.string().min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  requirements: z.string().min(10, { message: "Los requisitos deben tener al menos 10 caracteres" }),
  deadline: z.date({
    required_error: "La fecha límite es requerida",
  }),
  talentType: z.string().min(1, { message: "Selecciona un tipo de talento" }),
  location: z.string().min(2, { message: "La ubicación es requerida" }),
});

const PostJob = () => {
  const { userProfile } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof postJobSchema>>({
    resolver: zodResolver(postJobSchema),
    defaultValues: {
      projectName: "",
      roleName: "",
      description: "",
      requirements: "",
      location: "",
      talentType: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof postJobSchema>) => {
    if (!userProfile) {
      toast.error("Debes iniciar sesión para publicar un trabajo");
      navigate("/login");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Aquí iría la lógica para enviar los datos a Supabase
      console.log("Form submitted:", values);
      
      // Simular tiempo de envío
      setTimeout(() => {
        toast.success("¡Tu casting ha sido publicado con éxito!");
        navigate("/producer/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Ha ocurrido un error al publicar el casting");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <button onClick={() => navigate(-1)} className="inline-flex items-center text-accent-copper hover:text-accent-copper/90">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver atrás
          </button>
        </div>
        
        <h1 className="text-3xl font-bold font-playfair mb-6">Publicar un nuevo rol</h1>
        <p className="text-casting-600 mb-8">
          Completa el formulario a continuación para publicar un nuevo rol y encontrar el talento perfecto para tu proyecto.
        </p>
        
        <div className="bg-white rounded-xl shadow-sm border border-casting-100 p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="projectName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del proyecto</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Cortometraje 'Amanecer'" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="roleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del rol</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Protagonista femenina" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="talentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de talento</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-styled">
                            <SelectValue placeholder="Selecciona un tipo de talento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="actor">Actor/Actriz</SelectItem>
                          <SelectItem value="model">Modelo</SelectItem>
                          <SelectItem value="both">Ambos</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ubicación</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Madrid, España" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Fecha límite</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "input-styled pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: es })
                              ) : (
                                <span>Selecciona una fecha</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Fecha límite para recibir postulaciones
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción del rol</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe el rol, la historia, el personaje y el proyecto..." 
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
                name="requirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Requisitos y perfil buscado</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Detalla los requisitos específicos: edad, género, características físicas, habilidades..." 
                        className="input-styled resize-none h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="bg-accent-copper hover:bg-accent-copper/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Publicando..." : "Publicar casting"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostJob;

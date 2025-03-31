
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, User } from "lucide-react";
import { toast } from "sonner";

const profileSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  age: z.string().refine((val) => !isNaN(parseInt(val)) && parseInt(val) > 0, {
    message: "La edad debe ser un número positivo",
  }),
  gender: z.string().min(1, { message: "Selecciona un género" }),
  physicalType: z.string().min(1, { message: "Selecciona un tipo físico" }),
  height: z.string().min(1, { message: "Ingresa tu altura" }),
  bodyType: z.string().min(1, { message: "Selecciona un tipo de complexión" }),
  hairColor: z.string().min(1, { message: "Selecciona un color de cabello" }),
  eyeColor: z.string().min(1, { message: "Selecciona un color de ojos" }),
  bio: z.string().min(10, { message: "La biografía debe tener al menos 10 caracteres" }),
});

const ActorProfileForm = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      physicalType: "",
      height: "",
      bodyType: "",
      hairColor: "",
      eyeColor: "",
      bio: "",
    },
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };
  
  const onSubmit = (data: z.infer<typeof profileSchema>) => {
    console.log("Form submitted:", data);
    console.log("Profile image:", profileImage);
    console.log("CV file:", cvFile);
    
    // Here you would typically send this data to your backend
    // For now, let's just show a success toast
    toast.success("Perfil actualizado correctamente");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-casting-100">
      <h2 className="text-2xl font-bold font-playfair mb-6">Información del perfil</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-casting-100 mb-4">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <User className="w-20 h-20 text-casting-400" />
                    </div>
                  )}
                </div>
                <label htmlFor="profile-image" className="cursor-pointer">
                  <div className="flex items-center px-4 py-2 bg-casting-100 text-casting-700 rounded-md hover:bg-casting-200 transition">
                    <Upload className="w-4 h-4 mr-2" />
                    <span>Subir foto</span>
                  </div>
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              
              <div className="mt-6">
                <FormLabel className="block mb-2">Curriculum Vitae</FormLabel>
                <label htmlFor="cv-file" className="cursor-pointer">
                  <div className="flex items-center px-4 py-2 bg-casting-100 text-casting-700 rounded-md hover:bg-casting-200 transition">
                    <Upload className="w-4 h-4 mr-2" />
                    <span>{cvFile ? cvFile.name : "Subir CV (PDF)"}</span>
                  </div>
                  <input
                    id="cv-file"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleCvChange}
                  />
                </label>
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre completo" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Edad</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu edad" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Género</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-styled">
                            <SelectValue placeholder="Selecciona un género" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="femenino">Femenino</SelectItem>
                          <SelectItem value="no-binario">No binario</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="physicalType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo físico</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-styled">
                            <SelectValue placeholder="Selecciona un tipo físico" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="caucasico">Caucásico</SelectItem>
                          <SelectItem value="moreno">Moreno</SelectItem>
                          <SelectItem value="apinonado">Apiñonado</SelectItem>
                          <SelectItem value="afroamericano">Afroamericano</SelectItem>
                          <SelectItem value="asiatico">Asiático</SelectItem>
                          <SelectItem value="latino">Latino</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Altura (cm)</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu altura en cm" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="bodyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Complexión</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-styled">
                            <SelectValue placeholder="Selecciona una complexión" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="delgada">Delgada</SelectItem>
                          <SelectItem value="atletica">Atlética</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="corpulenta">Corpulenta</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="hairColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color de cabello</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-styled">
                            <SelectValue placeholder="Selecciona un color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="negro">Negro</SelectItem>
                          <SelectItem value="castano">Castaño</SelectItem>
                          <SelectItem value="rubio">Rubio</SelectItem>
                          <SelectItem value="pelirrojo">Pelirrojo</SelectItem>
                          <SelectItem value="canoso">Canoso</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="eyeColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color de ojos</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="input-styled">
                            <SelectValue placeholder="Selecciona un color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="marron">Marrón</SelectItem>
                          <SelectItem value="negro">Negro</SelectItem>
                          <SelectItem value="azul">Azul</SelectItem>
                          <SelectItem value="verde">Verde</SelectItem>
                          <SelectItem value="gris">Gris</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Biografía</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Cuéntanos sobre ti, tu experiencia y aspiraciones..." 
                        className="input-styled resize-none h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Esta información será visible para productores y directores.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button type="submit" className="bg-accent-copper hover:bg-accent-copper/90 text-white">
              Guardar perfil
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ActorProfileForm;

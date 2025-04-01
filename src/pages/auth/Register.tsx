
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { ArrowLeft, Check, User, Video, Camera } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { UserType } from "@/types";

const registerSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  userType: z.enum(["actor", "producer", "model"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

const Register = () => {
  const { user, signUp, userProfile } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "actor",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    const { error } = await signUp(
      values.email, 
      values.password, 
      values.name, 
      values.userType as UserType
    );
    setIsLoading(false);

    if (error) {
      toast.error("Error al registrarse: " + (error.message || "Por favor intenta de nuevo"));
      return;
    }

    toast.success("Registro exitoso. Bienvenido a CastingHub!");
  };

  // Redirect if user is already logged in
  if (user && userProfile) {
    const dashboardPath = 
      userProfile.userType === 'actor' ? '/actor/dashboard' :
      userProfile.userType === 'producer' ? '/producer/dashboard' :
      userProfile.userType === 'model' ? '/model/dashboard' : '/';
    
    return <Navigate to={dashboardPath} replace />;
  }

  return (
    <MainLayout>
      <div className="flex min-h-[calc(100vh-64px)] md:py-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-accent-copper hover:text-accent-copper/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
          
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold font-playfair mb-2">Únete a CastingHub</h1>
            <p className="text-casting-600 mb-8">
              Crea tu cuenta y comienza a conectar con oportunidades en la industria.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="******" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar contraseña</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="******" {...field} className="input-styled" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="userType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Tipo de usuario</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <FormItem>
                            <FormControl>
                              <RadioGroupItem
                                value="actor"
                                id="actor"
                                className="peer sr-only"
                              />
                            </FormControl>
                            <label
                              htmlFor="actor"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-casting-50 p-4 hover:bg-casting-100 hover:border-accent-copper [&:has([data-state=checked])]:border-accent-copper [&:has([data-state=checked])]:bg-casting-100"
                            >
                              <Video className="mb-3 h-6 w-6 text-accent-copper" />
                              <span className="text-sm font-medium">Actor/Actriz</span>
                            </label>
                          </FormItem>

                          <FormItem>
                            <FormControl>
                              <RadioGroupItem
                                value="producer"
                                id="producer"
                                className="peer sr-only"
                              />
                            </FormControl>
                            <label
                              htmlFor="producer"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-casting-50 p-4 hover:bg-casting-100 hover:border-accent-copper [&:has([data-state=checked])]:border-accent-copper [&:has([data-state=checked])]:bg-casting-100"
                            >
                              <User className="mb-3 h-6 w-6 text-accent-copper" />
                              <span className="text-sm font-medium">Productor/Director</span>
                            </label>
                          </FormItem>

                          <FormItem>
                            <FormControl>
                              <RadioGroupItem
                                value="model"
                                id="model"
                                className="peer sr-only"
                              />
                            </FormControl>
                            <label
                              htmlFor="model"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-casting-50 p-4 hover:bg-casting-100 hover:border-accent-copper [&:has([data-state=checked])]:border-accent-copper [&:has([data-state=checked])]:bg-casting-100"
                            >
                              <Camera className="mb-3 h-6 w-6 text-accent-copper" />
                              <span className="text-sm font-medium">Modelo</span>
                            </label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-accent-copper hover:bg-accent-copper/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Cargando..." : "Crear Cuenta"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <p className="text-casting-600">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="text-accent-copper hover:underline">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-casting-900 to-casting-950">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center px-12">
            <h2 className="text-white text-3xl font-bold font-playfair mb-4">
              Da el próximo paso en tu <span className="text-accent-copper">carrera</span>
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-accent-copper p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>Crea tu perfil profesional y sube clips o fotos de tu trabajo</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-accent-copper p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>Postúlate a roles y castings desde la plataforma</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 rounded-full bg-accent-copper p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>Conecta directamente con productores y directores</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;

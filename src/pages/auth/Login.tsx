
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
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const loginSchema = z.object({
  email: z.string().email("Ingresa un email válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const Login = () => {
  const { user, signIn, userProfile } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    const { error } = await signIn(values.email, values.password);
    setIsLoading(false);

    if (error) {
      toast.error("Error al iniciar sesión: " + (error.message || "Credenciales inválidas"));
      return;
    }

    toast.success("Inicio de sesión exitoso");
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
      <div className="flex min-h-[calc(100vh-64px)] md:py-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-accent-copper hover:text-accent-copper/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
          
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold font-playfair mb-2">Iniciar Sesión</h1>
            <p className="text-casting-600 mb-8">
              Bienvenido de nuevo a CastingHub. Ingresa tus credenciales para acceder a tu cuenta.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                <Button 
                  type="submit" 
                  className="w-full bg-accent-copper hover:bg-accent-copper/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Cargando..." : "Iniciar Sesión"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <p className="text-casting-600">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="text-accent-copper hover:underline">
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-casting-900 to-casting-950">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488130623907-c1cf1c311907?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center px-12">
            <h2 className="text-white text-3xl font-bold font-playfair mb-4">
              Conecta con <span className="text-accent-copper">oportunidades</span>
            </h2>
            <p className="text-gray-300">
              Accede a tu cuenta para descubrir casting calls, subir tus clips y conectar con directores y productores.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;

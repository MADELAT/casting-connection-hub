
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email({ message: "Por favor ingresa un email válido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginProps {
  onLogin: (userType: 'actor' | 'producer' | 'agent') => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      console.log("Login attempt:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in a real app this would check credentials against a backend
      if (data.email === "actor@example.com") {
        onLogin('actor');
        navigate('/actor/dashboard');
        toast.success("Inicio de sesión exitoso");
      } else if (data.email === "producer@example.com") {
        onLogin('producer');
        navigate('/producer/dashboard');
        toast.success("Inicio de sesión exitoso");
      } else if (data.email === "agent@example.com") {
        onLogin('agent');
        navigate('/producer/dashboard'); // Agents use the producer dashboard
        toast.success("Inicio de sesión exitoso");
      } else {
        // In a real app, you'd get this error from the backend
        toast.error("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Ha ocurrido un error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-sm border border-casting-100">
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-2xl font-bold font-playfair tracking-tight">
          Iniciar Sesión
        </h1>
        <p className="text-sm text-casting-500">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
      </div>
      
      <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label>Email</Label>
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
                  <Label>Contraseña</Label>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} className="input-styled" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-casting-300 text-accent-copper focus:ring-accent-copper/20"
                />
                <label htmlFor="remember" className="text-sm text-casting-500">
                  Recordarme
                </label>
              </div>
              
              <Link to="/forgot-password" className="text-sm text-accent-blue hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-accent-copper hover:bg-accent-copper/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="text-center">
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-casting-200" />
            <span className="px-3 text-sm text-casting-500">o</span>
            <hr className="flex-grow border-casting-200" />
          </div>
          
          <p className="text-sm text-casting-500">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-accent-blue hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
        
        <div className="bg-casting-50 border border-casting-200 rounded-md p-3 mt-6">
          <p className="text-xs text-casting-500 mb-2">
            <strong>Para demo:</strong> Usa estos emails para probar la aplicación
          </p>
          <ul className="text-xs text-casting-500 space-y-1">
            <li>actor@example.com (para acceder como actor)</li>
            <li>producer@example.com (para acceder como productor)</li>
            <li>agent@example.com (para acceder como representante)</li>
            <li>Contraseña: 123456 (para todos)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

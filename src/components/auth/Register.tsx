
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const registerSchema = z
  .object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    email: z.string().email({ message: "Por favor ingresa un email válido" }),
    userType: z.enum(["actor", "producer", "agent"], {
      required_error: "Por favor selecciona un tipo de usuario",
    }),
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

interface RegisterProps {
  onRegister: (userType: 'actor' | 'producer' | 'agent') => void;
}

const Register = ({ onRegister }: RegisterProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      userType: "actor",
      password: "",
      passwordConfirmation: "",
    },
  });
  
  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    
    try {
      console.log("Register attempt:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would register the user against a backend
      onRegister(data.userType);
      
      if (data.userType === 'actor') {
        navigate('/actor/dashboard');
      } else {
        navigate('/producer/dashboard');
      }
      
      toast.success("Registro exitoso");
    } catch (error) {
      console.error("Register error:", error);
      toast.error("Ha ocurrido un error al registrarse");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-sm border border-casting-100">
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-2xl font-bold font-playfair tracking-tight">
          Crear una cuenta
        </h1>
        <p className="text-sm text-casting-500">
          Regístrate para comenzar a usar la plataforma
        </p>
      </div>
      
      <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label>Nombre completo</Label>
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
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <Label>Tipo de usuario</Label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="input-styled">
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="actor">Actor / Actriz</SelectItem>
                      <SelectItem value="producer">Productor / Director</SelectItem>
                      <SelectItem value="agent">Representante</SelectItem>
                    </SelectContent>
                  </Select>
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
            
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <Label>Confirmar contraseña</Label>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} className="input-styled" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-accent-copper hover:bg-accent-copper/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="text-center">
          <p className="text-sm text-casting-500 mt-4">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-accent-blue hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
        
        <div className="text-xs text-casting-500 mt-6">
          <p>
            Al registrarte, aceptas nuestros{" "}
            <Link to="/terms" className="text-accent-blue hover:underline">
              Términos de Servicio
            </Link>{" "}
            y{" "}
            <Link to="/privacy" className="text-accent-blue hover:underline">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

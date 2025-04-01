
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Film, 
  Bell, 
  CreditCard, 
  Search,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Plus
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { mockActors } from "@/data/mockActors";

const AdminDashboard = () => {
  const { userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  
  const users = [
    { id: "1", name: "Ana García", email: "ana@example.com", type: "actor", status: "active" },
    { id: "2", name: "Carlos Rodríguez", email: "carlos@example.com", type: "producer", status: "active" },
    { id: "3", name: "Elena Martínez", email: "elena@example.com", type: "model", status: "inactive" },
    { id: "4", name: "Javier López", email: "javier@example.com", type: "actor", status: "active" },
    { id: "5", name: "Laura Fernández", email: "laura@example.com", type: "producer", status: "active" },
  ];
  
  const castings = [
    { id: "1", name: "Película Drama", producer: "Carlos Rodríguez", role: "Protagonista", applications: 12, status: "open" },
    { id: "2", name: "Serie TV - Comedia", producer: "Laura Fernández", role: "Secundario", applications: 8, status: "open" },
    { id: "3", name: "Cortometraje", producer: "Carlos Rodríguez", role: "Principal", applications: 5, status: "closed" },
    { id: "4", name: "Comercial TV", producer: "Laura Fernández", role: "Modelo", applications: 15, status: "open" },
  ];
  
  const subscriptions = [
    { id: "1", user: "Ana García", plan: "Premium", startDate: "01/06/2023", endDate: "01/06/2024", status: "active" },
    { id: "2", user: "Carlos Rodríguez", plan: "Professional", startDate: "15/05/2023", endDate: "15/05/2024", status: "active" },
    { id: "3", user: "Javier López", plan: "Basic", startDate: "10/07/2023", endDate: "10/07/2024", status: "active" },
    { id: "4", user: "Elena Martínez", plan: "Premium", startDate: "05/04/2023", endDate: "05/04/2024", status: "expired" },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-normal font-sans mb-2">Panel de Administración</h1>
          <p className="text-casting-600">
            Bienvenido, {userProfile?.name || "Administrador"}. Gestiona usuarios, castings y suscripciones.
          </p>
        </div>
        
        <div className="bg-white shadow-sm border border-casting-100 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{mockActors.length}</CardTitle>
                <CardDescription>Actores Registrados</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{users.length}</CardTitle>
                <CardDescription>Usuarios Activos</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{castings.length}</CardTitle>
                <CardDescription>Castings Publicados</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{subscriptions.filter(s => s.status === "active").length}</CardTitle>
                <CardDescription>Suscripciones Activas</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="users" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="castings" className="flex items-center">
              <Film className="h-4 w-4 mr-2" />
              Castings
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="subscriptions" className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              Suscripciones
            </TabsTrigger>
          </TabsList>
          
          <div className="mb-6 flex justify-between items-center">
            <div className="relative w-full md:w-80">
              <Input
                type="text"
                placeholder={`Buscar ${activeTab === "users" ? "usuarios" : activeTab === "castings" ? "castings" : activeTab === "notifications" ? "notificaciones" : "suscripciones"}...`}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-casting-500" />
            </div>
            
            <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white ml-4">
              <Plus className="h-4 w-4 mr-2" />
              {activeTab === "users" ? "Añadir Usuario" : 
               activeTab === "castings" ? "Añadir Casting" : 
               activeTab === "notifications" ? "Enviar Notificación" : 
               "Añadir Suscripción"}
            </Button>
          </div>
          
          <TabsContent value="users" className="space-y-4">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-casting-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-mono">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.type === "actor" ? "bg-blue-100 text-blue-800" :
                          user.type === "producer" ? "bg-purple-100 text-purple-800" :
                          "bg-pink-100 text-pink-800"
                        }`}>
                          {user.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {user.status === "active" ? (
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <EyeOff className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="castings" className="space-y-4">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-casting-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Proyecto</TableHead>
                    <TableHead>Productor</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Aplicaciones</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {castings.map((casting) => (
                    <TableRow key={casting.id}>
                      <TableCell className="font-mono">{casting.id}</TableCell>
                      <TableCell>{casting.name}</TableCell>
                      <TableCell>{casting.producer}</TableCell>
                      <TableCell>{casting.role}</TableCell>
                      <TableCell>{casting.applications}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          casting.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {casting.status === "open" ? "Abierto" : "Cerrado"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <div className="bg-white p-8 shadow-sm rounded-lg border border-casting-100 text-center">
              <Bell className="h-12 w-12 mx-auto text-casting-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">Sistema de Notificaciones</h3>
              <p className="text-casting-600 mb-6">
                Envía notificaciones masivas a todos los usuarios o a grupos específicos basados en criterios de filtrado.
              </p>
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white">
                Crear Nueva Notificación
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="subscriptions" className="space-y-4">
            <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-casting-100">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Fecha Inicio</TableHead>
                    <TableHead>Fecha Fin</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscriptions.map((sub) => (
                    <TableRow key={sub.id}>
                      <TableCell className="font-mono">{sub.id}</TableCell>
                      <TableCell>{sub.user}</TableCell>
                      <TableCell>{sub.plan}</TableCell>
                      <TableCell>{sub.startDate}</TableCell>
                      <TableCell>{sub.endDate}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          sub.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {sub.status === "active" ? "Activa" : "Expirada"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;

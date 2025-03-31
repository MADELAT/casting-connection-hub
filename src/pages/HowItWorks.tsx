
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Search, Film, Video, Download, Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-playfair mb-4">
            Cómo funciona CastingHub
          </h1>
          <p className="text-xl text-casting-600 max-w-3xl mx-auto">
            Descubre cómo nuestra plataforma conecta a actores con productores y directores para optimizar el proceso de casting.
          </p>
        </div>
        
        {/* For Actors Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="inline-block text-2xl font-bold font-playfair bg-gradient-to-r from-accent-copper to-accent-blue bg-clip-text text-transparent pb-1">
              Para Actores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-casting-200 shadow-sm">
              <div className="w-12 h-12 bg-accent-copper/10 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-accent-copper" />
              </div>
              <h3 className="text-xl font-bold mb-3">Crea tu perfil</h3>
              <p className="text-casting-600 mb-4">
                Registra tus datos, sube fotos profesionales y completa tu información relevante como actor para ser visible para productores y directores.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Añade tus características físicas</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Sube un CV actualizado</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Describe tu experiencia y habilidades</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200 shadow-sm">
              <div className="w-12 h-12 bg-accent-copper/10 rounded-full flex items-center justify-center mb-4">
                <Film className="h-6 w-6 text-accent-copper" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sube tus clips</h3>
              <p className="text-casting-600 mb-4">
                Crea tu biblioteca de clips que muestre tu versatilidad en diferentes géneros y estilos para que los productores puedan evaluar tu rango actoral.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Clasifica tus clips por género</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Añade descripciones detalladas</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Destaca tus mejores trabajos</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200 shadow-sm">
              <div className="w-12 h-12 bg-accent-copper/10 rounded-full flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-accent-copper" />
              </div>
              <h3 className="text-xl font-bold mb-3">Envía castings</h3>
              <p className="text-casting-600 mb-4">
                Graba y envía tus audiciones para roles específicos directamente a productores y directores, y recibe notificaciones sobre el estado de tus envíos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Recibe feedback de profesionales</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Genera códigos de descarga</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-copper mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Haz seguimiento de tus envíos</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white">
                Registrarme como actor
              </Button>
            </Link>
          </div>
        </div>
        
        {/* For Producers Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="inline-block text-2xl font-bold font-playfair bg-gradient-to-r from-accent-blue to-accent-copper bg-clip-text text-transparent pb-1">
              Para Productores y Directores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-casting-200 shadow-sm">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Busca talento</h3>
              <p className="text-casting-600 mb-4">
                Utiliza nuestros filtros avanzados para encontrar exactamente el tipo de actor que estás buscando, ahorrando tiempo y esfuerzo.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Filtra por características físicas</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Busca por géneros o habilidades</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Guarda búsquedas frecuentes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200 shadow-sm">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                <Film className="h-6 w-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evalúa el talento</h3>
              <p className="text-casting-600 mb-4">
                Visualiza clips y castings enviados por actores, proporcionando retroalimentación y toma decisiones informadas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Visualiza clips organizados por género</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Deja comentarios para los actores</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Organiza tus castings recibidos</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200 shadow-sm">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Descarga material</h3>
              <p className="text-casting-600 mb-4">
                Utiliza códigos proporcionados por los actores para descargar sus clips y castings para su evaluación offline o compartir con tu equipo.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Descarga clips autorizados</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Comparte material con tu equipo</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-accent-blue mr-2 mt-1" />
                  <span className="text-sm text-casting-500">Gestiona tus descargas en un solo lugar</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/register">
              <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white">
                Registrarme como productor
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-casting-50 p-8 rounded-xl border border-casting-100 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">
              Beneficios de usar CastingHub
            </h2>
            <p className="text-casting-600 max-w-3xl mx-auto">
              Nuestra plataforma ofrece numerosas ventajas tanto para actores como para productores y directores.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-accent-copper mr-2" />
                <h3 className="font-bold">Calidad profesional</h3>
              </div>
              <p className="text-sm text-casting-500">
                Todos los videos y perfiles mantienen un estándar profesional para una mejor experiencia.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-accent-copper mr-2" />
                <h3 className="font-bold">Ahorro de tiempo</h3>
              </div>
              <p className="text-sm text-casting-500">
                Reduce el tiempo dedicado a organizar audiciones y buscar talento adecuado.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 text-accent-copper mr-2" />
                <h3 className="font-bold">Conexiones directas</h3>
              </div>
              <p className="text-sm text-casting-500">
                Establece contacto directo entre actores y productores sin intermediarios innecesarios.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Search className="h-5 w-5 text-accent-copper mr-2" />
                <h3 className="font-bold">Búsqueda precisa</h3>
              </div>
              <p className="text-sm text-casting-500">
                Encuentra exactamente lo que buscas mediante filtros avanzados y categorizaciones precisas.
              </p>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-accent-copper to-accent-blue p-12 rounded-xl text-white">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete a cientos de profesionales que ya están revolucionando la forma de conectar talento con oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-accent-copper hover:bg-white/90 px-8 py-6 text-lg">
                Crear cuenta gratuita
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Ver planes y precios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowItWorks;

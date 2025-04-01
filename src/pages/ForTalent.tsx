
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Film, Star, Check, Upload, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

const ForTalent = () => {
  const { user } = useAuth();
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              Para <span className="text-accent-copper">Actores</span> y <span className="text-accent-copper">Modelos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Impulsa tu carrera profesional conectando directamente con productores y directores que buscan talento como tú.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {!user ? (
                <Link to="/register">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                    Unirte gratis <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Link to="/actor/dashboard">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                    Ir a mi perfil <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Beneficios para talentos
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              CastingHub te ofrece todas las herramientas que necesitas para destacar en la industria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="bg-casting-50 rounded-xl p-8 border border-casting-100">
              <div className="text-accent-copper mb-4">
                <Film className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Biblioteca de clips personalizada</h3>
              <p className="text-casting-600 mb-4">
                Crea una biblioteca de clips que muestre tu versatilidad actoral y facilite a los productores ver tu trabajo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Sube clips de hasta 3 minutos (premium)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Organiza por géneros y estilos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Clips ilimitados para usuarios premium</span>
                </li>
              </ul>
            </div>
            
            {/* Beneficio 2 */}
            <div className="bg-casting-50 rounded-xl p-8 border border-casting-100">
              <div className="text-accent-copper mb-4">
                <Upload className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Envío de castings optimizado</h3>
              <p className="text-casting-600 mb-4">
                Postúlate a roles y envía castings directamente a productores y directores sin intermediarios.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Proceso simplificado en pocos clics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Notificaciones de estado en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Feedback directo de productores</span>
                </li>
              </ul>
            </div>
            
            {/* Beneficio 3 */}
            <div className="bg-casting-50 rounded-xl p-8 border border-casting-100">
              <div className="text-accent-copper mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Conexiones directas</h3>
              <p className="text-casting-600 mb-4">
                Establece contacto directo con productores y directores interesados en tu perfil.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Sin intermediarios ni agencias</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Mensajería integrada (próximamente)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Mayor visibilidad en la industria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Planes Section */}
      <section className="py-20 bg-casting-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Planes para cada etapa de tu carrera
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Ofrecemos opciones flexibles para ayudarte a crecer profesionalmente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratuito */}
            <div className="bg-white rounded-xl p-8 border border-casting-200 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold font-playfair mb-2">Plan Gratuito</h3>
                <p className="text-accent-copper font-bold text-3xl mb-2">€0</p>
                <p className="text-casting-600">Para talentos emergentes</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">3 clips de hasta 1 minuto</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">5 fotos para modelos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Postulación a 5 castings al mes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Perfil básico visible para productores</span>
                </li>
              </ul>
              
              {!user ? (
                <Link to="/register" className="block w-full">
                  <Button variant="outline" className="w-full">
                    Registrarse Gratis
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" className="w-full" disabled>
                  Tu Plan Actual
                </Button>
              )}
            </div>
            
            {/* Plan Premium */}
            <div className="bg-white rounded-xl p-8 border-2 border-accent-copper shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-copper text-white px-4 py-1 rounded-full text-sm font-medium">
                Recomendado
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold font-playfair mb-2">Plan Premium</h3>
                <p className="text-accent-copper font-bold text-3xl mb-2">€9.99<span className="text-base font-normal text-casting-600">/mes</span></p>
                <p className="text-casting-600">Para profesionales serios</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Clips ilimitados de hasta 3 minutos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">20 fotos para modelos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Postulaciones ilimitadas a castings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Perfil destacado en búsquedas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Códigos de descarga para clips y fotos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-accent-copper mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-casting-600">Estadísticas de visualización de perfil</span>
                </li>
              </ul>
              
              <Link to="/pricing" className="block w-full">
                <Button className="w-full bg-accent-copper hover:bg-accent-copper/90 text-white">
                  Actualizar a Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 bg-casting-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">
            Comienza tu viaje profesional hoy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Únete a CastingHub y conecta con oportunidades reales que impulsen tu carrera.
          </p>
          {!user ? (
            <Link to="/register">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                Crear mi perfil gratis <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/actor/dashboard">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                Ir a mi perfil <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ForTalent;

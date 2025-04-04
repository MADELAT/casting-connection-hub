import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Users, Film, Search, Clock, Star } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, userProfile } = useAuth();

  return (
    <MainLayout>
      {/* Hero Section - Cinematographic style with background */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=3432&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] bg-gradient-to-r from-casting-950/95 via-casting-900/90 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:w-3/5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white font-sans font-normal">
              CastingHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-sans font-normal">
              La plataforma donde actores, modelos y productores se encuentran para crear el futuro del cine y la televisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {!user ? (
                <Link to="/register">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg font-sans font-normal">
                    Regístrate <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Link to={
                  userProfile?.userType === 'actor' ? '/actor/dashboard' :
                  userProfile?.userType === 'producer' ? '/producer/dashboard' :
                  userProfile?.userType === 'model' ? '/model/dashboard' : '/'
                }>
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg font-sans font-normal">
                    Mi Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Link to="/how-it-works">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] font-sans font-normal">
                  Cómo funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Perfiles Destacados - Nueva sección */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Talento destacado
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Descubre actores y modelos profesionales listos para tu próximo proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Perfil 1 */}
            <div className="group relative overflow-hidden rounded-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1675434704310-2af52463a6d0?q=80&w=2487&auto=format&fit=crop" 
                alt="Actor" 
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg">Sofia García</h3>
                <p className="text-sm text-gray-300">Actriz • Drama, Comedia</p>
              </div>
            </div>
            
            {/* Perfil 2 */}
            <div className="group relative overflow-hidden rounded-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1551621955-fa07d4b1376b?q=80&w=2487&auto=format&fit=crop" 
                alt="Actor" 
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg">Miguel Alvarez</h3>
                <p className="text-sm text-gray-300">Actor • Acción, Thriller</p>
              </div>
            </div>
            
            {/* Perfil 3 */}
            <div className="group relative overflow-hidden rounded-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1590123047191-898a69afb209?q=80&w=2340&auto=format&fit=crop" 
                alt="Modelo" 
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg">Laura Martínez</h3>
                <p className="text-sm text-gray-300">Modelo • Editorial, Comercial</p>
              </div>
            </div>
            
            {/* Perfil 4 */}
            <div className="group relative overflow-hidden rounded-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1550928323-31789f5b5d61?q=80&w=1971&auto=format&fit=crop" 
                alt="Actor" 
                className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg">Carlos Jiménez</h3>
                <p className="text-sm text-gray-300">Actor • Drama, Época</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/search">
              <Button className="bg-casting-900 hover:bg-casting-800 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                Ver más talento <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-casting-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Una plataforma diseñada para la industria
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Nuestra plataforma conecta actores con directores y productores, optimizando el proceso de casting y descubrimiento de talento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card hover-scale">
              <div className="text-accent-copper mb-4">
                <Camera size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Envía castings profesionales</h3>
              <p className="text-casting-600">
                Graba y envía tus castings con calidad profesional directamente desde nuestra plataforma, sin complicaciones técnicas.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card hover-scale">
              <div className="text-accent-copper mb-4">
                <Film size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Biblioteca de clips</h3>
              <p className="text-casting-600">
                Crea tu portafolio digital con clips que demuestren tu versatilidad actoral, organizado por géneros y estilos.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card hover-scale">
              <div className="text-accent-copper mb-4">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Búsqueda avanzada</h3>
              <p className="text-casting-600">
                Los productores pueden encontrar exactamente el talento que buscan con nuestro sistema de filtros avanzados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with background image */}
      <section className="py-20 relative text-white animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619344755866-f5c7ca79b2f6?q=80&w=2230&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-casting-950/95 to-casting-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Impulsa tu carrera <span className="text-accent-copper">hoy mismo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Únete a cientos de actores y productores que ya están revolucionando la forma de conectar talento con oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {!user ? (
              <>
                <Link to="/register">
                  <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                    Crear cuenta gratuita
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px]">
                    Ver planes y precios
                  </Button>
                </Link>
              </>
            ) : (
              <Link to={
                userProfile?.userType === 'actor' ? '/actor/dashboard' :
                userProfile?.userType === 'producer' ? '/producer/dashboard' :
                userProfile?.userType === 'model' ? '/model/dashboard' : '/'
              }>
                <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                  Mi Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

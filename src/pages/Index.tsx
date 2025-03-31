
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Users, Film, Search, Clock, Star } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=2072')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              Conectando <span className="text-accent-copper">talento</span> con oportunidades
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              La plataforma donde actores y productores se encuentran para crear el futuro del cine y la televisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                  Comenzar ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-md text-lg">
                  Cómo funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-casting-50">
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
            <div className="feature-card">
              <div className="text-accent-copper mb-4">
                <Camera size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Envía castings profesionales</h3>
              <p className="text-casting-600">
                Graba y envía tus castings con calidad profesional directamente desde nuestra plataforma, sin complicaciones técnicas.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card">
              <div className="text-accent-copper mb-4">
                <Film size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Biblioteca de clips</h3>
              <p className="text-casting-600">
                Crea tu portafolio digital con clips que demuestren tu versatilidad actoral, organizado por géneros y estilos.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card">
              <div className="text-accent-copper mb-4">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Búsqueda avanzada</h3>
              <p className="text-casting-600">
                Los productores pueden encontrar exactamente el talento que buscan con nuestro sistema de filtros avanzados.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card">
              <div className="text-accent-copper mb-4">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Procesos optimizados</h3>
              <p className="text-casting-600">
                Ahorra tiempo con un flujo de trabajo diseñado para maximizar la eficiencia en todos los pasos del proceso de casting.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="feature-card">
              <div className="text-accent-copper mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Conexiones directas</h3>
              <p className="text-casting-600">
                Establece contacto directo entre actores y productores, eliminando intermediarios innecesarios.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="feature-card">
              <div className="text-accent-copper mb-4">
                <Star size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Experiencia premium</h3>
              <p className="text-casting-600">
                Aprovecha funcionalidades avanzadas con nuestra suscripción premium para maximizar tus oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Cómo funciona
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Un proceso sencillo diseñado para facilitar la conexión entre talento y oportunidades.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-px bg-casting-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <div className="bg-casting-50 p-6 rounded-xl shadow-sm border border-casting-100">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-copper text-white font-bold mb-4">1</div>
                    <h3 className="text-xl font-bold font-playfair mb-3">Crea tu perfil</h3>
                    <p className="text-casting-600">
                      Registra tus datos, sube fotos profesionales y completa tu información relevante como actor.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-8 h-8 bg-accent-copper absolute left-1/2 transform -translate-x-1/2 rounded-full"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Create profile" 
                    className="rounded-xl shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:order-2">
                  <div className="bg-casting-50 p-6 rounded-xl shadow-sm border border-casting-100">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-copper text-white font-bold mb-4">2</div>
                    <h3 className="text-xl font-bold font-playfair mb-3">Sube tus clips</h3>
                    <p className="text-casting-600">
                      Crea tu biblioteca de clips que muestre tu versatilidad en diferentes géneros y estilos.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-8 h-8 bg-accent-copper absolute left-1/2 transform -translate-x-1/2 rounded-full"></div>
                
                <div className="md:w-1/2 md:pl-12 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1616469832301-a656d8d65ea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Upload clips" 
                    className="rounded-xl shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <div className="bg-casting-50 p-6 rounded-xl shadow-sm border border-casting-100">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-copper text-white font-bold mb-4">3</div>
                    <h3 className="text-xl font-bold font-playfair mb-3">Participa en castings</h3>
                    <p className="text-casting-600">
                      Graba y envía tus audiciones para roles específicos directamente a productores y directores.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-8 h-8 bg-accent-copper absolute left-1/2 transform -translate-x-1/2 rounded-full"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Submit castings" 
                    className="rounded-xl shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:order-2">
                  <div className="bg-casting-50 p-6 rounded-xl shadow-sm border border-casting-100">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-copper text-white font-bold mb-4">4</div>
                    <h3 className="text-xl font-bold font-playfair mb-3">Conecta con productores</h3>
                    <p className="text-casting-600">
                      Recibe feedback y establece contacto directo con profesionales interesados en tu talento.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-8 h-8 bg-accent-copper absolute left-1/2 transform -translate-x-1/2 rounded-full"></div>
                
                <div className="md:w-1/2 md:pl-12 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Connect with producers" 
                    className="rounded-xl shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-casting-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Impulsa tu carrera <span className="text-accent-copper">hoy mismo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Únete a cientos de actores y productores que ya están revolucionando la forma de conectar talento con oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
                Crear cuenta gratuita
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 rounded-md text-lg">
                Ver planes y precios
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Descubre cómo nuestra plataforma está transformando la forma en que actores y productores trabajan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-casting-50 p-8 rounded-xl shadow-sm border border-casting-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Marta Rodríguez" 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Marta Rodríguez</h4>
                  <p className="text-sm text-casting-500">Actriz</p>
                </div>
              </div>
              <p className="text-casting-600 italic">
                "Gracias a CastingHub pude enviar mis castings de manera profesional y conseguir mi primer papel en una serie importante. La plataforma es intuitiva y me ha abierto muchas puertas."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-casting-50 p-8 rounded-xl shadow-sm border border-casting-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Carlos Mendoza" 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Carlos Mendoza</h4>
                  <p className="text-sm text-casting-500">Director</p>
                </div>
              </div>
              <p className="text-casting-600 italic">
                "Como director, la plataforma me permite encontrar exactamente el tipo de talento que necesito para mis proyectos. El sistema de filtros es excepcional y ahorra muchísimo tiempo."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-casting-50 p-8 rounded-xl shadow-sm border border-casting-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="David Jiménez" 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">David Jiménez</h4>
                  <p className="text-sm text-casting-500">Actor</p>
                </div>
              </div>
              <p className="text-casting-600 italic">
                "La biblioteca de clips me permite mostrar mi versatilidad. Los productores pueden ver rápidamente mi rango actoral y eso me ha ayudado a conseguir papeles más diversos."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-accent-blue to-casting-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">
            Comienza tu viaje en CastingHub
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            La plataforma que conecta el talento con las oportunidades que merece.
          </p>
          <Link to="/register">
            <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
              Registrarse gratis
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Film, Camera, Globe, Award, Heart } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-casting-900 to-casting-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585158531004-3224babed121?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-casting-950 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              Sobre <span className="text-accent-copper">CastingHub</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transformando la forma en que el talento conecta con oportunidades en la industria audiovisual.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Nuestra historia
              </h2>
              <p className="text-lg text-casting-600 mb-6">
                CastingHub nació de la frustración compartida por actores, modelos y productores con los procesos de casting tradicionales. Las largas esperas, la falta de retroalimentación y las barreras de entrada nos inspiraron a crear una plataforma que democratizara el acceso al talento.
              </p>
              <p className="text-lg text-casting-600 mb-6">
                Fundada en 2023 por un equipo de profesionales de la industria audiovisual y tecnológica, CastingHub se ha convertido rápidamente en un punto de encuentro esencial para creativos y productores.
              </p>
              <p className="text-lg text-casting-600">
                Nuestra misión es simple: conectar el talento con oportunidades de manera eficiente, transparente y justa, eliminando intermediarios innecesarios y democratizando el acceso a la industria.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?q=80&w=2187" 
                  alt="Behind the scenes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1619247077745-2e4e58e7f4b6?q=80&w=2187" 
                  alt="Film camera" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-casting-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Nuestros valores
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Los principios que guían todo lo que hacemos en CastingHub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-casting-100">
              <div className="text-accent-copper mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Inclusividad</h3>
              <p className="text-casting-600">
                Creemos que el talento no tiene género, edad, origen o apariencia. Promovemos una industria más diversa e inclusiva donde todos tengan las mismas oportunidades.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-casting-100">
              <div className="text-accent-copper mb-4">
                <Globe className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Transparencia</h3>
              <p className="text-casting-600">
                Ofrecemos procesos claros, feedback honesto y una comunicación directa entre todos los participantes del ecosistema audiovisual.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-casting-100">
              <div className="text-accent-copper mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3">Excelencia</h3>
              <p className="text-casting-600">
                Buscamos constantemente mejorar nuestra plataforma y los servicios que ofrecemos, para empoderar a los profesionales y elevar el estándar de la industria.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Nuestro equipo
            </h2>
            <p className="text-lg text-casting-600 max-w-3xl mx-auto">
              Un grupo diverso de profesionales apasionados por revolucionar la industria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-copper/20 to-accent-blue/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Team member" 
                  className="rounded-full w-full h-full object-cover relative z-10 p-1"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">María González</h3>
              <p className="text-accent-copper mb-2">CEO & Fundadora</p>
              <p className="text-casting-600 text-sm">Ex-actriz y productora con más de 15 años de experiencia en la industria audiovisual.</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-copper/20 to-accent-blue/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Team member" 
                  className="rounded-full w-full h-full object-cover relative z-10 p-1"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">Carlos Martínez</h3>
              <p className="text-accent-copper mb-2">CTO</p>
              <p className="text-casting-600 text-sm">Ingeniero de software con amplia experiencia en plataformas digitales para industrias creativas.</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-copper/20 to-accent-blue/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Team member" 
                  className="rounded-full w-full h-full object-cover relative z-10 p-1"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">Ana Rodríguez</h3>
              <p className="text-accent-copper mb-2">Directora de Operaciones</p>
              <p className="text-casting-600 text-sm">Especialista en gestión de procesos de casting y producción audiovisual.</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-copper/20 to-accent-blue/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Team member" 
                  className="rounded-full w-full h-full object-cover relative z-10 p-1"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">Javier López</h3>
              <p className="text-accent-copper mb-2">Director de Marketing</p>
              <p className="text-casting-600 text-sm">Experto en marketing digital con enfoque en industrias creativas y entretenimiento.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-casting-900 to-casting-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">
            Sé parte de nuestra comunidad
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Únete a miles de profesionales que ya están transformando la industria audiovisual con CastingHub.
          </p>
          <Link to="/register">
            <Button className="bg-accent-copper hover:bg-accent-copper/90 text-white px-8 py-6 rounded-md text-lg">
              Comenzar ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;


import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Check, X, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  const plans = [
    {
      name: "Básico",
      price: annual ? "0" : "0",
      priceId: "",
      description: "Para empezar a explorar el mundo del casting",
      features: [
        "Perfil básico de actor",
        "Hasta 3 clips de 1 minuto",
        "Envío de castings (hasta 2 minutos)",
        "Visualización limitada de perfiles",
      ],
      notIncluded: [
        "Descarga de videos",
        "Clips extendidos",
        "Códigos de compartición",
        "Filtros avanzados de búsqueda",
      ],
      buttonText: "Comenzar gratis",
      buttonVariant: "outline" as const,
      href: "/register",
      popular: false,
    },
    {
      name: "Premium",
      price: annual ? "99.90" : "9.99",
      priceId: "price_premium",
      description: "Para actores y productores profesionales",
      features: [
        "Perfil completo de actor",
        "Clips ilimitados",
        "Videos de hasta 5 minutos",
        "Envío de castings (hasta 10 minutos)",
        "Códigos de descarga para videos",
        "Filtros avanzados de búsqueda",
        "Estadísticas de visualización",
        "Prioridad en los resultados de búsqueda",
      ],
      notIncluded: [],
      buttonText: "Comenzar Premium",
      buttonVariant: "default" as const,
      href: "/register",
      popular: true,
    },
    {
      name: "Empresarial",
      price: "Contactar",
      priceId: "",
      description: "Para productoras y agencias de casting",
      features: [
        "Todo lo incluido en Premium",
        "Múltiples usuarios",
        "Proyectos ilimitados",
        "API personalizada",
        "Gestor de castings avanzado",
        "Soporte prioritario",
        "Personalización de la plataforma",
      ],
      notIncluded: [],
      buttonText: "Contactar ventas",
      buttonVariant: "outline" as const,
      href: "/contact",
      popular: false,
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-playfair mb-4">
            Planes y precios
          </h1>
          <p className="text-xl text-casting-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-3 bg-casting-50 p-1 rounded-full border border-casting-200">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  !annual
                    ? "bg-white shadow-sm text-casting-900"
                    : "text-casting-500"
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  annual
                    ? "bg-white shadow-sm text-casting-900"
                    : "text-casting-500"
                }`}
              >
                Anual <span className="text-accent-copper">-20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white border ${
                plan.popular
                  ? "border-accent-copper relative scale-105 shadow-lg"
                  : "border-casting-200"
              } rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent-copper text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold font-playfair">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  {plan.price === "Contactar" ? (
                    <span className="text-4xl font-bold">Contactar</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${plan.price}</span>
                      {plan.price !== "0" && (
                        <span className="ml-1 text-casting-500">
                          /{annual ? "año" : "mes"}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <p className="mt-2 text-casting-500">{plan.description}</p>
                
                <div className="mt-6">
                  <Link to={plan.href}>
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full ${
                        plan.buttonVariant === "default"
                          ? "bg-accent-copper hover:bg-accent-copper/90"
                          : ""
                      }`}
                    >
                      {plan.popular && <Star className="mr-2 h-4 w-4" />}
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="border-t border-casting-200 p-6">
                <h4 className="font-medium mb-4">Características</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex text-casting-400">
                      <X className="text-red-400 h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">
            Preguntas frecuentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-casting-200">
              <h3 className="text-xl font-bold mb-3">¿Puedo cambiar de plan en cualquier momento?</h3>
              <p className="text-casting-600">
                Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200">
              <h3 className="text-xl font-bold mb-3">¿Hay algún período de prueba?</h3>
              <p className="text-casting-600">
                Ofrecemos un período de prueba de 7 días para el plan Premium. Puedes cancelar en cualquier momento durante este período.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200">
              <h3 className="text-xl font-bold mb-3">¿Cómo funciona la facturación?</h3>
              <p className="text-casting-600">
                La facturación se realiza de forma recurrente según el plan elegido (mensual o anual). Puedes cancelar tu suscripción en cualquier momento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-casting-200">
              <h3 className="text-xl font-bold mb-3">¿Qué formas de pago aceptan?</h3>
              <p className="text-casting-600">
                Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express) y PayPal.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            ¿Tienes más preguntas?
          </h2>
          <p className="text-xl text-casting-600 max-w-3xl mx-auto mb-8">
            Nuestro equipo está disponible para ayudarte con cualquier consulta que tengas sobre nuestros planes y servicios.
          </p>
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent-copper text-accent-copper hover:bg-accent-copper/10"
            >
              Contactar con ventas
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ActorDashboard from "./pages/actor/ActorDashboard";
import ProducerDashboard from "./pages/producer/ProducerDashboard";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Search from "./pages/Search";
import ActorProfile from "./pages/ActorProfile";

const queryClient = new QueryClient();

const App = () => {
  const [userType, setUserType] = useState<'actor' | 'producer' | 'agent' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = (type: 'actor' | 'producer' | 'agent') => {
    setUserType(type);
    setIsLoggedIn(true);
  };
  
  const handleRegister = (type: 'actor' | 'producer' | 'agent') => {
    setUserType(type);
    setIsLoggedIn(true);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={
              <div className="min-h-screen bg-casting-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Login onLogin={handleLogin} />
              </div>
            } />
            <Route path="/register" element={
              <div className="min-h-screen bg-casting-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <Register onRegister={handleRegister} />
              </div>
            } />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* Actor routes */}
            <Route path="/actor/dashboard" element={<ActorDashboard />} />
            
            {/* Producer routes */}
            <Route path="/producer/dashboard" element={<ProducerDashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/actor/:id" element={<ActorProfile />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

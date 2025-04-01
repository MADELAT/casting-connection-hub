
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ActorDashboard from "./pages/actor/ActorDashboard";
import ProducerDashboard from "./pages/producer/ProducerDashboard";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Search from "./pages/Search";
import ActorProfile from "./pages/ActorProfile";
import ForTalent from "./pages/ForTalent";
import PostJob from "./pages/producer/PostJob";
import ModelsPage from "./pages/ModelsPage";
import AboutPage from "./pages/AboutPage";
import ModelDashboard from "./pages/model/ModelDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/for-talent" element={<ForTalent />} />
              <Route path="/models" element={<ModelsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/post-job" element={<PostJob />} />
              
              {/* Protected routes */}
              <Route path="/actor/dashboard" element={
                <ProtectedRoute allowedUserTypes={['actor']}>
                  <ActorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/producer/dashboard" element={
                <ProtectedRoute allowedUserTypes={['producer']}>
                  <ProducerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/model/dashboard" element={
                <ProtectedRoute allowedUserTypes={['model']}>
                  <ModelDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/search" element={<Search />} />
              <Route path="/actor/:id" element={<ActorProfile />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

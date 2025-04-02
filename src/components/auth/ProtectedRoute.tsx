
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { UserType } from '@/types';
import { Loader } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedUserTypes: UserType[];
}

const ProtectedRoute = ({ children, allowedUserTypes }: ProtectedRouteProps) => {
  const { user, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader className="h-12 w-12 animate-spin text-accent-copper" />
          <p className="mt-4 text-casting-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (userProfile && !allowedUserTypes.includes(userProfile.userType)) {
    // Redirect to the appropriate dashboard based on user type
    if (userProfile.userType === 'actor') {
      return <Navigate to="/actor/dashboard" replace />;
    } else if (userProfile.userType === 'producer') {
      return <Navigate to="/producer/dashboard" replace />;
    } else if (userProfile.userType === 'model') {
      return <Navigate to="/model/dashboard" replace />;
    } else if (userProfile.userType === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;

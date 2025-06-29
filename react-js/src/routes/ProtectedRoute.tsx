// routes/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace with real auth logic
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

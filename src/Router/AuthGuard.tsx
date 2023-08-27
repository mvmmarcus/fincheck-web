import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const isSignedIn = false;

  if (!isSignedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isSignedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

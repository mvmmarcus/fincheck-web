import { PropsWithChildren, createContext } from "react";

interface AuthContextProps {
  isSignedIn: boolean;
}

interface AuthProviderProps extends PropsWithChildren {}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ isSignedIn: false }}>
      {children}
    </AuthContext.Provider>
  );
}

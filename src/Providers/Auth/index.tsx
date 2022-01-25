import { createContext, ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  setAccess: () => void;
}

export const AuthContext = createContext({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  function setAccess() {
    localStorage.setItem(
      "@Hamburgueria_typescript/authenticated",
      JSON.stringify(true)
    );
  }

  return (
    <AuthContext.Provider value={{ setAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

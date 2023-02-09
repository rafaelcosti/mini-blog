import { useContext, createContext } from "react";
import IAuthContext from "./IAuthContext";

const AuthContext = createContext<IAuthContext | null>(null);

/**
 * 
 * @param param 
 * @returns 
 */
export function AuthProvider({ children, value }: IAuthContext) {
  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>);
}

export function useAuthValue() {
  return useContext(AuthContext);
}
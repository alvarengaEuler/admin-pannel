import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

// interface AuthContextProps {}

interface AuthContextProviderProps {
  currentUser?: any;
  signup?: any;
}

const AuthContext = createContext<AuthContextProviderProps>({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<any>(true);

  function signup(email: any, password: any) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

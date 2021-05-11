import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

// interface AuthContextProps {}

interface AuthContextProviderProps {
  currentUser?: any;
  signup?: any;
  logout?: () => {};
  login?: (email: string, password: string) => {};
  resetPassword?: (email?: string) => {};
  updateEmail?: (email?: string) => {};
  updatePassword?: (password?: string) => {};
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

  function login(email: any, password: any) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: any) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: any) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password: any) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

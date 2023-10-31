"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { loginAPI, registerAPI } from "./apis";
import axios from "axios";

interface AuthContextProps {
  user: {
    token: string;
  } | null;
  loginUser: (data: { email: string; password: string }) => Promise<void>;
  signOut: () => void;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ token: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(initialUser);

    if (initialUser && initialUser.token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${initialUser.token}`;
    }
    setLoading(false);
  }, []);

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const res = await loginAPI({ email, password });
      localStorage.setItem("user", JSON.stringify(res));
      setUser({
        token: res.token,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
    } catch (error) {
      throw new Error(error.message || "Error during login.");
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = async ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      const res = await registerAPI({
        email,
        password,
        firstName,
        lastName,
      });
    } catch (error) {
      throw new Error(error.message || "Error during registration.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loginUser, signOut, register, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

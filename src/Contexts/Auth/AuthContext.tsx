import { createContext, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthType } from "../../Types/AuthType";
import { User } from "../../Types/User";
import { useApi } from "./../../Hooks/useApi";

export const AuthContext = createContext<AuthType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const api = useApi();

  const [user, setUser] = useState<User | null>(null);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (data.user) {
      setUser(data.user);
      setStorageDb(data.user);
      // LocalStorage with data.user

      toast(`bem-vindo(a), ${data.user.name}`);

      return true;
    }
    return false;
  };

  const setStorageDb = (auth: string) => {
    const storageData = localStorage.setItem(
      "auth-relatory",
      JSON.stringify(auth)
    );
    return storageData;
  };

  useEffect(() => {
    const authStorage = localStorage.getItem("auth-relatory");
    if (authStorage) {
      const foundUser = JSON.parse(authStorage);
      setUser(foundUser);
    }
  }, []);

  const logout = () => {
    setStorageDb("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

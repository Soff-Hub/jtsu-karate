// ** React Imports
import { createContext, useEffect, useState } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Types
import client from "../repositories/repository";

// ** Defaults
const defaultProvider = {
  user: null,
  setUser: () => null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  initAuth: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const router = useRouter();

  const initAuth = async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      await client
        .get("/common/profile/", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then(async (response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setUser(null);
          router.replace("/profile/login");
        });
    } else {
      window.localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const handleLogin = (params, errorCallback) => {
    client
      .post("/common/login/", params)
      .then(async (response) => {
        localStorage.setItem("token", response.data?.token?.access);
        await initAuth();
        router.push("/profile/user");
      })

      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push("/profile/login");
  };

  const values = {
    user,
    setUser,
    login: handleLogin,
    logout: handleLogout,
    initAuth,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

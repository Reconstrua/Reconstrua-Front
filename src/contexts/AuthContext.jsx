import { createContext, useEffect, useState } from "react"
import {AxiosAPI} from "../AxiosConfig"
import {useNavigate} from "react-router-dom"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false); // Marca o carregamento como concluído
  }, []);

  const navigate = useNavigate();

  async function loginAdm(data) {
    try {
      const response = await AxiosAPI.post("/admins/login", {
        username: `${data.username}`,
        password: `${data.password}`,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        setIsAuthenticated(true);
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logoutAdm() {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
  }

  if (isLoading) {
    return <div className="bg-dark-green h-screen w-full flex justify-center items-center text-component-light font-semibold">Carregando...</div>; // Renderiza um indicador de carregamento enquanto verifica o token
  }

  return (
    <AuthContext.Provider value={{ loginAdm, logoutAdm, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

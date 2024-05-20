import { createContext, useEffect, useState } from "react";
import { AxiosAPI } from "../AxiosConfig";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      tokenValidation(token);
    } 
  }, []);

  const tokenValidation = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        setIsAuthenticated(false);
        navigate("/login/admin");
      } else {
        setIsAuthenticated(true);
        localStorage.setItem("jwtToken", token);
        navigate("/dashboard/admin");
      }
    } catch (error) {
      setIsAuthenticated(false);
      navigate("/login/admin");
    } 
  };

  const loginAdm = async (data) => {
    try {
      const response = await AxiosAPI.post("/admins/login", {
        username: data.username,
        password: data.password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        tokenValidation(token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutAdm = () => {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
    navigate("/login/admin");
  };


  return (
    <AuthContext.Provider value={{ loginAdm, logoutAdm, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

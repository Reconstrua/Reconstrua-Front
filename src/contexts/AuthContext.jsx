import { createContext, useEffect, useState } from "react"
import { AxiosAPI } from "../AxiosConfig"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false || true);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      setIsAuthenticated(false);
      navigate("/login/admin")
    }
  }, [])

  function tokenValidation(token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      setIsAuthenticated(false);
      navigate("/login/admin")
    }
    localStorage.setItem("jwtToken", token);
    setIsAuthenticated(true);
    navigate("/dashboard/admin");
  }




  async function loginAdm(data) {
    try {
      const response = await AxiosAPI.post("/admins/login", {
        username: `${data.username}`,
        password: `${data.password}`,
      });
      if (response.status === 200) {
        const token = await response.data.token;
        tokenValidation(token);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logoutAdm() {
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
  }


  return (
    <AuthContext.Provider value={{ loginAdm, logoutAdm, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

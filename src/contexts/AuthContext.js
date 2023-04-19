import React, { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [donate,setDonate] = useState();
  const [user, setUser] = useState(null);
  const [resetApi,setResetApi] = useState({})
  async function login(email, password) {
    const data = await AuthService.login(email, password);
    return data;
  }

  async function sign_up(name,phone_number, email, password) {
    const data = await AuthService.sign_up(name,phone_number, email, password);
    return data;
  }

  function logout() {
    AuthService.logout();
    setUser(null);

  }


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        console.log(user);
        setUser(user);
      } catch (error) {
        localStorage.removeItem("access_token")
      }
    };

    fetchUser();
  }, []);


   // axios instance for making requests
   const authAxios = axios.create();



   authAxios.interceptors.response.use(
     (response) => {
       if (response.data) {
         if (response.status === 200 || response.status === 201) {
           return response;
         }
         return Promise.reject(response);
       }
       return response;
     },
     (error) => {
       if (error.response.status === 401) {
         logout();
       }
       return Promise.reject(error);
     }
   );
 

  return (
    <AuthContext.Provider value={{ user, login, logout, authAxios, sign_up,donate,setDonate,resetApi,setResetApi }}>
      {children}
    </AuthContext.Provider>
  );
};

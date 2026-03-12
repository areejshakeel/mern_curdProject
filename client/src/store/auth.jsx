import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("auth-token"));
   
    const isloggedIn = !!token;
   
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("auth-token", serverToken);
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("auth-token");
    };

      const fetchLoggedInUser = () => {
      
    };

    return (
        <AuthContext.Provider value={{ isloggedIn, storeTokenInLS, LogoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const useContextValue = useContext(AuthContext);

    if (!useContextValue) {
        throw new Error("useAuth used outside the provider");
    }

    return useContextValue;
};
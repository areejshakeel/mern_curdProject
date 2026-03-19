import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("auth-token"));
    const [authUser, setAuthUser] = useState("");

    const isloggedIn = !!token;

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("auth-token", serverToken);
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("auth-token");
    };

    // JWT Authentication, currently logged In user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            })
            const data = await response.json()
            console.log(data.userData, "data")
            setAuthUser(data.userData)
        } catch (error) {
            console.log(error, "error")
        }
    };
    useEffect(() => {
        userAuthentication()
    }, [])

    return (
        <AuthContext.Provider value={{ authUser, isloggedIn, storeTokenInLS, LogoutUser }}>
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
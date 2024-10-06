import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Function to set the authentication token
    const signin = (newToken, callback) => {
        setToken(newToken);
        localStorage.setItem("token", token);
        callback();
    };

    const signout = (callback) => {
        setToken(null);
        localStorage.removeItem("token");
        callback();
    };

    const value = { token, signin, signout };

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

import React, { useState, createContext } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    user: {
        email: "",
        username: "",
        userId: "",
    },
});

export const AuthWrapper = (props) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        user: {
            email: "",
            username: "",
            userId: "",
        },
    });
    const [loading, setLoading] = useState(true);
    // ...
    return (
        <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
            {props.children}
        </AuthContext.Provider>
    );
};

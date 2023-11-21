import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js';
import { set } from 'mongoose';
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Auth context must be used within an AuthProvider");
    }
    return context;
};


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); //User recognized by the server
    const [isAuthenticated, setIsAuthenticated] = useState(false); //User recognized by the client
    const [errors, setErrors] = useState([]); //Errors from the server [TODO
    const [loading, setLoading] = useState(true); //Loading state [TODO

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data]);
        }
    }

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        setIsAuthenticated(false);
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000)
            return () => clearTimeout(timer); //This is to avoid memory leaks
        }
    }, [errors])

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {

                const res = await verifyTokenRequest(cookies.token);

                if (!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                } 

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);

            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, [])


    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors,
            loading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
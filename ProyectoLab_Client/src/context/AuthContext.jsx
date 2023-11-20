import { createContext, useState, useContext } from 'react';
import { registerRequest } from '../api/auth.js';
import { set } from 'mongoose';


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


    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error){
            console.log(error.response);
            setErrors(error.response.data);
        }
    }

    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}
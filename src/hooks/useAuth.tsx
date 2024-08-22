import { useState, createContext, useContext } from 'react';
import { signUp, signIn, logout, getLoggedInUser, setLoggedInUser } from '../services/authService';

interface AuthContextType {
    isAuthenticated: boolean;
    handleSignUp: (email: string, password: string) => boolean;
    handleSignIn: (email: string, password: string) => boolean;
    handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getLoggedInUser());

    const handleSignUp = (email: string, password: string): boolean => {
        const success = signUp({ email, password });
        if (success) {
            setLoggedInUser(email);
            setIsAuthenticated(true);
        }
        return success;
    };

    const handleSignIn = (email: string, password: string): boolean => {
        const success = signIn(email, password);
        if (success) {
            setLoggedInUser(email);
            setIsAuthenticated(true);
        }
        return success;
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, handleSignUp, handleSignIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const ROLES = {
    PLAYER: 'Player',
    COMP_ADMIN: 'Tournament Admin',
    VENUE_ADMIN: 'Venue Manager',
    MASTER_ADMIN: 'Master Admin',
    SUPER_ADMIN: 'Super Admin',
};

// LIVE_IDENTITY_MAP for Production feel
const IDENTITY_REGISTRY = {
    'superadmin@beva.com': { role: ROLES.SUPER_ADMIN, name: 'System Admin', id: 'SUPER-001', rating: 'N/A' },
    'masteradmin@beva.com': { role: ROLES.MASTER_ADMIN, name: 'Senior Admin', id: 'MASTER-088', rating: 2100 },
    'venue@beva.com': { role: ROLES.VENUE_ADMIN, name: 'Venue Manager', id: 'VENUE-SYD', rating: 1850 },
    'compadmin@beva.com': { role: ROLES.COMP_ADMIN, name: 'Tournament Manager', id: 'COMP-A1', rating: 1920 },
    'player@beva.com': { role: ROLES.PLAYER, name: 'John Doe', id: 'AUS-8821', rating: 1560 },
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(ROLES.PLAYER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Persistence
    useEffect(() => {
        const savedAuth = localStorage.getItem('beva_auth');
        const savedUser = localStorage.getItem('beva_user');

        if (savedAuth === 'true' && savedUser) {
            const parsedUser = JSON.parse(savedUser);
            setIsAuthenticated(true);
            setUser(parsedUser);
            setRole(parsedUser.role);
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Simulate real credential verification
        const identity = IDENTITY_REGISTRY[email.toLowerCase()];

        if (identity) {
            setIsAuthenticated(true);
            setUser(identity);
            setRole(identity.role);
            localStorage.setItem('beva_auth', 'true');
            localStorage.setItem('beva_user', JSON.stringify(identity));
            return { success: true };
        }
        return { success: false, message: 'Invalid email or password.' };
    };

    const signup = (userData) => {
        const newUser = {
            role: ROLES.PLAYER,
            name: userData.name,
            id: 'NEW-' + Math.floor(Math.random() * 10000),
            rating: 1200,
            ...userData
        };
        setIsAuthenticated(true);
        setUser(newUser);
        setRole(newUser.role);
        localStorage.setItem('beva_auth', 'true');
        localStorage.setItem('beva_user', JSON.stringify(newUser));
        return { success: true };
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('beva_auth');
        localStorage.removeItem('beva_user');
    };

    const switchRole = (newRole) => {
        // This is now disabled in the live UI, but kept here for internal logic if needed
        setRole(newRole);
    };

    return (
        <AuthContext.Provider value={{ user, role, isAuthenticated, loading, login, signup, logout, switchRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

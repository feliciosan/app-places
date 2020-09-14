import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../api/api';

import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setIsAuthenticated(true);
        }

        setIsAuthLoading(false);
    }, []);

    const handleSignIn = (token) => {
        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setIsAuthenticated(true);
        history.push('/');
    };

    const handleSignOut = () => {
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        setIsAuthenticated(false);
        history.push('/signin');
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isAuthLoading,
                handleSignIn,
                handleSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { AuthContext, AuthProvider };

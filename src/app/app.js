import React, { useContext } from 'react';
import AppRoutes from '../routes/routes';
import Header from '../components/header/header';
import GlobalStyle from '../styles/global/global';

import { AuthProvider, AuthContext } from '../contexts/auth/auth';
import { Loading } from '../styles/default/default';

const AppContexted = () => {
    const { isAuthLoading } = useContext(AuthContext);

    return (
        <>
            {isAuthLoading ? (
                <Loading isPageLoading />
            ) : (
                <>
                    <GlobalStyle />
                    <Header />
                    <AppRoutes />
                </>
            )}
        </>
    );
};

const App = () => (
    <AuthProvider>
        <AppContexted />
    </AuthProvider>
);

export default App;

import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth/auth';
import { Button, Container } from '../../styles/default/default';
import {
    HeaderBar,
    HeaderContent,
    HeaderLogo,
    HeaderMenu,
} from './header-styles';

const Header = () => {
    const { isAuthenticated, handleSignOut } = useContext(AuthContext);

    return (
        <HeaderBar>
            <Container>
                <HeaderContent>
                    <div>
                        <Link to="/">
                            <HeaderLogo>Nearby</HeaderLogo>
                        </Link>
                    </div>
                    <div>
                        {isAuthenticated && (
                            <HeaderMenu>
                                <li>
                                    <Link to="/">Incio</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Perfil</Link>
                                </li>
                                <li>
                                    <Button
                                        small
                                        color="dark"
                                        onClick={handleSignOut}
                                    >
                                        Sair
                                    </Button>
                                </li>
                            </HeaderMenu>
                        )}
                    </div>
                </HeaderContent>
            </Container>
        </HeaderBar>
    );
};

export default Header;

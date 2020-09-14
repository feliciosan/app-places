import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;

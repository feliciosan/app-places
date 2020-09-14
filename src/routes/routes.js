import React from 'react';
import SignIn from '../pages/sign-in/sign-in';
import SignUp from '../pages/sign-up/sign-up';
import RecoverPassword from '../pages/recover-password/recover-password';
import Home from '../pages/home/home';
import Profile from '../pages/profile/profile';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from './routes-components/routes-private/routes-private';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/recover-password" component={RecoverPassword} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default AppRoutes;

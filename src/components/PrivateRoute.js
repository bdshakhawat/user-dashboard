// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { UserContext } from '../contexts/UserContext';

const PrivateRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const { currentUser, role } = useContext(UserContext);

    return (
        <Route {...rest} render={props => {
            return currentUser && allowedRoles.includes(role) ? 
                <Component {...props} /> : 
                <Redirect to="/login" />;
        }} />
    );
};

export default PrivateRoute;

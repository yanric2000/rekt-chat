import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAutenticated } from './services/auth';

const PrivatesRoutes = ( { component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        // Se estiver autenticado o component é renderizado com todas as props
        isAutenticated() ? (
            <Component {...props} />
        ) : (
            // Se estiver não autenticado o usuario é redirecionado e
            // o historico fica salvo no state
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    ) } />
);

export default PrivatesRoutes;
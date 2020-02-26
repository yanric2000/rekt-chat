import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Private from './pages/private';
import PrivatesRoutes from './privatesRoutes';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <Home/> } />
            <Route path="/login" component={ () => <Login/> } />
            <PrivatesRoutes path="/private" component={ () => <Private/> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
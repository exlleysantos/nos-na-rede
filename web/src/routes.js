import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cadastro from './pages/Cadastro';

function Routes(){
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/cadastro' component={Cadastro} />
        </Switch>
    );
}

export default Routes;
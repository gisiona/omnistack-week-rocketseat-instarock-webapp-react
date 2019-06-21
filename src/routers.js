import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        <Switch>
            <Route path="/" exaxt component={Feed}/>
            <Route path="/new" component={New}/>
        </Switch>
    );
}

export default Routes;
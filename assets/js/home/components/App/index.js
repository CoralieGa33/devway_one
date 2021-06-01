import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';


const App = () => {
    
    return (
        <Switch>
            <Route 
                exact
                path="/">
                <div>
                    <h1>Welcome here!</h1>           
                </div>
            </Route>
            <Route>
                <div>
                    <h1>Not found</h1>           
                </div>
            </Route>
        </Switch>
    );
};

App.propTypes = {
};

export default App;
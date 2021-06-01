import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import PropTypes from 'prop-types';

import Nav from '/assets/js/general/containers/Nav';
import Footer from '/assets/js/general/components/Footer';

const App = () => {
    
    return (
        <>
            <Nav />
            <Switch>
                <Route 
                    exact
                    path="/">
                    <div>
                        <h1>Page d&apos;accueil</h1>           
                    </div>
                </Route>
                <Route 
                    exact
                    path="/cv">
                    <div>
                        <h1>Page du CV</h1>           
                    </div>
                </Route>
                <Route 
                    exact
                    path="/realisations">
                    <div>
                        <h1>Page des réalisations</h1>           
                    </div>
                </Route>
                <Route>
                    <div>
                        <h1>Not found</h1>           
                    </div>
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

App.propTypes = {
};

export default App;
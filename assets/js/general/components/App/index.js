import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import PropTypes from 'prop-types';

import AppBackground from '/assets/js/general/components/Background';
import Nav from '/assets/js/general/containers/Nav';
import Footer from '/assets/js/general/components/Footer';
import NotFound from '/assets/js/general/components/NotFound';
import Home from '/assets/js/home/components/Home';
import Parcours from '/assets/js/parcours/components/Parcours';
import Realisations from '/assets/js/realisations/containers/Realisations';
import Contact from '/assets/js/contact/containers/Contact';
import Makealist from '/assets/js/mesrealisations/makealist/containers/Makealist';
import Todolist from '/assets/js/mesrealisations/todolist/containers/Todolist';

const App = () => {
    
    return (
        <>
            <AppBackground />
            <Nav />
            <Switch>
                <Route 
                    exact
                    path="/">
                    <Home />
                </Route>
                <Route 
                    exact
                    path="/parcours">
                    <Parcours />
                </Route>
                <Route 
                    exact
                    path="/realisations">
                    <Realisations />
                </Route>
                <Route 
                    exact
                    path="/make-a-list">
                    <Makealist />
                </Route>
                <Route 
                    exact
                    path="/todolist">
                    <Todolist />
                </Route>
                <Route 
                    exact
                    path="/contact">
                    <Contact />
                </Route>
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
};

App.propTypes = {
};

export default App;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Footer />
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
        </BrowserRouter>
    );
};

export default Routes;
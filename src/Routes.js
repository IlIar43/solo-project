import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Add from './components/Admin/Add';
import ProductContextProvider from './contexts/ProductsContext';
import Edit from './components/Admin/Edit';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp'
import AuthContextProvider from './contexts/AuthContext';
import ForgotPassword from './components/Auth/ForgotPassword'
import Favorites from './components/Favorites/Favorites';
import ProductDetail from './components/Product/ProductDetail'

const Routes = () => {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Footer />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path='/add' component={Add}/>
                            <Route exact path='/edit/:id' component={Edit} />
                            <Route exact path='/favorites' component={Favorites} />
                            <Route exact path="/detail/:id" component={ProductDetail}/>


                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup' component={SignUp} />
                            <Route exact path='/forgot-password' component={ForgotPassword} />
                            
                        </Switch>

                </BrowserRouter>
            </ProductContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;
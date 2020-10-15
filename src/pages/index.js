import React, { useEffect } from 'react';

import {Helmet} from 'react-helmet';
import {Router} from '@reach/router';
import netlifyIdentity from 'netlify-identity-widget';

import Layout from '../components/layout';
import Home from '../components/home';
//import PrivateRoute from '../components/private-route';
import {Login, SignUp} from '../components/login';


export default () => {

    useEffect(() => {
        netlifyIdentity.init();
    });

    return (
        <Layout>
            <Helmet>
                <title>Parserbase - parsing as a service</title>
            </Helmet>
            
    {/*             <PrivateRoute path="/" component={Home} /> */ }
                <button onClick={ () => netlifyIdentity.open() } >Log In </button>
            <Router>            
                <Login path="/login"  />
                <SignUp path="/signup" />
            </Router>
         </Layout>
    );
}
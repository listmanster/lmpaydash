import React, { useEffect, useContext } from 'react';

import {Helmet} from 'react-helmet';
import {Router} from '@reach/router';

import {IdentityContext } from '../../identity-context';

import Layout from '../components/layout';
import Home from '../components/home';
//import PrivateRoute from '../components/private-route';
import {Login, SignUp} from '../components/login';
import { navigate } from 'gatsby';



export default () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - parsing as a service</title>
            </Helmet>
            {navigate('/app', {replace: true})}
            
    {/*             <PrivateRoute path="/" component={Home} /> */ }
                <button onClick={ () => netlifyIdentity.open() } >Log In </button>
{/*             <Router>            
                <Login path="/login"  />
                <SignUp path="/signup" />
            </Router>
 */}         </Layout>
    );
} 
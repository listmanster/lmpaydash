import React, {useContext} from 'react';
import {Router, Link} from '@reach/router';
import {Helmet} from 'react-helmet';

import {IdentityContext } from '../../identity-context';
import PrivateRoute from '../components/private-route';

import Layout, { MainBody } from '../components/layout';




const Login = () =>  {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <div>
            <button onClick={() => netlifyIdentity.open("login")}>Log In</button>
        </div>
    );
}


const SignUp = () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <div>
            <button onClick={() => netlifyIdentity.open("signup")}>Sign Up</button>
        </div>
    );
}

const LoggedIn = () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <div>
            Logged in  as {user.user_metadata.full_name}
        </div>
    );
}


const LoggedOut = ({isLoggedIn}) => {
    console.log(" LOGGED OUT === ", isLoggedIn);
    if (isLoggedIn) {
        return null;
    } else {
        return (
            <>
            <Login />
            <SignUp />
            </>
        );
    } 

}


export default () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    const isLoggedIn = !!user;
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - parsing as a service</title>
            </Helmet>
            <MainBody title={isLoggedIn ? "Dashboard" : "Logged Out"}>
            <Router>
                <Login path="/app/login" />
                <SignUp path="/app/signup" />
                <PrivateRoute path="/app" component={LoggedIn} />
            </Router>
            <Router>
                <LoggedOut path="/app" isLoggedIn={isLoggedIn} />
            </Router>
            </MainBody>
        </Layout>
    );
}
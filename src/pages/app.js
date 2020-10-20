import React, {useContext, useState, useEffect} from 'react';
import {Router, Link} from '@reach/router';
import {Helmet} from 'react-helmet';

import {IdentityContext } from '../../identity-context';
import PrivateRoute from '../components/private-route';

import Layout, { MainBody } from '../components/layout';




const Login = () =>  {
    const { identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <button className="mx-auto lg:mx-2 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg" 
            onClick={() => netlifyIdentity.open("login")}>Log In</button>
    );
}


const SignUp = () => {
    const {identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <button className="mx-auto lg:mx-2 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg" 
            onClick={() => netlifyIdentity.open("signup")}>Sign Up</button>
    );
}

const LoggedIn = () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    const [token, setToken] = useState(false);

    useEffect( () => {
        const fetchToken = async () => {
            const token = user ? await netlifyIdentity.currentUser().jwt(true): false;
            setToken(token);
        }
        fetchToken();
    }, []);
    

    return (
        <div>
            <p>Logged in  as {user.user_metadata.full_name}</p>
            {
            token && (
                <p>Your key is: {token}  </p>
            )
            }
        </div>
    );
}


const LoggedOut = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return null;
    } else {
        return (
            <div className="flex-wrap">
                <Login />
                <SignUp />
            </div>
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
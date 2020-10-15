import React from 'react';
import {Helmet} from 'react-helmet';
import Layout, {MainBody} from '../components/layout';

export const Login = () => {
    return (
        <MainBody title="Log In">
            <h2>Login</h2>
        </MainBody>

    );
}


export default () => {
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - Login</title>
            </Helmet>
            <Login />
         </Layout>
    );
}
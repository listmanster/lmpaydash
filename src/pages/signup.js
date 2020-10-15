import React from 'react';
import {Helmet} from 'react-helmet';
import Layout, {MainBody} from '../components/layout';

export const SignUp = () => {
    return (
        <MainBody title="Log In">
            <h2>Sign Up</h2>
        </MainBody>

    );
}


export default () => {
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - Sign Up</title>
            </Helmet>
            <SignUp />
         </Layout>
    );
}
import React from 'react';
import Layout, { MainBody } from '../components/layout';
import {Helmet} from 'react-helmet';



export default () => (
    <Layout>
        <Helmet>
            <title>Parserbase - parsing as a service - Oops page not found!</title>
        </Helmet>
    <MainBody title="Page Not Found">
        <h1>The page you requested does not exist</h1>
    </MainBody>
    </Layout>
);


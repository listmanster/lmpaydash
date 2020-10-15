import React from 'react';

import {Helmet} from 'react-helmet';

import Layout from '../components/layout';
import Home from '../components/home';


export default () => {
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - parsing as a service</title>
            </Helmet>
            <Home />
         </Layout>
    );
}
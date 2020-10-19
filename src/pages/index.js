import React from 'react';

import {Helmet} from 'react-helmet';
//import {IdentityContext } from '../../identity-context';
import Layout from '../components/layout';
import { navigate } from 'gatsby';



export default () => {
    //const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - parsing as a service</title>
            </Helmet>
            {navigate('/app', {replace: true})}
        </Layout>
    );
} 
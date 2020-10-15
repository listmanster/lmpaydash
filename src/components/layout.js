import React, {useState} from 'react';

import { Router } from '@reach/router'

import Header from './header';
import Footer from './footer';



export const Layout = ({children}) => {


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
        <Router>
            <Header path="*" toggleMenu={toggleMenu} menuVisible={menuVisible} />
        </Router>
        <main>{children}</main>
        <Footer />
        </>
    )
};


export default Layout;

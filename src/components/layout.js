import React, {useState} from 'react';

import { Router } from '@reach/router'

import Header from './header';
import Footer from './footer';
//import { IdentityContextProvider } from 'react-netlify-identity';


export const MainBody = ({children, title}) => {
    return (
        <div className="text-center px-3 lg:px-0">
            <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">{title}</h1>
            {children}
        </div>
    )   ; 
}


export const Layout = ({children}) => {


    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
        <Router>
           {/*  <Header path="*" toggleMenu={toggleMenu} menuVisible={menuVisible} /> */}
        </Router>
        <main>{children}</main>
        <Footer />
        </>
    )
};


export default Layout;

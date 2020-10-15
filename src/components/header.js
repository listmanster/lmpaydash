import React, {useState} from 'react';
import { Router } from '@reach/router';
import { Link, navigate } from 'gatsby';

import logo from '../css/logo_horiz.png';

const HeaderLogo = ({location}) => {
    if (location.pathname === "" || location.pathname === "/") {
        return null;
    } 
    return (
    <div className="pl-4 flex items-center">
       <Link className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
        <img className="h-12 w-auto mr-3 mb-2 inline-block fill-current text-orange-700" id="logo_top"  src={logo} alt="ParserBase logo" />
       </Link>
    </div>);

}




const Header = ({toggleMenu, location, menuVisible}) => {
    return (
    <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-2 shadow-md">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-2">
            <HeaderLogo location={location} />
            <div className="block lg:hidden pr-4">
            <button id="nav-toggle" onClick={toggleMenu} 
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
            </div>

            <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20 ${menuVisible ? "": "hidden"}`} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                <Link className="inline-block py-2 px-4 text-black font-bold no-underline" to="/pricing">Pricing</Link>
                </li>
                <li className="mr-3">
                <Link className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/docs">Docs</Link>
                </li>
                <li className="mr-3">
                     <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="https://site.com/login">Login</a>
                </li>
                <li className="mr-3">
            <button id="navAction" onClick={()=> navigate('/try', {replace: true})} className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            Try
            </button>
            </li>        
            </ul>
            
            </div>
        </div>
    </nav>        
    );
}

export default Header; 
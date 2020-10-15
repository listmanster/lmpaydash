import React from 'react';
import logo from '../css/logo_text.png';

const Footer = () => {
return (<footer className="bg-white ">
      <div className="text-center">
            <ul className="list-reset mb-6">
              <li className="inline-block text-center px-4 py-2 m-2">
              <img className="h-12 w-auto mr-3 mb-2 inline-block"  src={logo} alt="ParserBase logo" />
              </li>
              <li className="inline-block text-center px-4 py-2 m-2">
                <a href="#" className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Policies</a>
              </li>
              <li className="inline-block text-center px-4 py-2 m-2">
                <a href="#" className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">About</a>
              </li>
              <li className="inline-block text-center px-4 py-2 m-2">
                <a href="#" className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Support</a>
              </li>
            </ul>
      </div>
    </footer>    
);
}

export default Footer; 
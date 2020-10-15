import React, {useState} from 'react';
/*
import {useIdentityContext} from 'react-netlify-identity'; 
import IdentityModal from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
*/
import {MainBody} from '../components/layout';
import {authName} from '../utils/auth';



export default () => {

/* 
    const identity = useIdentityContext();
    const [isVisible, setVisibility] = useState(false);
    const showModal = () => setVisibility(true);
    const hideModal = () => setVisibility(false);
    const isLoggedIn = identity && identity.isLoggedIn;
    const loggedInName = isLoggedIn?  authName(identity): ""; */


    return (
        <MainBody title="Dashboard">
        {
/*          isLoggedIn ? ( 
            <>
            <button id="navAction" onClick={()=> showModal()} className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            Log out
            </button>
            </> ) : (
            <>
            <button id="navAction" onClick={()=> showModal()} className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
                Log In
             </button>
            </>
           )
 */        }
      {/*   <IdentityModal
          showDialog={isVisible}
          onCloseDialog={() => hideModal()}
          onLogin={(user) => console.log('hello ', user?.user_metadata)}
          onSignup={(user) => console.log('welcome ', user?.user_metadata)}
          onLogout={() => console.log('bye ')}
        />  
 */}
            <h2>Logged In Home</h2>

        </MainBody>
    );
}
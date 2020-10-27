import React, {useContext, useState, useEffect} from 'react';

import {Router, Link} from '@reach/router';
import {Helmet} from 'react-helmet';

import {IdentityContext } from '../../identity-context';
import PrivateRoute from '../components/private-route';

import Layout, { MainBody } from '../components/layout';
import axios from 'axios';
import { secureQuery } from '../utils/auth';




const Login = () =>  {
    const { identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <button className="mx-auto lg:mx-2 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg" 
            onClick={() => netlifyIdentity.open("login")}>Log In</button>
    );
}


const SignUp = () => {
    const {identity: netlifyIdentity} = useContext(IdentityContext);
    return (
        <button className="mx-auto lg:mx-2 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg" 
            onClick={() => netlifyIdentity.open("signup")}>Sign Up</button>
    );
}

const LoggedIn = () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    
    const [authUser, setAuthuser] = useState(false);
    const [authEmail, setAuthEmail] = useState(false);
    const [authToken, setAuthToken] = useState(false);
    const [userRegisted, setUserRegistered] = useState(false);

    //const [token, setToken] = useState(false);

    useEffect( () => {
        //const fetchToken = async () => {
        //    const token = user ? await netlifyIdentity.currentUser().jwt(true): false;
        //    setToken(token);
        //};

        const fetchUserInfo = async () => {
            const data = await secureQuery(netlifyIdentity, '/api/userDetails', {})
            return data;  
        };

        const registerUser = async () => {
            const data = await secureQuery
        }

        const fetchUserData = async () => {
            console.log( " USER X === ", user);
            const userId = user ? user.id : false;
            const userEmail = user ? user.email: false ; 
            setAuthuser(userId);
            setAuthEmail(userEmail) ;
            const userInfoData = await fetchUserInfo();
            const extendedData = userInfoData.data.findUserInfoByAuthUser.data;
            const isUserRegistered = extendedData.length > 0  ; 
            if (isUserRegistered) {
                setAuthToken(extendedData[0].authToken);
                setUserRegistered(true);
            } else {
                setUserRegistered(false);
            }
        };
        
        fetchUserData();

    }, []);
    

    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">xGETTING STARTED</p>
                        <div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                        </p>
                    </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="flex items-center justify-start">
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
                    </div>
                </div>
		    </div>            

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
			<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
				<a href="#" className="flex flex-wrap no-underline hover:no-underline">
					<p className="w-full text-gray-600 text-xs md:text-sm px-6">xGETTING STARTED</p>
					<div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
					<p className="text-gray-800 text-base px-6 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
					</p>
				</a>
			</div>
			<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div className="flex items-center justify-center">
					<button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
				</div>
			</div>
		</div>
        </div>
        </section>
    );
}


const LoggedOut = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return null;
    } else {
        return (
            <div className="flex-wrap">
                <Login />
                <SignUp />
            </div>
        );
    } 

}


export default () => {
    const {user, identity: netlifyIdentity} = useContext(IdentityContext);
    const isLoggedIn = !!user;
    return (
        <Layout>
            <Helmet>
                <title>Parserbase - parsing as a service</title>
            </Helmet>
            <MainBody title={isLoggedIn ? "Dashboard" : "Logged Out"}>
            <Router>
                <Login path="/app/login" />
                <SignUp path="/app/signup" />
                <PrivateRoute path="/app" component={LoggedIn} />
            </Router>
            <Router>
                <LoggedOut path="/app" isLoggedIn={isLoggedIn} />
            </Router>
            </MainBody>
        </Layout>
    );
}
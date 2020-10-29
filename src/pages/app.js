import React, {useContext, useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import LoadingMask from "react-loadingmask";
import 'react-toastify/dist/ReactToastify.css';
import "react-loadingmask/dist/react-loadingmask.css";

import {Router, Link} from '@reach/router';
import {Helmet} from 'react-helmet';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import {IdentityContext } from '../../identity-context';

import PrivateRoute from '../components/private-route';

import Layout, { MainBody } from '../components/layout';
import { authToken, secureQuery } from '../utils/auth';


const LoadingSpinner = ({loading, children}) => {
   
    if (loading) {
        return (
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
            </div>
        </div>
        </div>
        );
    } else {
        return (
            <>
             {children}
            </>
        );
    }
}

const DashboardBox = ({title, subTitle, children}) => {


    return (
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">{title}</p>
                    <div className="w-full font-bold text-xl text-gray-800 px-6">{subTitle}</div>
                    <div className="text-gray-800 text-base px-6 mb-5">
                        {children}
                    </div>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
                </div>
            </div>
        </div>
    );
}


const formatDate = (date) => {
    const dt = new Date(date);
    return dt.toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'utc'
        }
    );
}

const deleteToken =  async (netlifyIdentity, _id, token) => {
    const data = await secureQuery(netlifyIdentity, '/api/deleteToken', {id: _id, token: token})
    
    return data;  
    
};



const Tokens = ({authTokens}) => {
    const { identity: netlifyIdentity} = useContext(IdentityContext);

    return (
    <table className="mt-6 mb-8 table-auto w-full border-none mx-auto text-lg">
        <thead>
            <tr className="border-b">
                <th className="px-1 py-1 text-gray-800 text-left">Name</th>
                <th className="px-1 py-1 text-gray-800 text-left"></th>
                <th className="px-1 py-1 text-gray-800 text-left">Date</th>
                <th className="px-1 py-1"></th>
            </tr>
        </thead>
        <tbody>
            {
                authTokens.map( authToken => {
                    const {name, updated, token, _id}  = authToken;
                    return (
                        <tr className="border-b mouse:hover:bg-yellow-200 h-8" key={`row-${_id}`}>
                        <td className="px-1 font-light text-left">{name}</td>
                        <td className="px-1 font-light text-left">
                        <div className="font-normal text-sm cursor-pointer text-yellow-700">
                            <CopyToClipboard text={token}>
                             <button onClick={ evt=> toast("Token copied to clipboard")} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center">
                             <svg class="w-4 h-4 mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/></svg>
                                Copy Token
                             </button>
                             </CopyToClipboard>
                            </div>
                        </td>
                        <td className="px-1 font-light text-left">{formatDate(updated)}</td>
                        <td className="px-1 font-light text-center">
                            <div className="font-normal text-sm cursor-pointer text-yellow-700">
                                <button onClick={ evt=> deleteToken(netlifyIdentity, _id, token)}  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center">
                                <svg  class="w-4 h-4 mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12 2h8v2h-8zM6 5v5h1v20h18V10h1V5H6zm17 23H9V12h14v16z"/><path d="M11 14h1v12h-1zm3 0h1v12h-1zm3 0h1v12h-1zm3 0h1v12h-1z"/></svg>
                                Delete Token
                                </button>
                           {/*      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                            */} </div>
                        </td>
                    </tr>
                    );
                })
            }
        </tbody>
    </table>
    );
}

const Token =  ({authToken}) =>(
    <div>
    <p>{authToken.name}</p>
    <p>{authToken.token} </p>
    <p>{authToken.updated}</p>
    </div>
) ;

const ServiceInfoBox = ({authTokens}) => {

    const loading = authTokens.length === 0 ;

    return (
        <DashboardBox title="Service Information" subTitle="Access Token" >
           <LoadingSpinner loading={loading}>
            <>
            <Tokens authTokens={authTokens} />
            </>
           </LoadingSpinner>
{/*                  <CopyToClipboard text={authToken}
                 onCopy={() => toast("Copied Access token to clipboard")}>
                 <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Copy to clipboard</button>
               </CopyToClipboard>                    
 */            }
        </DashboardBox>
    ) ;
}


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
    
    const [userData, setUserData] = useState(false);
    
    /*
    const [authUser, setAuthuser] = useState(false);
    const [authEmail, setAuthEmail] = useState(false);
    const [userRecordId, setUserRecordId] = useState(false);
    const [userPlan, setUserPlan] = useState(false);
    const [authTokens, setAuthTokens] = useState([]);
    */

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
            const data = await secureQuery(netlifyIdentity, '/api/newAccessToken', {});
            return data;
        }

        const fetchUserData = async () => {
            const userId = user ? user.id : false;
            const userEmail = user ? user.email: false ; 
            //setAuthuser(userId);
            //setAuthEmail(userEmail) ;
            const userInfoData = await fetchUserInfo();
            const extendedData = userInfoData.data.findUser.data;
            const isUserRegistered = extendedData.length > 0  ; 
            
            if (isUserRegistered) {
                
                const userData = extendedData[0];
                const {_id, userPlan} = userData; 
                
                setUserData({
                    userId: _id,
                    userPlan: userPlan,
                    tokens: extendedData[0].tokens.data
                });
                /*
                setUserRecordId(_id);
                setUserPlan(userPlan);
                setAuthTokens(extendedData[0].tokens.data);
                */
            } else {
                
                const respData= await registerUser();
                const userData = respData.data.createUser;
                const {_id, userPlan, tokens} = userData; 

                setUserData({
                    userId: _id,
                    userPlan: userPlan,
                    tokens: tokens.data
                });

                /*
                setUserRecordId(_id);
                setUserPlan(userPlan);
                setAuthTokens(tokens.data);
                */

                console.log(" REG DATA = ", respData);

            }
        };
        
        fetchUserData();

    }, [JSON.stringify(userData)]);
    

    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              
            <ServiceInfoBox authTokens={userData.tokens? userData.tokens: []} />      
     {/*        <DashboardBox title="Service Information" subTitle="Access Token" >
            {!authToken ? 
                 <p>Loading...</p>: 
                 <CopyToClipboard text={authToken}
                 onCopy={() => toast("Copied Access token to clipboard")}>
                 <button>Copy to clipboard with button</button>
               </CopyToClipboard>                    
            }
        </DashboardBox> */}
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
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Layout>
    );
}
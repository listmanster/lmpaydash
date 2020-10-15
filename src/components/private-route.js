import React, {useContext} from 'react';
import { navigate } from 'gatsby';
import {IdentityContext} from '../../identity-context';


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  
  const {user} = useContext(IdentityContext);
  const isLoggedIn = !!user;

  console.log( " PRIVATE ROUTE == ", user, isLoggedIn);

  if ( !isLoggedIn && location.pathname !== '/app/login') {
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
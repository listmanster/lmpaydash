import React from 'react';
import { navigate } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity-widget';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  
  const identity = useIdentityContext();

  if (
    (!identity || !identity.isLoggedIn) &&
    location.pathname !== '/login'
  ) {
    navigate('/login', { replace: true });
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

export const authName = (identity) => {
    return (
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name
    )  ;
}


export const authToken = ( netlifyIdentity ) => {
    const { access_token } = netlifyIdentity.currentUser().token;
    return access_token;
};


export const secureQuery = async (netlifyIdentity, url, params) => {
   const accessToken = authToken(netlifyIdentity);
   const response = await fetch( url, {
       method: 'POST',
       headers: {
           Authorization: `Bearer ${accessToken}`
       },
       body: JSON.stringify(params)
   });
   const data = await response.json();
   return data; 

}



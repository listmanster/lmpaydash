

/* 
const fetchUserInfo = async () => {
  const data = await secureQuery(netlifyIdentity, '/api/userDetails', {})
  return data;  
};



const fetchUserData = async (userId, userEmail) => {
  const userInfoData = await fetchUserInfo(userId, userEmail);
  const extendedData = userInfoData.data.findUserInfoByAuthUser.data;
  const isUserRegistered = extendedData.length > 0  ; 
  if (isUserRegistered) {
      setAuthToken(extendedData[0].authToken);
      setUserRegistered(true);
  } else {
      setUserRegistered(false);
  }
};
 */
exports.handler = async function(event, context, callback) {
    const data = JSON.parse(event.body);
    const { user } = data;
    const {email, id} = user ; 
      
    const responseBody = {
      app_metadata: {
        ...user.app_metadata
      },
      user_metadata: {
        ...user.user_metadata, // append current user metadata
        special: JSON.stringify(Object.getOwnPropertyNames(data))//String(email) + "~" + String(id)
      }
    };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    });
  };
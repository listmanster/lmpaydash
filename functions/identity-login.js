const sendQuery = require('./utils/sendquery');
const queries = require("./utils/queries");

const GET_USER_INFO = queries.GET_USER_INFO;



/* const fetchUserInfo = async () => {
  const data = await secureQuery(netlifyIdentity, '/api/userDetails', {})
  return data;  
};



const fetchUserData = async (userId, userEmail) => {
  const userInfoData = await fetchUserInfo(userId, userEmail);
  const extendedData = userInfoData.data.findUserInfoByAuthUser.data;
  const isUserRegistered = extendedData.length > 0  ; 
  return isUserRegistered;
}; */
 
exports.handler = async function(event, context, callback) {
    const data = JSON.parse(event.body);
    const { user } = data;
    const {clientContext, identity} = context;
    const { user: clientUser } = clientContext; 
    const {email, id, token} = user ; 

    //const registered = await fetchUserData(id, email);
      
    const responseBody = {
      app_metadata: {
        ...user.app_metadata
      },
      user_metadata: {
        ...user.user_metadata, // append current user metadata
        special: email + "~" + token ,
        special3: JSON.stringify(Object.getOwnPropertyNames(user))
      }
    };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    });
  };
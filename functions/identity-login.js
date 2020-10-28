const sendQuery = require('./utils/sendquery');
const queries = require("./utils/queries");
const jwtutils = require("./utils/jwtutils");

const GET_USER_INFO = queries.GET_USER_INFO;

/*
authUser
authToken
authEmail
updated
tokenDate
publicKey
*/


const fetchUserInfo = async (authUser, authEmail) => {
    const userData = await sendQuery(GET_USER_INFO,  { authUser });
    return userData;
};


const generateKeyPair = async (authUser, authEmail) => {
  const keys = await jwtutils.createKeyPair();
  return keys;
};


/*
      $authUser: String!, 
      $authEmail: String!,
      $publicKey: Striing!,
      $privateKey: String!,
      $authToken: String!,
      $tokenDate: Time!, 
      $updated: Time!
*/

const processUser = async (authUser, authEmail, privateKey ) => {
  const keys = await jwtutils.createKeyPair();
  const authToken = await jwtutils.createJWT(authUser, privateKey );



};


const createExtendedData = async () => {

}


/*
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
    const token = clientContext.identity.token;

    const {email, id} = user ; 
    var extendedUserData = {}
    const userData = await fetchUserInfo(id, email);
    const extendedData = userData.data.findUserInfoByAuthUser.data;
    if (extendedData.length > 0) {
      
      // getExtendedData and update in Netlify Identity
      const {authToken, updated, tokenDate, publicKey} = extendedData[0];
      
      extendedUserData = {
        authToken: authToken, 
        updated: updated,
        tokenDate: tokenDate,
        publicKey: publicKey
      };

    } else {
      // create Extended data and update in netlify Identity
      const {privateKey, publicKey} = await generateKeyPair();
      const authUser = id;
      const authEmail = email; 


    } 

    //const registered = await fetchUserData(id, email);
      
    const responseBody = {
      app_metadata: {
        ...user.app_metadata
      },
      user_metadata: {
        ...user.user_metadata, // append current user metadata
      }
    };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    });
  };
const { isoUTCDate } = require('./utils/dates');
const jwtutils = require('./utils/jwtutils');
const sendQuery = require('./utils/sendquery');

const CREATE_USER_INFO = `
    mutation (
        $authUser: String!, 
        $authEmail: String!,
        $publicKey: String!,
        $privateKey: String!,
        $authToken: String!,
        $tokenDate: Time!, 
        $updated: Time!
    ) {
        createUserInfo (
            data:{ 
            authUser: $authUser ,
            authEmail: $authEmail,
            publicKey: $publicKey, 
            privateKey: $privateKey, 
            authToken: $authToken,
            tokenDate: $tokenDate,
            updated: $updated
            }
        ) {
        _id
        authUser
        authEmail
        authToken
        tokenDate
        updated
        }
    }
`;



const registerUser = async (authUser, authEmail) => {

    const keys = await jwtutils.createKeyPair();
    const {privateKey , publicKey } = keys;
    const authToken = await jwtutils.createJWT(authUser, privateKey );
    const updated = isoUTCDate();
    const tokenDate = updated; 

    return {
        authUser,
        authEmail,
        publicKey, 
        privateKey, 
        authToken,
        tokenDate, 
        updated
    };
}

exports.handler = async function(event, context) {

    //const paramsReq =  requirexParams(event, context);
    const { user } = context.clientContext;
    const isLoggedIn = user && user.app_metadata && user.app_metadata;

    if (!isLoggedIn) {
        return {
          statusCode: 401,
          body: 'Unauthorized',
        };
    }else {
        const { email: authEmail, sub:authUser } = user; 

        const params =  await registerUser(authUser, authEmail);
        const userData = await sendQuery(CREATE_USER_INFO,  params);
        
        return {
            statusCode: 200,
            body: JSON.stringify(userData)
        };
    }

}


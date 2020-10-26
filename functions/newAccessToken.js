const jwtutils = require('./utils/jwtutils');
const sendQuery = require('./utils/sendquery');

const CREATE_USER_INFO = `
    mutation (
        $authUser: String!, 
        $authEmail: String!,
        $publicKey: Striing!,
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
        publicKey
        privateKey
        authToken,
        tokenDate,
        updated
        }
    }
`;


exports.handler = async function(event, context) {

    //const paramsReq =  requirexParams(event, context);
    const {identity, user} = context.clientContext ;
    const isLoggedIn = user && user.app_metadata && user.app_metadata.roles;
    const roles = isLoggedIn ? user.app_metadata.roles : [];

    if (!isLoggedIn || !roles.includes('admin')) {
        return {
          statusCode: 401,
          body: 'Unauthorized',
        };
    }else {
        //const {document, outputFormats, name} = paramsReq;
        //const parsed = await parseDocument(document, name, outputFormats);
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        };
    }
    

    /*
    if (paramsReq.statusCode) {
        // error code
        return paramsReq;
    } else {
        
        const {document, outputFormats, name} = paramsReq;
        //const parsed = await parseDocument(document, name, outputFormats);
        return {
            statusCode: 200,
            body: JSON.stringify(paramsReq)
        };
    }*/
}


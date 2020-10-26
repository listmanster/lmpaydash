const jwtutils = require('./utils/jwtutils');
const sendQuery = require('./utils/sendquery');

const GET_USER_INFO = `
    query {
        findUserInfoByAuthUser(authUser:$authUser) {
        data {
            authUser
            authEmail
            authToken
        }
        }
      }`
    ;


exports.handler = async function(event, context) {

    //const paramsReq =  requireParams(event, context);
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


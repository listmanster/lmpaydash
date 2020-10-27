const jwtutils = require('./utils/jwtutils');
const sendQuery = require('./utils/sendquery');
const queries = require("./utils/queries");

const GET_USER_INFO = queries.GET_USER_INFO;
    ;


exports.handler = async function(event, context) {

    //const paramsReq =  requireParams(event, context);
    const { user } = context.clientContext;
    const isLoggedIn = user && user.app_metadata && user.app_metadata;
    ///const roles = isLoggedIn ? user.app_metadata.roles : [];

    console.log( " USER ", isLoggedIn, user);

    if (!isLoggedIn /* || !roles.includes('admin') */) {
        return {
          statusCode: 401,
          body: 'Unauthorized',
        };
    }else {

        const { email, sub } = user; 
        const authUser =  sub;
        const userData = await sendQuery(GET_USER_INFO,  { authUser });
        return {
            statusCode: 200,
            body: JSON.stringify(userData)
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


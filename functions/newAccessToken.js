const { generateToken } = require('./utils/crypto');
const { isoUTCDate } = require('./utils/dates');
const queries = require("./utils/queries");
const sendQuery = require('./utils/sendquery');

const ADD_USER_INFO = queries.ADD_USER_INFO;

/*
    mutation CreateUser($authuser: String!, $userPlan: String!, $updated: Time!, $tokens: [Token!]!) {
        createUser(data: {
        authUser: $authUser,
        userPlan: $userPlan,
        updated: $updated,
        tokens: {
            create: $tokens
        }
        }){
        _id
        authUser
        userPlan
        updated
        tokens{
            data{
             token
            }
        }
        }
    }


       { name:"label 2",
          token:"user2_tok1",
          updated:"2020-10-11T00:00:00Z",
        }    

*/


const registerUserParams = async (authUser) => {

    const updated = isoUTCDate();
    const userPlan = "trial";
    const token = await generateToken();
    const tokens = [
        {
            name: "default",
            token: token,
            updated: updated
        }
    ];

    return {
        authUser,
        userPlan,
        updated,
        tokens
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
        const { sub:authUser } = user; 
        const token = await generateToken();
        const params =  await registerUserParams(authUser);
        console.log(" REGISTER_USER_PARAMS = ", params );
        const userData = await sendQuery(ADD_USER_INFO,  params);
        
        return {
            statusCode: 200,
            body: JSON.stringify(userData)
        };
    }

}


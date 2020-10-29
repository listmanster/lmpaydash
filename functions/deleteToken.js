const { generateToken } = require('./utils/crypto');
const { isoUTCDate } = require('./utils/dates');
const queries = require("./utils/queries");
const sendQuery = require('./utils/sendquery');

const DELETE_TOKEN = queries.DELETE_TOKEN;
const GET_USER_INFO = queries.GET_USER_INFO;


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
        const {token, id} = JSON.parse(event.body);
        const { sub:authUser } = user; 
        //get the user data
        const userData = await sendQuery(GET_USER_INFO, {authUser} );
        // find the token in the data
         if (userData.data.findUser.data.length > 0) {
            const theUser = userData.data.findUser.data[0];
            
            const {tokens} = theUser;
            const found = tokens.data.filter( item => item.token === token && item._id === id)
            if (found.length > 0) {
                // we can delete the token
                const deleteData = await sendQuery(DELETE_TOKEN, {id})
                return {
                    statusCode: 200,
                    body: JSON.stringify({action: "deleted", deleteData: deleteData})
                };
    
            } else {
                return {
                    statusCode: 200,
                    body: JSON.stringify({action: "deleteFailed"})
                };

            }

        }
    
 
        /*
        const token = await generateToken();
        const params =  await registerUserParams(authUser);
        console.log(" REGISTER_USER_PARAMS = ", params );
        const userData = await sendQuery(ADD_USER_INFO,  params);
        */
        return {
            statusCode: 200,
            body: JSON.stringify(userData)
        };
    }

}


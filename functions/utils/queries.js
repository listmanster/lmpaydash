
const GET_USER_INFO =`
    query FindUser ($authUser: String!) {
        findUser(authUser: $authUser) {
        data {
            _id
            authUser
            userPlan
            updated
            tokens {
                data {
                    _id
                    token
                    name
                    updated
                }
            }
        }
    }
  }`
;


const ADD_USER_INFO = `
    mutation CreateUser($authUser: String!, $userPlan: String!, $updated: Time!, $tokens: [TokenInput]!) {
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
             _id
             token
             name
             updated
            }
        }
        }
    }
`;


const DELETE_TOKEN = `
    mutation DeleteToken($id: ID!) {
        deleteToken(id: $id) {
        _id
        }
    }
`;



module.exports = {
    GET_USER_INFO: GET_USER_INFO,
    ADD_USER_INFO: ADD_USER_INFO,
    DELETE_TOKEN: DELETE_TOKEN
};
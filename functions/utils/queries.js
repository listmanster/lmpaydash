
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
                }
            }
        }
    }
  }`
;


const ADD_USER_INFO = `
    mutation CreateUser($authUser: String!, $userPlan: String!, $updated: Time!, $tokens: [Token!]!) {
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
`;



module.exports = {
    GET_USER_INFO: GET_USER_INFO,
    ADD_USER_INFO: ADD_USER_INFO
};
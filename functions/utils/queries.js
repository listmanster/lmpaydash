
const GET_USER_INFO =`
    query findUserInfo ($authUser: String!) {
        findUserInfoByAuthUser(authUser: $authUser) {
        data {
            authUser
            authToken
            authEmail
            updated
            tokenDate
            publicKey
        }
    }
  }`
;


const ADD_USER_INFO = `
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



module.exports = {
    GET_USER_INFO: GET_USER_INFO,
    ADD_USER_INFO: ADD_USER_INFO
};
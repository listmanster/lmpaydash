
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



module.exports = {
    GET_USER_INFO: GET_USER_INFO
};
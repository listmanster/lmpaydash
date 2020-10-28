
const GET_USER_INFO =`
    query FindUser ($authUser: String!) {
        findUser(authUser: $authUser) {
        data {
            _id
            authUser
            userPlan
            updated
            tokens {
                datas {
                    _id
                    token
                }
            }
        }
    }
  }`
;


const ADD_USER_INFO = `
    mutation (
        $authUser: String!,
        $userPlan: String!,
        $updated: Time!,
        $tokens: [Token!]!

    ) {
        createUser(
            data: {
                authUser: "user2",
                userPlan: "trial",
                updated:"2020-10-11T00:00:00Z",
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
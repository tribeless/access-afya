import gql from 'graphql-tag';

export const SIGNIN_MUTATION = gql `
    mutation signIn($email:String!,$password:String!){
        signIn(email:$email,password:$password){
            status
            id
        }
    }

`;

export const SIGN_OUT =gql `
    mutation signOut{
        signOut{
            status
            message
        }
    }
`

import gql from "graphql-tag";

export const GET_USER = gql `
    query{
        usersDetails {
            email
            firstName
            lastName
        }
    }
`;
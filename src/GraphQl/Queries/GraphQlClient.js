import gql from "graphql-tag";

export const GraphqlClient = gql `
query{
    recordId @client
}
    
`
import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
    mutation Mutation($email: String!, $password: String!, $username: String!) {
        register(email: $email, password: $password, username: $username) {
            token
            
        }
    }
`; 
export const LOGIN_MUTATION = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to connect to the Apollo Server
const httpLink = createHttpLink({
    uri: 'http://localhost:4001/api', // Update this URL if your server runs on a different port or path
});

// Set up the authentication link to include the JWT token in the headers
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    };
});

// Create the Apollo Client instance
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

// Export the ApolloProvider to wrap your application
export { client, ApolloProvider };

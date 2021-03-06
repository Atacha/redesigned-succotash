import { ApolloClient, InMemoryCache } from "@apollo/client";
import {endpoint} from './config'

const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
});

export default client;
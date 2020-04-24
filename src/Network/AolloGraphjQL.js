import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

import { ApolloLink } from 'apollo-link';
// import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {awsCreds} from "./appsync";

const url = awsCreds().graphqlEndpoint;
const region = awsCreds().region;
const auth = {
  type: awsCreds().authenticationType,
  apiKey: awsCreds().apiKey,
};

// const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth })
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
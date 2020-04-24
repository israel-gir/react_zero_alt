// import AWSAppSyncClient from "aws-appsync";
// import {awsCreds} from "./appsync";
//
// const graphQLClient = new AWSAppSyncClient({
//   url:   awsCreds().graphqlEndpoint,
//   region: awsCreds().region,
//   auth: {
//     type: awsCreds().authenticationType,
//     apiKey: awsCreds().apiKey,
//   }
// });
//
// export default graphQLClient;


// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
//
// const httpLink = createHttpLink({
//   uri: appSyncConfig.graphqlEndpoint,
// });
//
// const awsLink = createAppSyncLink({
//   url: appSyncConfig.graphqlEndpoint,
//   region: appSyncConfig.region,
//   auth: {
//     type: appSyncConfig.authenticationType,
//     apiKey: appSyncConfig.apiKey,
//   },
// })
//
// export default new ApolloClient({
//   link: awsLink.concat(httpLink),
//
//   cache: new InMemoryCache()
// });
//

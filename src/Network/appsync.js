import ApolloClient from 'apollo-boost';

export const awsCreds = () => {
  return {
  "graphqlEndpoint": "https://efvg3mt46zg47hwy4qh66h7j5e.appsync-api.us-east-1.amazonaws.com/graphql",
  "region": "us-east-1",
  "authenticationType": "API_KEY",
  "apiKey": "da2-7bvepoom6zd7xlr7yoystouoxu"
  }
}


// export const clientGQL = new ApolloClient({
//
//   uri : 'https://efvg3mt46zg47hwy4qh66h7j5e.appsync-api.us-east-1.amazonaws.com/graphql',
//   headers : {
//     'x-api-key'     : 'da2-osser7q6zfhrlcpuib7rhupfwy',
//     'Content-Type'  : 'application/json',
//     'Accept-Language': 'en-US,en;q=0.9,es-419;q=0.8,es;q=0.7'
//   }
//
// });
// //

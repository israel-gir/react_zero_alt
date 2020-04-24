import gql from 'graphql-tag';

// export default gql`
//     mutation sendPost ($session:String $command: String $context:String, $payload:String) {
//         message( session: $session, command:$command, context:$context, payload:$payload) {
//             session
//             command
//             context
//             payload
//         }
//     }`

export default gql`
mutation message($command:String $sid:String! $payload:String $context:String ) {
   new_message : message( sid:$sid command:$command payload:$payload context:$context ) {
          __typename
        }
    }`;
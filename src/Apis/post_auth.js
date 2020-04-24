import gql from "graphql-tag";

export default gql`
    mutation passwordless($command:String!, $data:String) {
        app_authenticate : passwordless( command:$command data:$data ) {
            __typename
            sid
            data
        }
   }
`;
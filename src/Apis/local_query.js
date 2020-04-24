import gql from 'graphql-tag';
// this is a local model
export default gql`
    query messageReceived {
        messageReceived{
            session
            payload
        }
    }`

/**


import gql from 'graphql-tag';
// this is a local model
export default gql`
query queueMessage {
       queueMessage{
           message
       }
    }`

 */



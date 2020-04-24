import gql from 'graphql-tag'

// export default gql`
//     subscription AuthSub {
//         notifications(session:"123") {
//             session
//             context
//             payload
//         }
//     }`;

export default gql`subscription notifications ($sid:String!) {
    notifications(sid:$sid) {
        sid
        command
        context
        payload
    }
}
`;
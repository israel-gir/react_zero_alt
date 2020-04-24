import gql from 'graphql-tag'

// export default gql`
//     mutation demo_function($funcName:String!, $data:String!) {
//         testfunc(function:$funcName, data:$data) {
//             data
//             qrdata
//             status
//             {
//                 code
//                 description
//                 debug_info
//             }
//         }
//     }`

export default gql`
    mutation passwordless($command:String!) {
        passwordless( command:$command ) {
            sid
            QRbase64
        }
    }`;
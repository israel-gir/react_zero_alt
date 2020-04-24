import React, {useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
// import {ThemeProvider} from "styled-components";
// import GlobalStyle, {theme} from "../Styles/globalStyle";
// import Typography from "@material-ui/core/Typography";
// import styled from "styled-components";
// import SubscriptionArea from "./SubscriptionArea";
// import PostMessageArea from "./PostMessageArea";
// import MessageArea from "./000_Elements/MessageArea";
// import ReduxArea from "./000_Elements/ReduxMessageTrigger";

// class App extends React.Component {
//
//
//   render() {
//     return (
//         <ThemeProvider theme={theme}>
//           <div>
//             <ReduxArea/>
//             <br/>
//             <PostMessageArea/>
//             <StyledTypography>Messenger Send</StyledTypography>
//             <SubscriptionArea/>
//             <br/>
//             <MessageArea/>
//             <hr/>
//           </div>
//           <GlobalStyle/>
//         </ThemeProvider>
//     );
//   }
// }

const App = () => {

    const history   = useHistory();
    const [ cookie ]= useCookies(['sid']);

    useEffect(() => {
        setTimeout(() =>{
            dashboard();
        },100);
    },[]);

    const dashboard = () =>{
        if(cookie.sid)
            history.push('/react_zero_alt/dashboard');
        else
            history.push('/react_zero_alt/login');
    };

    return(
        <div>
        </div>
    );

};

export default App;
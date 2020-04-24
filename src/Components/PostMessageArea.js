import React, {useCallback, useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import PostMessage from '../Apis/post_acme'
import GetSessiom from '../Apis/getSessionDemo'

import {useDispatch} from "react-redux";
import local_query from "../Apis/local_query";
import acme_sub from "../Apis/acme_sub";

const PostMessageArea = () => {

    let state       = {};
    let history     = useHistory();
    const [ dataCookie, setDataCookie ] = useState({});

    const [postMessage]   = useMutation(PostMessage);
    const [getSession]    = useMutation(GetSessiom);
    const [ cookie, setCookie]      = useCookies(['session','token']);
    const [qrString, setQrString]   = useState("");

    const { subscribeToMore, ...result } = useQuery( local_query );

    useEffect(() => {
        getSessionDown();
    },[setDataCookie, setQrString]);

    const manifestMessage = (prev, { subscriptionData : { data : {notifications} } }) => {
        console.log('payload',notifications.payload);
    };

    const subscriber = () => {
        subscribeToMore({
            document: acme_sub,
            updateQuery: manifestMessage
        });
    };

    const buttonDown = async () => {
        try {
            const response = await postMessage({
                variables: {
                    command: "Send Message",
                    payload: state['messageInput'] ? state['messageInput'] : "Empty Message",
                    context: "some context",
                    session: state['sessionInput'] ? state['sessionInput'] : "123"
                }
            });

            if( response.data.message.session === dataCookie.session ) {
                setCookie('token', cookie.token, {path: '/'});
                setCookie('session', cookie.session, {path: '/'});
                history.push('/dashboard');
            }

        } catch (error) {
          console.log(error);
        }
    };

    const getSessionDown = async () => {
        try {
            const response = await getSession({
                variables: {
                    'funcName' : "testfunc.demo1",
                    "data" : '{ "name":"Juan", "age":30, "city":"New York", "session":"123", "token" : "abcd1="}'
                }
            });
            const sessionToken  = JSON.parse(response.data.testfunc.data);

            setQrString(response.data.testfunc.qrdata);
            setDataCookie({ session : sessionToken.session, token : sessionToken.token });
        } catch (error) {
            //   dispatch( getFilesActions.getFiles({ error : error }) );
            console.log(error);
        }
    };

    const onChange = (key, value) => {
        state[key] = value;
    };

    return (
        <>
            {/*<input*/}
            {/*    // value={this.state.messageInput}*/}
            {/*    placeholder='Enter Message'*/}
            {/*    onChange={event => onChange('messageInput', event.target.value)}*/}
            {/*/>*/}
            {/*<input*/}
            {/*    // value={this.state.sessionInput}*/}
            {/*    placeholder='Session'*/}
            {/*    onChange={event => onChange('sessionInput', event.target.value)}*/}
            {/*/>*/}
            {/*<button onClick={getSessionDown}>Get Session</button>*/}
            {/*<button onClick={goDashboard}> Dashboard </button>*/}
            { qrString === "" ? <h2> Loading QR... </h2> : <img src={`data:image/png;base64,${qrString}`} alt="" /> }
            <button onClick={buttonDown}>Send Message</button>
        </>
    )
};

export default PostMessageArea;
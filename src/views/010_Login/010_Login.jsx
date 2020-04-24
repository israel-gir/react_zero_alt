import React, { useState, useEffect } from "react";
import {useMutation, useSubscription } from "@apollo/react-hooks";
import { useCookies } from "react-cookie";
import getSessionDemo from "../../Apis/getSessionDemo";
import { useHistory } from "react-router-dom";

import "./010_Login.css"
import "./010_Login_Mobile.css"
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
import {withStyles} from "@material-ui/styles";
import acme_sub from "../../Apis/acme_sub";
import post_acme from "../../Apis/post_acme";
import useSubscriptionQr from "../../Components/Hooks/SubscriptionQr";

const Login_010 = () => {

    const history                       = useHistory();
    const [ getSession ]                = useMutation(getSessionDemo);
    const [ sid, setSid ]               = useState('');
    const [ auth, setAuth ]             = useMutation(post_acme );
    const [ cookie, setCookie]          = useCookies(['session','token']);
    const [ qrString, setQrString ]     = useState("");
    const dataSubscription              = useSubscriptionQr({ sid });
    // const { data } = useSubscription(acme_sub, { variables : sid !== '' ? { sid } : {} });

    console.log(sid);

    if(cookie.sid)
        history.push('/dashboard');

    if( dataSubscription ) {
        console.log('data', dataSubscription);
        setCookie('sid', dataSubscription.notifications.sid, {path:'/'});
        setSid('');
        setTimeout(() => {
            history.push('/dashboard');
        }, 2500);
    }

    useEffect(() => {
        session();
    },[setQrString, setSid]);

    const session = async () =>{
        try{
            const response = await getSession({
                variables : {
                    "command":"passwordless.session"
                }
            });

            setQrString(response.data.passwordless.QRbase64);
            setSid(response.data.passwordless.sid);
        }catch(e){
            console.log('error',e);
        }
    };

    // const tempForTesting = () => {
    //     return (
    //         <>
    //             <Grid container className="testingArea">
    //                 <Grid item lg={5}>
    //                     {/*<Button variant="contained" onClick={onClickGetSessionWait}>1 Simulate GetSession</Button>*/}
    //                 </Grid>
    //                 <Grid item lg={1}>
    //                 </Grid>
    //                 <Grid item lg={6}>
    //                     <Button variant="contained" onClick={getSeessionApi}>2 Simulate Auth Wait (After Scan)</Button>
    //                 </Grid>
    //             </Grid>
    //             <br/>
    //             <br/>
    //         </>
    //     )
    // }

    // material ui components are linked via global theme not a direct css...
    // this is why we use withStyles here
    // we will have to create a global theme
    const SendingAuthCircularProgress = withStyles({
        root: {
            color: '#00695c',
        },
    })(CircularProgress);

    const ReceivingGetSessionQR = withStyles({
        root: {
            color: '#FFFFFF',
        },
    })(CircularProgress);


    const showProgressControl = () => {
        return (
            <>
                <div>
                    <SendingAuthCircularProgress
                        variant="indeterminate"
                        size={48}
                        thickness={3}
                    />
                </div>
            </>
        )
    }

    const qrWaitProgressControl = () => {
        return (
            <>
                <div className='qrCardAreaWait'>
                    <div className="qrImage">
                        <ReceivingGetSessionQR
                            variant="indeterminate"
                            size={48}
                            thickness={3}
                        />
                    </div>
                </div>
            </>
        )
    }

    const showQRImage = () => {
        return (
            <>
                <div>
                    { sid === ''  ? showProgressControl() : <img className="qrImage" src={`data:image/png;base64,${qrString}`} alt=""/> }
                </div>
            </>
        )
    }

    const showQRCardArea = () => {
        return (
            <>
                {
                    <Card className="qrCardArea">
                        <div>
                            <div className="qrImage">
                                {showQRImage()}
                            </div>
                            <div className="qrImageSubText">Scan the QR code in your mobile app to launch the site.</div>
                            <div className="needHelpText">Need Help? (Link Goes Here)</div>
                        </div>
                    </Card> }
            </>
        )
    }

    return (
        <FadeIn delay={400}>
            <div className="Login_010">
                <div className="signUp-card">
                    <Grid container>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <div className="leftBox">
                                <div className="left_title_text">
                                    Welcome to mvnifest.
                                </div>
                                <div className="top_title_text">
                                    mvnifest.
                                </div>

                            </div>
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={12}>

                            <div className="rightBox">
                                {showQRCardArea()}
                            </div>

                        </Grid>
                    </Grid>
                    {/*{tempForTesting()}*/}
                </div>
            </div>
        </FadeIn>
    )
}

export default Login_010;
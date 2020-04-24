import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

import './Dashboard.css'
import Card from "@material-ui/core/Card";
import {FadeIn} from "react-fade-in";
import Avatar from "@material-ui/core/Avatar";
import ImageAvatar from "./ImageAvatar";
import Paper from "@material-ui/core/Paper";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
}));

// const dashBoard2 = () => {
//   const [openBox, setOpenBox] = React.useState(false);
//
// }

const Dashboard = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  const history = useHistory();
  const [cookie, setCookie, removeCookie] = useCookies(['sid']);


  const backScreen = () => {
    history.push('/react_zero_alt');
    removeCookie('sid', {path: '/'});
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (firstLoad !== true) {
      setTimeout(() => {
        handleClick();
      }, 1000);

      setFirstLoad(true);
    }
  });

  const showCardArea = () => {
    return (
        <Card className="signUp-card-fadeInLayout animatedBox fadeInBox">
          <div className="dashboardTitle">
            Welcome to Mvnifest!
          </div>
          <div className="centeredTitle">
            (Dashboard goes here!)
          </div>
          <br/>
          <Button variant="contained" color="secondary" className="buttonCentered" onClick={backScreen}>
            Start Process Again
          </Button>
        </Card>
    );
  }

  console.log(cookie);

  return (
      <div className="dashboard">
        {showCardArea()}
        <Paper className="topBar" square={true} elevation={5.0} >
          <div className="topBarColor">
          <div className="top_title_text_dashboard">
            mvnifest.
          </div>
          <div className="userGuy">
            <ImageAvatar/>
          </div>
          </div>
        </Paper>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" >
            Dashboard loaded!
          </Alert>
        </Snackbar>
      </div>


  );

};

export default Dashboard;


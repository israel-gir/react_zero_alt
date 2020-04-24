import React, {useEffect, useState} from 'react';
import messageReceived from '../Apis/local_query'
import {useQuery} from "@apollo/react-hooks";
import acme_sub from "../Apis/acme_sub";

const SubscriptionArea = () => {

  const [subscribed, setSubscribed] = useState(false);
  const [payload, setPayload] = useState("");

  // help! make this better, remove warning
  useEffect(() => {
    if (subscribed === false) {
      setSubscribed(true);
      console.log('subscriber')
      subscriber();
    }
  })

  const manifestMessage = (prev, {subscriptionData: {data: {notifications}}}) => {
    // console.log(notifications);
    setPayload(notifications.payload ? notifications.payload : "");
    //
    // NOT NEEDED ???
    //
    // return {
    //   ...prev,
    //   messageReceived: {
    //     __typename: "_reception_dispatch_type",
    //     session: notifications.session ? notifications.session : "",
    //     command: notifications.command ? notifications.command : "",
    //     context: notifications.context ? notifications.context : "",
    //     payload: notifications.payload ? notifications.payload : ""
    //
    //   }
    // }
  }

  const subscriber = () => {
    subscribeToMore({
      document: acme_sub,
      updateQuery: manifestMessage
    })
  }

  const {subscribeToMore, ...result} = useQuery(
      messageReceived
  );


  return (
      <div>
        <button
            // TODO FIX and complete redux hookup
            // onClick={() => this.props.receivedMessage("some message")}
            className="ui button primary">
          Send 'some message' To Redux Message Area
        </button>
        <br/>
        {payload}
        <br/>
      </div>
  )
}

export default SubscriptionArea;
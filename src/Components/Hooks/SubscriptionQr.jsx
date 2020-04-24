import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import acme_sub from "../../Apis/acme_sub";

const useSubscriptionQr = ({ sid }) => {

    const { data } = useSubscription(acme_sub, { variables : sid !== '' ? { sid } : {}});
    return data ? data : null;
};

export default useSubscriptionQr;
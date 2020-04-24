import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {

    const location = useLocation();

    return (
        <h1> { `Route ${location.pathname} not found` } </h1>
    );

};

export default NotFound;
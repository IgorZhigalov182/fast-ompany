import React from "react";
import { useParams } from "react-router-dom";
const User = ({ id }) => {
    const params = useParams();

    const { iddd } = params;
    console.log(iddd);
    return <div>{"sasassa"}</div>;
};

export default User;

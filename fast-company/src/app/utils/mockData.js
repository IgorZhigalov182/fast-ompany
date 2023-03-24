import { useState } from "react";
import { professions } from "../mockData/professions.json";
import { qualities } from "../mockData/qualities.json";
import { users } from "../mockData/users.json";

const UseMockData = () => {
    const statusConsts = {
        idle: "Not started",
        pending: "In Process",
        successed: "Ready",
        error: "Error occured"
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    // return (  );
};

export default UseMockData;

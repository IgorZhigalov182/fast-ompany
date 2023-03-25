import React from "react";
import UseMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = UseMockData();
    const handleClick = () => {
        console.log("click");
        initialize();
    };
    return (
        <div className="container mt-5">
            <h1> Main Page</h1>
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status:{status}</li>
                <li>Progress:{progress}%</li>
                {error && <li>error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                {""}Ининциализировать
            </button>
        </div>
    );
};

export default Main;

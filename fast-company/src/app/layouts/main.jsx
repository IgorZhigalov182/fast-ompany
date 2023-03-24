import React from "react";

const Main = () => {
    const handleClick = () => {
        console.log("cl");
    };
    return (
        <div className="container mt-5">
            <h1> Main Page</h1>
            <h3>Инициализация данных в FireBase</h3>
            <button className="btn btn-primary" onClick={handleClick}>
                {""}Ининциализировать
            </button>
        </div>
    );
};

export default Main;

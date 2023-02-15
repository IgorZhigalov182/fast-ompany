import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import ChangeDataForm from "./changeDataForm";
// import  from "../api/fake.api/user.api";
// import getById from "../api/fake.api/user.api";

const Test = (props) => {
    const [data, setData] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        setData(
            API.users.fetchAll().then((data) => {
                setData(data);
            })
        );
    }, []);

    const { match } = props;
    const userId = match.params.userId;

    // Не получается импортить фу-ю *Выдает фантомную ошибку типа
    const getById = (id) =>
        new Promise((resolve) => {
            window.setTimeout(function () {
                resolve(
                    JSON.parse(localStorage.getItem("users")).find(
                        (user) => user._id === id
                    )
                );
            }, 1000);
        });

    useEffect(() => {
        setUser(
            getById(userId)
                .then()
                .then((obj) => setUser(obj))
        );
    }, []);

    // console.log(user);

    return (
        <>
            {user && (
                <form>
                    <ChangeDataForm data={data} user={user} />
                </form>
            )}
        </>
    );
};

Test.propTypes = {
    match: PropTypes.object
};
export default Test;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const handleClick = () => {
        console.log(history.location.pathname);
        history.push("/users");
    };

    const handleChangeUser = () => {
        const linkBefore = history.location.pathname;
        history.push(`${linkBefore}/edit`);
    };
    // Создание url для проверки на наличие /edit внутри
    // const pathURL = history.location.pathname;
    // console.log(user);

    if (user) {
        return (
            <>
                <div>
                    <h1>{user.name}</h1>
                    <h2>Профессия {user.profession.name}</h2>
                    <Qualities qualities={user.qualities} />
                    <p>completedMeetings: {user.completedMeetings}</p>
                    <h2>rate: {user.rate}</h2>
                    <button onClick={handleClick}>Все пользователи</button>
                    {<br />}
                    {<br />}

                    <button onClick={handleChangeUser}>
                        Изменить данные о пользователе
                    </button>

                    {<br />}
                </div>
            </>
        );
    } else {
        return <h1>{"loading"}</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;

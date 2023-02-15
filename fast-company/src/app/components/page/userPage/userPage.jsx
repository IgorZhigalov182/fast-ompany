import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";
// import Test from "../../test";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const handleClick = () => {
        console.log(history.location.pathname);
        // const linkBefore = history.location.pathname;
        history.push("/users");
        // history.push(`${linkBefore}/edit`);
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
                    {/* <button onClick={handleClick}>sa</button> */}
                    {/* <button>
                        <Link to={`/users/${userId}/edit`}>
                            Обновить данные
                        </Link>
                    </button> */}
                </div>
                {/* <Route path="/users/:userId/edit" render={<Test />} /> */}
                {/* <Route
                    path="/users/:userId?/edit"
                    // render={(props) => <Test {...props} />}
                    render={(props) => <Test />}
                    // render={<Test />}
                /> */}
            </>
        );
    } else {
        return <h1>{"loading"}</h1>;
    }

    // if (toString(pathURL).includes("edit")) {
    //     console.log("a");

    //     return  <Test />;
    // }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;

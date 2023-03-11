import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
// import CommentsListComponent from "./commentsListComponent";
// import api from "../../../api/fake.api/comments.api";
import commentsApi from "../../../api/fake.api/comments.api";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const [idComments, setIdComments] = useState();

    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    // const handleClick = () => {
    //     console.log(history.location.pathname);
    //     history.push("/users");
    // };

    const handleChangeUser = () => {
        const linkBefore = history.location.pathname;
        history.push(`${linkBefore}/edit`);
    };
    console.log(handleChangeUser);
    // Создание url для проверки на наличие /edit внутри
    // const pathURL = history.location.pathname;
    // console.log(user);

    useEffect(() => {
        commentsApi.fetchCommentsForUser(userId).then((comment) => {
            setIdComments(comment);
        });
    }, []);

    console.log(idComments);

    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>

                    <div className="col-md-8 mb-3">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>{"loading"}</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;

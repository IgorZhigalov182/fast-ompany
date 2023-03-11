import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";
import CommentsListComponent from "./commentsListComponent";
// import api from "../../../api/fake.api/comments.api";
import commentsApi from "../../../api/fake.api/comments.api";

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
                        <div className="card mb-3">
                            <div className="card-body">
                                <button
                                    className="position-absolute top-0 end-0 btn btn-light btn-sm"
                                    onClick={handleChangeUser}
                                >
                                    <i className="bi bi-gear"></i>
                                </button>
                                <div className="d-flex flex-column align-items-center text-center position-relative">
                                    <img
                                        src={`https://avatars.dicebear.com/api/avataaars/${(
                                            Math.random() + 1
                                        )
                                            .toString(36)
                                            .substring(7)}.svg`}
                                        className="rounded-circle shadow-1-strong me-3"
                                        alt="avatar"
                                        width="340"
                                        height="200"
                                    />
                                    <div className="mt-3">
                                        <h4>{user.name}</h4>
                                        <p className="text-secondary mb-1">
                                            {user.profession.name}
                                        </p>
                                        <div className="text-muted">
                                            <i
                                                className="bi bi-caret-down-fill text-primary"
                                                role="button"
                                            ></i>
                                            <i
                                                className="bi bi-caret-up text-secondary"
                                                role="button"
                                            ></i>
                                            <span className="ms-2">
                                                {user.rate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body d-flex flex-column justify-content-center text-center">
                                <h5 className="card-title">
                                    <span>Qualities</span>
                                </h5>
                                <p className="card-text">
                                    <Qualities qualities={user.qualities} />
                                </p>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body d-flex flex-column justify-content-center text-center">
                                <h5 className="card-title">
                                    <span>Completed meetings</span>
                                </h5>

                                <h1 className="display-1">
                                    {user.completedMeetings}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 mb-3">
                        <CommentsListComponent comments={idComments} />
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

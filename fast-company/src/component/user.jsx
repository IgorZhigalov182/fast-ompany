import React from "react";
import { Bookmark } from "./bookmark";
import { Qualitie } from "./qualitie";
import PropTypes from "prop-types";

const User = ({ user, ...rest }) => {
    const onDelete = rest.rest.onDelete;
    const onToggleBookmark = rest.rest.onToggleBookmark;
    return (
        <tr key={user._id}>
            <th>{user.name}</th>

            <th>
                <tr>
                    <Qualitie qualities={user.qualities} key={user._id} />
                </tr>
            </th>
            <th key={user.profession._id}>{user.profession.name}</th>
            <th>{user.completedMeetings}</th>
            <th>{user.rate}</th>
            <th>
                <tr>
                    <Bookmark
                        bookmark={user.bookmark}
                        key={user._id}
                        id={user._id}
                        toggle={onToggleBookmark}
                    />
                </tr>
            </th>
            <th>
                <span key={user._id}>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(user._id)}
                    >
                        Delete
                    </button>
                </span>
            </th>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    rest: PropTypes.object.isRequired
};

export default User;

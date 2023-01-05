import React, { useState } from "react";
import api from "./api";
import Users from "./component/users2";
import SearchStatus from "./component/searchStatus";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((item) => item._id !== userId)
        );
    };

    const handleToggleBookmark = (userId) => {
        const newArray = users.map((user) => {
            if (userId === user._id) {
                user.bookmark = !user.bookmark;
                return user;
            } else {
                return user;
            }
        });

        setUsers(newArray);
    };

    return (
        <>
            <SearchStatus users={users} />
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </>
    );
};

export default App;

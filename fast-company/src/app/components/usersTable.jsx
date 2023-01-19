import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UserTable = ({ users, onSort, ...rest }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort("Имя")} scope="col">
                        Имя
                    </th>
                    <th scope="col">Качества</th>
                    <th onClick={() => onSort("Профессия")} scope="col">
                        Профессия
                    </th>
                    <th onClick={() => onSort("Встретился")} scope="col">
                        Встретился, раз
                    </th>
                    <th onClick={() => onSort("Оценка")} scope="col">
                        Оценка
                    </th>
                    <th onClick={() => onSort("Избранное")} scope="col">
                        Избранное
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UserTable;

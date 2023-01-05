import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    const counterUsers = users.length;
    const pageSize = 4;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    const table = (
        <table className="table-info">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                </tr>
            </thead>
            <tbody>
                {userCrop.map((item) => {
                    return (
                        <>
                            <User user={item} rest={rest} key={item._id} />
                        </>
                    );
                })}
            </tbody>
        </table>
    );

    if (counterUsers === 0) {
        return table.remove;
    }

    return (
        <>
            {table}
            <Pagination
                itemsCount={counterUsers}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired
};

User.propTypes = {
    user: PropTypes.arrayOf(PropTypes.object).isRequired,
    rest: PropTypes.object.isRequired,
    counterUsers: PropTypes.number.isRequired
};

export default Users;

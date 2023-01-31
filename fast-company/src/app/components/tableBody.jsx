import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link, Route } from "react-router-dom";

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            } else {
                return component;
            }
        } else {
            return _.get(item, columns[column].path);
        }
    };

    return (
        <>
            <tbody>
                {data.map((item) => (
                    <tr key={item._id}>
                        {Object.keys(columns).map((column) =>
                            column === "name" ? (
                                <td key={column}>
                                    <Link to={item._id}>
                                        {/* <Route path={`/users/:${item._id}?`}> */}
                                        {renderContent(item, column)}
                                        {/* </Route> */}
                                    </Link>
                                </td>
                            ) : (
                                <td key={column}>
                                    {renderContent(item, column)}
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
            {/* <Route to></Route> */}
        </>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableBody;

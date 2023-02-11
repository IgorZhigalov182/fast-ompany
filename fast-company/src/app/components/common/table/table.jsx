import React from "react";
import TableBody from "./tableBody";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ data, columns }} />
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};

export default Table;

import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {/* {selectedSort.path} */}
                        {/* {columns[column].name}
                        {console.log(selectedSort.order)} */}

                        {/* {console.log(order)} */}
                        {columns[column].name}

                        {columns[column].name === selectedSort.path ? (
                            selectedSort.order === "desc" ? (
                                <>
                                    {columns[column].name}
                                    {<i className="bi bi-caret-down-fill"></i>}
                                </>
                            ) : (
                                <>
                                    {columns[column].name}
                                    {<i className="bi bi-caret-up-fill"></i>}
                                </>
                            )
                        ) : null}

                        {/* {columns[column].name === selectedSort ? (
                            onSort.order === "abs" ? (
                                <i className="bi bi-caret-down-fill"></i>
                            ) : (
                                <i className="bi bi-caret-up-fill"></i>
                            )
                        ) : null} */}

                        {/* {columns[column].name === selectedSort ? (
                            columns[column].name
                        ) : (
                            <i className="bi bi-caret-down-fill">
                                {columns[column].name}
                            </i>
                        )} */}

                        {/* <i className="bi bi-caret-down-fill"></i>
                        <i className="bi bi-caret-up-fill"></i> */}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;

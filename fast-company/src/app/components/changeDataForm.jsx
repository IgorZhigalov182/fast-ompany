import React from "react";
import PropTypes from "prop-types";

const ChangeDataForm = ({ data, user }) => {
    console.log(user);
    return (
        <>
            <div
                className="mb-4"
                style={{
                    width: "40%",
                    margin: "0 auto"
                }}
            >
                <label htmlFor={user.name} className="formGroupExampleInput">
                    Имя
                </label>
                <input
                    type="text"
                    className="form-control"
                    id={user._id}
                    defaultValue={user.name}
                />
            </div>
            <div
                className="mb-4"
                style={{
                    width: "40%",
                    margin: "0 auto"
                }}
            >
                <label htmlFor={user.name} className="formGroupExampleInput">
                    Электронная почта
                </label>
                <input
                    type="email"
                    className="form-control"
                    id={user._id}
                    defaultValue={user.email}
                />
            </div>
        </>
    );
};

ChangeDataForm.propTypes = {
    data: PropTypes.array,
    user: PropTypes.object
};

export default ChangeDataForm;

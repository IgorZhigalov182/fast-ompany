import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ name, value, label, onChange, type, error }) => {
    const [showPassword, setshowPassword] = useState(false);

    // типизируем поля для того, чтобы добавлять из любого места
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const toggleShowPassword = () => {
        setshowPassword((prevState) => !prevState);
    };

    const getInpitClasses = () => {
        return "form-control " + (error ? "is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    id={name}
                    type={showPassword ? "text" : type}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className={getInpitClasses()}
                />
                {type === "password" ? (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                ) : null}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
export default TextField;

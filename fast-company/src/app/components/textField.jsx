import React from "react";
import PropTypes from "prop-types";

const TextField = ({ name, value, label, onChange, type, error }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
            {error && <p>{error}</p>}
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

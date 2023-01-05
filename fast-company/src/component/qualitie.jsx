import React from "react";
import PropTypes from "prop-types";

export const Qualitie = (qualities) => {
    const arrayQualities = Object.values(qualities)[0];
    return (
        <>
            {arrayQualities.map((qualitie) => {
                return (
                    <span
                        key={qualitie._id}
                        className={`badge rounded-pill bg-${qualitie.color}`}
                    >
                        {qualitie.name}
                    </span>
                );
            })}
        </>
    );
};

Qualitie.propTypes = {
    qualities: PropTypes.arrayOf(PropTypes.object).isRequired
};

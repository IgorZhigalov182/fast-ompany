import React from "react";

import PropTypes from "prop-types";
import { useProfessions } from "../../hooks/useProfession";

const Profession = ({ id, isLoading }) => {
    console.log(id);
    const { getProfession } = useProfessions();
    const prof = getProfession(id);
    console.log(prof.name);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else {
        return "loading ...";
    }
};

Profession.propTypes = {
    id: PropTypes.string,
    isLoading: PropTypes
};

export default Profession;

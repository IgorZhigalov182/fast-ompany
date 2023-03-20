import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQuality } from "../../../hooks/useQualitites";
// import { useQuality } from "../../../hooks/useQualitites";

const QualitiesList = () => {
    // const prof = getProfession(id);
    // const { getQuality } = useQuality();
    // const qualit = getQuality(id);
    const { qualities } = useQuality();
    // const { isLoading } = useQuality();
    // console.log(isLoading);
    // else {
    //     return "loading ...";
    // }

    // console.log(qualities);

    return (
        <>
            {qualities.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array,
    isLoading: PropTypes,
    id: PropTypes
};

export default QualitiesList;

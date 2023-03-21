import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQuality } from "../../../hooks/useQualitites";

const QualitiesList = ({ qualities }) => {
    const { getQuality } = useQuality();

    const sortedArrQualities = qualities.map((qualId) => {
        return getQuality(qualId);
    });

    const finalArray = sortedArrQualities.flat();

    return (
        <>
            {finalArray.map((qual) => (
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

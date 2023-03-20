import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import qualitiesService from "../services/qualities.service";
// import Quality from "../components/ui/qualities/quality";

const QualityContext = React.createContext();

export const useQuality = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getQualitiesList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    // function getQuality(id) {
    //     qualities.map((qual) => <Quality key={qual._id} {...qual} />);
    // }

    // console.log("qualities", qualities);

    async function getQualitiesList() {
        try {
            const { content } = await qualitiesService.get();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
            toast(error);
            setError(null);
        }
    }

    console.log(isLoading);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    return (
        <QualityContext.Provider value={{ qualities, isLoading }}>
            {children}
            {/* getQuality */}
        </QualityContext.Provider>
    );
};

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

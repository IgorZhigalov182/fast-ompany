import React from "react";

export const Qualitie = (qualities) => {
        let arrayQualities = Object.values(qualities)[0]
        return (
            <>
                {
                 arrayQualities.map((qualitie) => {
                   return( <span
                        key = {qualitie._id}
                        className = {`badge rounded-pill bg-${qualitie.color}`}
                    >
                        {qualitie.name}   
                    </span>)
                 })   
                }
            </>
        )
}

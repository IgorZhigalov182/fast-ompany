import React, {useState} from "react";
import Users from "./users2";
import App from "../App";

const SearchStatus = ({ users }) => {
    let lengthUsers = users.length

    const checkCorrectCount = (count) => {
        const chelovek = [1,5,6,7,8,9,10,11,12]
        const cheloveka = [2,3,4]
        return (chelovek.includes(count)) ? 'человек':'человека'
    }

    const checkZero = (lengthUsers) => {
        if (lengthUsers === 0) {
            return (<span className="badge bg-danger large mh-50 vw-50 ">{lengthUsers} {checkCorrectCount(lengthUsers)} тусанет с тобой сегодня</span>)
        } else {
            return (<span className="badge bg-primary large mh-50 vw-50 ">{lengthUsers} {checkCorrectCount(lengthUsers)} тусанет с тобой сегодня</span>)
        }
    }

    

    const counterUsersComponent = (
        checkZero(lengthUsers)
    )

    return <h1>{counterUsersComponent}</h1>
}

export default SearchStatus
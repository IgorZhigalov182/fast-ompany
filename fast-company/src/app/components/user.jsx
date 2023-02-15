// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../api";
// import QualitiesList from "./ui/qualities/qualitiesList";
// import PropTypes from "prop-types";

// const User = ({ id }) => {
//     let [userID, setUserID] = useState();

//     useEffect(() => {
//         userID = api.users.getById(id).then((data) => setUserID(data));
//     });

//     return userID ? (
//         <>
//             <h1>{`${userID.name}`}</h1>
//             <h2>{`Профессия: ${userID.profession.name}`}</h2>
//             <QualitiesList qualities={userID.qualities} />
//             <div>{`Завершенные встречи: ${userID.completedMeetings}`}</div>
//             <h1>{`Рейтинг ${userID.rate}`}</h1>;
//             <button>
//                 <Link to="/users">Все пользователи</Link>
//             </button>
//         </>
//     ) : null;
// };
// User.propTypes = {
//     id: PropTypes.string
// };
// export default User;

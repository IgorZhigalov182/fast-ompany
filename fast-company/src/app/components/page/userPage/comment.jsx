// import React, { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import commentsApi from "../../../api/fake.api/comments.api";

// const Comment = ({ infoComment }) => {
//     // console.log("pageId", infoComment);

//     // useEffect(() => {
//     //     api.users.getById(userId).then((data) => setUser(data));
//     // }, []);

//     // console.log(infoComment.userId);
//     // const arrayForName = JSON.parse(localStorage.getItem("users"));

//     // const nameAuthorComment = arrayForName.filter(
//     //     (user) => user._id === infoComment.userId
//     // );

//     // const datePresent = new Date(+infoComment.created_at);
//     // console.log(datePresent.getDate());
//     // const dateInfo = `${datePresent.getDate()} ${datePresent.getMonth()} ${datePresent.getFullYear()}`;

//     return (
//         <div className="bg-light card-body  mb-3">
//             <div className="row">
//                 <div className="col">
//                     <div className="d-flex flex-start ">
//                         <img
//                             src={`https://avatars.dicebear.com/api/avataaars/${(
//                                 Math.random() + 1
//                             )
//                                 .toString(36)
//                                 .substring(7)}.svg`}
//                             className="rounded-circle shadow-1-strong me-3"
//                             alt="avatar"
//                             width="65"
//                             height="65"
//                         />

//                         <div className="flex-grow-1 flex-shrink-1">
//                             <div className="mb-4">
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <p className="mb-1 ">
//                                         {nameAuthorComment[0].name}
//                                         <span
//                                             className="small"
//                                             style={{ marginLeft: "5px" }}
//                                         >
//                                             {dateInfo}
//                                         </span>
//                                     </p>
//                                     <button
//                                         className="btn btn-sm text-primary d-flex align-items-center"
//                                         itemRef={ref}
//                                     >
//                                         <i className="bi bi-x-lg"></i>
//                                     </button>
//                                 </div>
//                                 <p className="small mb-0">
//                                     {infoComment.content}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// Comment.propTypes = {
//     infoComment: PropTypes.string.isRequired
// };

// export default Comment;

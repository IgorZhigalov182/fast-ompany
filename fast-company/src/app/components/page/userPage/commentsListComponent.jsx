import React from "react";
import Comment from "./comment";
import PropTypes from "prop-types";
// import api from "../../../api/fake.api/comments.api";

const CommentsListComponent = ({ comments }) => {
    // const [comments, setComments] = useState();
    // const [idComments, setIdComments] = useState();

    // useEffect(() => {
    //     console.log(
    //         api.fetchAll().then((comment) => {
    //             setComments(comment);
    //         })
    //     );
    // }, []);

    // useEffect(() => {
    //     api.fetchCommentsForUser(userId).then((comment) => {
    //         setIdComments(comment);
    //     });
    // }, []);

    // console.log("COMMENTS", comments);
    // console.log(idComments);

    return (
        <>
            <div className="card mb-2">
                <div className="card-body ">New comment</div>
            </div>
            <div className="card mb-3">
                <div className="card-body ">
                    <h2>{"Comments"}</h2>
                    <hr />

                    {comments &&
                        comments.map((comment) => {
                            return (
                                <Comment
                                    key={comment.id}
                                    infoComment={comment}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

CommentsListComponent.propTypes = {
    comments: PropTypes.string.isRequired
};

export default CommentsListComponent;

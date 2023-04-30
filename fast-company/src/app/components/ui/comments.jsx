import { orderBy } from "lodash";
import React, { useEffect } from "react";
import CommentsList, { AddCommentForm } from "../common/comments";
// import { useComments } from "../../hooks/useComments";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment
} from "../../store/comments";
import { useParams } from "react-router-dom";
import { getCurrentUserId } from "../../store/users";
import commentService from "../../services/comment.service";

const Comments = () => {
    const currentUserId = useSelector(getCurrentUserId());
    const { userId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCommentsList(userId));
    }, [userId]);

    const isLoading = useSelector(getCommentsLoadingStatus());

    // const { removeComment } = useComments();

    const comments = useSelector(getComments());

    const handleSubmit = async (data) => {
        const comment = {
            ...data,
            _id: nanoid(),
            pageId: userId,
            created_at: Date.now(),
            userId: currentUserId
        };

        try {
            const { content } = await commentService.createComment(comment);
            dispatch(createComment(content));
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveComment = async (id) => {
        try {
            const { content } = await commentService.removeComment(id);
            dispatch(removeComment(content));
        } catch (error) {
            console.log(error);
        }
    };

    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
                            "loading"
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;

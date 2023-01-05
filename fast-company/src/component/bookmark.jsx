import React from "react";
import PropTypes from "prop-types";

export const Bookmark = ({ bookmark, ...rest }) => {
    const bookMarkId = rest.id;
    const handleBookmark = rest.toggle;

    return (
        <span>
            <button
                className={
                    bookmark === true
                        ? "bi bi-bookmark-star-fill"
                        : "bi bi-bookmark-star"
                }
                onClick={() => handleBookmark(bookMarkId)}
            ></button>
        </span>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired,
    rest: PropTypes.func.isRequired
};

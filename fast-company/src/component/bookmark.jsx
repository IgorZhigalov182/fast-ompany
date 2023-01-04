import React, {useState} from "react";

export const Bookmark = ({bookmark, ...rest}) => {
    const [bookMark, setBookmark] = useState(bookmark)
    // console.log(rest);
    let handleBookmark = rest.toggleBookmark

    let toggleDisplay = () => {
       return( bookMark ? ('bi bi-bookmark-star-fill') : ('bi bi-bookmark-star'))
    }

    // let handleBookmark = (bookMark) => {
    //     return setBookmark(bookMark = !bookMark)
    // }

    return (
        <span>
            <button 
                className={toggleDisplay()} 
                // onClick={()=>handleBookmark(bookMark)}
                onClick={handleBookmark}

                >
            </button>
        </span>
    )
}
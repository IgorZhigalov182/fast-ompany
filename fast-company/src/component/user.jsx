import React from "react";
import { Bookmark } from "./bookmark";
import { Qualitie } from "./qualitie";

let User = ({user, ...rest}) => {
    let onDelete = rest.rest.onDelete
    // let onToggleBookmark = rest.rest.onToggleBookMark

    return (
        <tr key={user._id}>
        <th >{user.name}</th>
        <th>
            <tr> 
                <Qualitie qualities = {(user.qualities)} />
            </tr>
        </th>
        <th key={user.profession._id}>{user.profession.name}</th>
        <th >{user.completedMeetings}</th>
        <th >{user.rate}</th>
        <th>
            <tr>
                <Bookmark 
                    bookmark = {user.bookmark} 
                // toggleBookmark = {onToggleBookmark} 
                />
            </tr>
        </th>
        <th>
            <span 
                key = {user._id}
                >
                    <button class="btn btn-danger" onClick={()=> onDelete(user._id)}>Delete</button>
            </span>
        </th>
        
        </tr>
    )
}

export default User
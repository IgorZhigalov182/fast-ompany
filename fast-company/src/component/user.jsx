import React from "react";
import { Bookmark } from "./bookmark";
import { Qualitie } from "./qualitie";

let User = ({user, ...rest}) => {
    let onDelete = rest.rest.onDelete
    // let onToggleBookmark = rest.rest.onToggleBookMark

    let onToggleBookmark = rest.rest.onToggleBookmark
    // console.log(user);
    return (
        <tr key={user._id}>
        <th>{user.name}</th>
        
        <th>
            <tr> 
                <Qualitie qualities = {(user.qualities) } key = {user._id} />
            </tr>
        </th>
        <th key={user.profession._id}>{user.profession.name}</th>
        <th >{user.completedMeetings}</th>
        <th >{user.rate}</th>
        <th>
            <tr>
                <Bookmark 
                    bookmark = {user.bookmark} 
                    key = {user._id}
                    toggleBookmark = {onToggleBookmark} 
                    // onClick = {()=>onToggleBookmark(user._id)}
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
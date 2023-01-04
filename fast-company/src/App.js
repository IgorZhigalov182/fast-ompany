import React,{useState} from "react";
import api from "./api";
import Users from "./component/users2";
import SearchStatus from "./component/searchStatus";
import 'bootstrap/dist/css/bootstrap.css'
import { set } from "lodash";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(item=>item._id !== userId))
    }

    const handleToggleBookmark = (userId) => {
        setUsers(prevState => prevState.filter(item=>item._id !== userId))
    }

    // const handleToggleBookMark = (userId) => {
    //     console.log(userId);
        
    //     // setUsers (prevState => prevState.map(item=>item.bookmark = !item.bookmark))

    //     users.map((user) =>
    //         {
    //             if (user._id === userId ) {
    //                 user.bookmark = !user.bookmark
    //             }
    //         }
    //     )


    //     // let newA = users.map((user) =>
    //     //     {
    //     //         if (user._id === userId ) {
    //     //             user.bookmark = !user.bookmark
    //     //         }

    //     //     }
    //     // )

    //     // setUsers(newA)


    //     // setUsersBook(usersBook.forEach((user) =>
    //     //     {
    //     //         if (user._id === userId ) {
    //     //             user.bookmark = !user.bookmark
    //     //         }

    //     //     }
    //     // ))
    // }

    return (
        <>
            <SearchStatus users = { users }/>
            <Users 
                users = { users } 
                onDelete = { handleDelete } 
                onToggleBookmark = {handleToggleBookmark}
            />
        </>
    )
}

export default App
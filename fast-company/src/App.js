import React,{useState} from "react";
import api from "./api";
import Users from "./component/users2";
import SearchStatus from "./component/searchStatus";
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(item=>item._id !== userId))
    }

    // Не получилось реализовать фу-ю здесь

    // const handleToggleBookMark = (userBookmark) => {
    //     userBookmark = !userBookmark
    //     setUsers(userBookmark)
    // }

    return (
        <>
            <SearchStatus users = { users }/>
            <Users 
                users = { users } 
                onDelete = { handleDelete } 
                // onToggleBookMark = { handleToggleBookMark }
            />
        </>
    )
}

export default App
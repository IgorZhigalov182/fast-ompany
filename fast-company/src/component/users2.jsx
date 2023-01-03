import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import User from "./user";

const Users = ({users, ...rest}) => {
    const counterUsers = users.length

    const table = 
        <table class="table-info">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                </tr>
            </thead>
            <tbody>
                {
                        users.map(item=> {
                           return(
                            <>
                                <User user = {item} rest = {rest}/>
                            </>
                           ) 
                        })
                }
            </tbody>          
        </table>

    if (counterUsers === 0) {
        return table.remove
    }

        return (
            <>
                {table}
                {/* {() => toggleDisplayTableHead()} */}
            </>
            )
}

export default Users
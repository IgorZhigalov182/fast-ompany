import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import User from "./user";
import Pagination from "./pagination";

const Users = ({users, ...rest}) => {
    const counterUsers = users.length
    const pageSize = 4

    const handlePageChange = (pageIndex) => {
        console.log('page',pageIndex);
         }
    
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
                <Pagination itemsCount = {counterUsers} pageSize = {pageSize} onPageChange = {handlePageChange} />

                {/* {() => toggleDisplayTableHead()} */}
            </>
            )
}

export default Users
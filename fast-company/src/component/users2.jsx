import React, {useState} from "react";
import api from '../api'
import { fetchAll } from "../api/fake.api/user.api";
import 'bootstrap/dist/css/bootstrap.css'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const counterUsers = users.length

    const correctName = (count) => {
        const chelovek = [1,5,6,7,8,9,10,11,12]
        const cheloveka = [2,3,4]
        return (chelovek.includes(count)) ? 'человек':'человека'
    }

    const checkZero = (counterUsers) => {
        if (counterUsers === 0) {
            return (<span className="badge bg-danger large mh-50 vw-50 ">{counterUsers} {correctName(counterUsers)} тусанет с тобой сегодня</span>)
        } else {
            return (<span className="badge bg-primary large mh-50 vw-50 ">{counterUsers} {correctName(counterUsers)} тусанет с тобой сегодня</span>)
        }

    }

    const counterUsersComponent = (
        checkZero(counterUsers)
    )

    const handleListChange = (id) => {
        setUsers(prevState=>prevState.filter(item=> item!==id))
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
                </tr>
            </thead>
            <tbody>
                {
                    users.map (user => {
                        console.log(user);
                        return (
                            <tr key={user._id}>
                                <th >{user.name}</th>
                                
                                <th>
                                    <tr> 
                                        {(user.qualities).map(ihnerItem =>
                                            <span  
                                                key={ihnerItem._id}
                                                className = {`badge rounded-pill bg-${ihnerItem.color}`}
                                                > {ihnerItem.name}
                                            </span>
                                            )}
                                    </tr>
                                </th>
                                <th key={user.profession._id}>{user.profession.name}</th>
                                <th >{user.completedMeetings}</th>
                                <th >{user.rate}</th>
                                <th>
                                    <span 
                                        key = {user._id}
                                        >
                                        <button class="btn btn-danger" onClick={()=>handleListChange(user) }>Delete</button>
                                    </span>
                                </th>
                            </tr>
                            )
                    })
                }
            </tbody>          
        </table>


        return (
            <>
                {counterUsersComponent}
                {table}
            </>
            )
}

export default Users
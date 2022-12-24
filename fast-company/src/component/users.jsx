import React, {useState} from "react";
import api from '../api'
import { fetchAll } from "../api/fake.api/user.api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    console.log(users);

    const handleListChange = (id) => {
        console.log(id);
        setUsers(prevState=>prevState.filter(item=> item!==id))
    }

    let names = 
            <ul>
                {
                    users.map((item) => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
    let jobs = 
    <ul>
        {
            users.map((item) => (
            <li key={item._id}>{item.profession.name}</li>
        ))}
    </ul>
    let qualities = 
    <ul>
        {
            users.map((item) => (
            <li key={item._id}>
                <ul>{(item.qualities).map(ihnerItem =><span key={ihnerItem._id}>{ihnerItem.name}</span>)}</ul>
            </li>
        ))}
    </ul>
    let completedMeetings = 
    <ul>
        {
            users.map((item) => (
            <li key={item._id}>{item.completedMeetings}</li>
        ))}
    </ul>
    let rate = 
    <ul>
        {
            users.map((item) => (
            <li key={item._id}>{item.rate}</li>
        ))}
    </ul>
    let button = 
    <ul>
        {
            users.map((item) => (
            <li key={item._id}>{<button onClick={()=>handleListChange(item)}>Delete</button>}</li>
        ))}
    </ul>

    const table = 
        <table>
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
                <tr>
                    <th scope="row">{names}</th>
                    <td >{qualities}</td>
                    <td>{jobs}</td>
                    <td>{completedMeetings}</td>
                    <td>{rate}</td>
                    <td>{button}</td>
                </tr>  
            </tbody>          
        </table>

    return table
}

export default Users
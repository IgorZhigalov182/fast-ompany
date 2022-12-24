import React, {useState} from "react";
import api from '../api'
import { fetchAll } from "../api/fake.api/user.api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const counterUsers = users.length

    const correctName = (count) => {
        const chelovek = [1,5,6,7,8,9,10,11,12]
        const cheloveka = [2,3,4]
        return (chelovek.includes(count)) ? 'человек':'человека'
    }

    const counterUsersComponent = (
            <>   
            
            <h1>{counterUsers} {correctName(counterUsers)} тусанет с тобой сегодня</h1>
            </>
    )

    const handleListChange = (id) => {
        setUsers(prevState=>prevState.filter(item=> item!==id))
    }

    console.log(users);

    const getName = (arr) => {
        return arr.map((user) => 
        <span 
            key = {user._id}
            >
                {user.name}
        </span>
        )
    }

{

    const getQualities = (arr) => {
        return (
            arr.map((user) => 
                <span key={user._id}>
                <span> 
                    {(user.qualities).map(ihnerItem =>
                        <span 
                        key={ihnerItem._id}
                        
                        >{ihnerItem.name}</span>
                        )}
                    </span>
                </span>
        ))
    }

    const getJob = (arr) => {
        return arr.map((user) => 
        <span 
            key = {user.profession._id}
            >
                {user.profession.name}
        </span>
        )
    }

    const getCompleteMeetings = (arr) => {
        return arr.map((user) => 
        <span 
            key = {user._id}
            >
                {user.completedMeetings}
        </span>
        )
    }

    const getRate = (arr) => {
        return arr.map((user) => 
        <span 
            key = {user._id}
            >
                {user.rate}
        </span>
        )
    }

    const deleteUser = (arr) => {
        return arr.map((user) => 
        <span 
            key = {user._id}
            >
                <button onClick={()=>handleListChange(user)}>Delete</button>
        </span>
        )
    }

    const showTsa = (object) => {
        return (
            <span key = {object._id}>
                {object.name}sdadasdas
            </span>
        )
    }

    const createRowComponent = (arrayUsers) => {
        // arrayUsers.forEach(objectUser => {
        //     return (
        //         <tr>
        //                 <td>{showTsa(objectUser)}</td>
        //                 <td>{getName(users)}</td>
        //                 <td>{getQualities(users)}</td>
        //                 <td>{getJob(users)}</td>
        //                 <td>{getCompleteMeetings(users)}</td>
        //                 <td>{getRate(users)}</td>
        //                 <td>{deleteUser(users)}</td>
        //         </tr>
        //     )
        // })

       return (
        <tr>
            <td>
                {showTsa(arrayUsers)}
            </td>
        </tr>
       )


        // for (let i = 0; i < users.length; i++) {
        //     return (
        //         <tr>
        //                 <td>{getName(users)[i]}</td>
        //                 <td>{getQualities(users)[i]}</td>
        //                 <td>{getJob(users)[i]}</td>
        //                 <td>{getCompleteMeetings(users)[i]}</td>
        //                 <td>{getRate(users)[i]}</td>
        //                 <td>{deleteUser(users)[i]}</td>
        //         </tr>
        //     )
        // }
    }

    
    // let row = 
    //     <>
    //         {
    //             users.map((user) => (
    //                 <span key={user._id}>{user.name}</span>
    //             ))
    //         }
    //     </>

    // let secRow =     
    //     <>
    //         {
    //             users.map((user) => (
    //                 <span key={user._id}>{user.profession.name}</span>
    //             ))
    //         }
    //     </>



    // let names = 
    //         <>
    //             {
    //                 users.map((item) => (
    //                     <tr key={item._id}>{item.name}</tr>
    //             ))}
    //         </>
    // let jobs = 
    // <>
    //     {
    //         users.map((item) => (
    //         <tr key={item._id}>{item.profession.name}</tr>
    //     ))}
    // </>
    // let qualities = 
    // <th>
    //     {
    //         users.map((item) => (
    //         <tr key={item._id}>
    //             <tr>{(item.qualities).map(ihnerItem =><span key={ihnerItem._id}>{ihnerItem.name}</span>)}</tr>
    //         </tr>
    //     ))}
    // </th>
    // let completedMeetings = 
    // <>
    //     {
    //         users.map((item) => (
    //         <tr key={item._id}>{item.completedMeetings}</tr>
    //     ))}
    // </>
    // let rate = 
    // <th>
    //     {
    //         users.map((item) => (
    //         <tr key={item._id}>{item.rate}</tr>
    //     ))}
    // </th>
    

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
                {
                users.forEach(obj => {
                    return createRowComponent(obj)
                })
                }

                {
                    createRowComponent(users)
                }


                {/* <tr> */}

                    {/* {names}
                    {qualities}
                    {jobs}
                    <th>{completedMeetings}</th>
                    {rate}
                    {button} */}
                    {/* <td></td>{names}</td>
                    <td>{qualities}</td>
                    <td>{jobs}</td>
                    <td>{completedMeetings}</td>
                    <td>{rate}</td>
                    <td>{button}</td> */}
                {/* </tr> */}
                
                

                {/* {createRowComponent()} */}
                
                {/* {users.forEach(obj => {
                  createRowComponent(obj)
                })} */}

                <tr>
                    <td>1</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th >2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>  
            </tbody>          
        </table>



    return (
        <>
            {counterUsersComponent}
            {table}
        </>
        )
}}

export default Users
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/appProvider";
import BaseApp from "../core/BaseApp";



export default function AddTeacher(){

    const {teacher,setTeacher}= AppState();
    const history = useHistory();

    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [id,setId]= useState("")
    const [phone,setPhone]= useState("")
    const [address,setAddress]= useState("")


    const addNewTeacher = () =>{
        const newTeacher ={
            id:id,
            name:name,
            email:email,
            phone:phone,
            address:address
        }
        console.log(newTeacher)
        setTeacher([...teacher,newTeacher])
        history.push("/teacher")
    }
    return(
       <BaseApp
       tittle="Add New Teacher"
       styles="tittle">
       <div>
       <input
        placeholder="id"
        value={id}
        onChange={(event) =>setId(event.target.value)}
        />


        <input
        placeholder="name"
        value={name}
        onChange={(event) =>setName(event.target.value)}
        />
        <input
        placeholder="email"
        value={email}
        onChange={(event) =>setEmail(event.target.value)}
        
        />
        <input
        placeholder="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        />
        <input
        placeholder="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        
        />


                <button onClick={addNewTeacher}>Add Teacher</button>
       </div>
       </BaseApp>
    )
}
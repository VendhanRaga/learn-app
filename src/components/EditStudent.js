import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../context/appProvider";
import BaseApp from "../core/BaseApp";



export function EditStudent(){

    const {user,setUser}= AppState();
    

    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [exp, setExp] = useState("");
    const [email, setEmail] = useState("");
    const [idx, setIdx] = useState("");
    
    const {id} = useParams();
    const history  = useHistory();


    const selectedUser = user.find((per)=>per.id == id);

    useEffect(() =>{
        setName(selectedUser.name);
        setBatch(selectedUser.Batch);
        setExp(selectedUser.exp);
        setEmail(selectedUser.email);
        setIdx(selectedUser.id);
    },[]);
    console.log(user)

    const updateUser = () =>{

        const editIndex = user.findIndex(per=>per.id === id)

        const editedData = {
            name,
            batch,
            exp,
            email,
            id : idx
        }

        user[editIndex] = editedData;
        setUser([...user]);
        history.push("/student");


    }


    return(
        <BaseApp
       tittle={"edit detail"}>
        <div>

<input
    placeholder="id"
    value={idx}
    onChange={(e) => setIdx(e.target.value)}
/>


<input
    placeholder="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>



<input
    placeholder="batch"

    value={batch}
    onChange={(e) => setBatch(e.target.value)}
/>
<input
    placeholder="exp"
    value={exp}
    onChange={(e) => setExp(e.target.value)}

/>
<input
    placeholder="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>
<button
onClick={updateUser}
>Edit</button>

</div>
       </BaseApp>
    )
}
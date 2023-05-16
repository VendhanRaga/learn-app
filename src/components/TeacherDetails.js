import React from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../context/appProvider";
import BaseApp from "../core/BaseApp";




export default function TeacherDetail(){

    const {teacher}= AppState()
    const {id} = useParams()
    const person = teacher[id]
    return(
        <BaseApp
        tittle="Teacher Details"
        styles="tittle">
            <div>
                <h1>{person.name}</h1>
                <p>id : {person.id}</p>
                <p>email : {person.email}</p>
                <p>phone : {person.phone}</p>
                <p>address : {person.address}</p>

            </div>
        </BaseApp>
      
    )
}







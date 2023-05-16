import React, { createContext, useContext, useState } from "react";
import { StudentData } from "../core/StudentData";
import { TeacherData } from "../core/TeacherData";

const Appcontext =  createContext();

const  AppProvider = ({children})=>{


    const [user,setUser]= useState(StudentData)
    const [teacher,setTeacher]= useState(TeacherData)


    return(
        <Appcontext.Provider
        value={{
            user,setUser,teacher,setTeacher
        }}>
            {children}

        </Appcontext.Provider>

    )
}


export const  AppState =()=>{
    return useContext(Appcontext)
}




export default AppProvider

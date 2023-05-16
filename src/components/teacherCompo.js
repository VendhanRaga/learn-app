import { Badge, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import BaseApp from "../core/BaseApp";


import { TeacherData } from "../core/TeacherData.js";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/appProvider";



export default function TeachComponent() {
   

    const {teacher,setTeacher}= AppState();

   const history = useHistory();


   const DeteleTeacher = (idx) => {
    const alterList = teacher.filter((person, id) => person.id!= idx)
    setTeacher(alterList);
   
}


  

    return (


        <BaseApp
            tittle="Teachers Details"
            styles="tittle">
            <div className="stu">
                <div>
                <Button variant="success"
                onClick={() => history.push('/addteacher')}>
      Add Teacher <Badge ></Badge>
      
    </Button>
                </div>
                {teacher.map((person, idx) => (
                    <Card key ={idx} style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Text>Email : {person.email}</Card.Text>
                            <Card.Text>Phone: {person.phone}</Card.Text>
                            <Card.Text>Address : {person.address}</Card.Text>
                      
                           <Button className="btn" variant="primary"
                          onClick={()=>history.push(`/${idx}`)}
                           
                           >View</Button>
                            <Button className="btn" variant="warning">Edit</Button>
                            <Button className="btn" 
                            onClick={() => DeteleTeacher(person.id)}
                            variant="danger">Delete</Button>
                          
                        </Card.Body>
                    </Card>
                ))}
                </div>
           






        </BaseApp>






    )
}
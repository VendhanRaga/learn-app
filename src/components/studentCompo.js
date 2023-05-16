import { Badge, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import BaseApp from "../core/BaseApp";

import { StudentData } from "../core/StudentData.js";
import { useHistory } from "react-router-dom";
import { AppState } from "../context/appProvider";



export default function StuComponent() {
    
    const {user,setUser}= AppState();
    const history = useHistory();


    const Deletestudent = (idx) => {
        const alterList = user.filter((person, id) => person.id != idx)
        setUser(alterList);
    }

    return (


        <BaseApp
            tittle="Students Details"
            styles="tittle">
            <div className="stu">
                <div>
                <Button variant="success"
                onClick={() => history.push('/addstudent')}>
      Add Student <Badge ></Badge>
      
    </Button>
                </div>
                {user.map((person, idx) => (
                    <Card key ={idx} style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Text>Email : {person.email}</Card.Text>
                            <Card.Text>Phone: {person.phone}</Card.Text>
                            <Card.Text>Address : {person.address}</Card.Text>
                      
                           <Button className="btn" variant="primary"
                           onClick={()=>history.push(`/${idx}`)}
                           >View</Button>
                            <Button className="btn" variant="warning"
                           // onClick={() => history.push(`/edit/${person.id}`)}
                            >Edit</Button>
                            <Button className="btn"
                            onClick={()=>Deletestudent(person.id)}
                             variant="danger">Delete</Button>
                          
                        </Card.Body>
                    </Card>
                ))}
                </div>
           






        </BaseApp>






    )
}
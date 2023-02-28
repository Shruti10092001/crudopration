import React, {useState} from "react";
import{Button, Form} from "react-bootstrap"
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {link,useNavigate} from "react-router-dom"
// import { useState } from "react";
function Add(){
    
       const[name,setName]= useState('');
       const[age,setAge]=useState('');
       let history = useNavigate();
       const handleSubmit=(e)=>{
        e.preventDefault();
        const ids= uuid();
        let uniqueId= ids.slice(0,8);
        
        let a= name,
        b=age;
        Employees.push({id:uniqueId,Name:a,Age:b});
        history("/")

       }
       return(
        <>
        <Form className="d-gridgap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name" required onChange={(e)=>setName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter age" required onChange={(e)=>setAge(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">SUBMIT</Button>
        </Form>
        </>
       )
}
export default Add;
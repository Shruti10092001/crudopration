import React, {useState, useEffect} from "react";
import{Button, Form} from "react-bootstrap"
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {link,useNavigate} from "react-router-dom"
function Edit(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[id,setId]=useState("");
    let history = useNavigate();
    var index=Employees.map(function(e){
        return e.id
    }).indexOf(id);
    const handleSubmit=(e)=>{
        e.preventDefault();
        // const ids= uuid();
        // let uniqueId= ids.slice(0,8);
        
        let a= Employees[index];
        a.Name=name;
        a.Age=age;
        // Employees.push({id:uniqueId,Name:a,Age:b});
        history("/")

       }
       useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem("Age"))
        setId(localStorage.getItem("Id"))
       },[])
    return(
        <>
        <Form className="d-gridgap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name" value={name} required onChange={(e)=>setName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter age" value={age} required onChange={(e)=>setAge(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">UPDATE</Button>
        </Form>
        </>
    )
}
export default Edit;
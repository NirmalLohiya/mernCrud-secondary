import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Arrays from "./arrays";


function Update() {
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const nevigate=useNavigate()

    let index=Arrays.map((e)=>{
        return e.id
    }).indexOf(id);

    const handleUpdate=(e)=>{
        e.preventDefault()
        if(name===""|| age===""){
            alert('invaild input')
            return;
        }
        let a=Arrays[index]
        a.Name=name
        a.Age=age
        nevigate('/')
    }; 
    // fetch the data use useeffect hook 
    useEffect(()=>{
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
        setId(localStorage.getItem("id"));
    },[])
    return (
        <div>
            <h1>this is update page</h1>
            <div>
                <Form onSubmit={handleUpdate}>
                <Form.Group>
                        <Form.Label>id </Form.Label>
                        <Form.Control value={id} disabled />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>setName(e.target.value)} value={name}  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control onChange={(e)=>setAge(e.target.value)} value={age}  />
                    </Form.Group>
                    <input type="submit" value="update" name="" id="" />
                    <Link to={'/'} ><input type="submit" value="back" name="" id="" /></Link>
                </Form>
            </div>
        </div>
    )
}
export default Update;
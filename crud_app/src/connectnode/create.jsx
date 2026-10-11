import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button,Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Create=()=>{
    const[user,setUser]=useState([]);
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:5000/api")
        .then((res)=>{
            setUser(res.data)
        })
        .catch(err=>console.log(err))
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newUser={
            _id:user.length+1,
            name:name,
            age:age
        }
        axios.post("http://localhost:5000/api/post",newUser)
        .then((res)=>{
            setUser([...user,res.data])
            navigate('/')
        })
        .catch((err)=>console.log(err))
    }
    return (
        <>
        <div>
            <h1>this is create page with backend node connected </h1>
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="enter name" onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control placeholder="enter age" onChange={(e)=>setAge(e.target.value)} />
                    </Form.Group>
                    <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
                    <Link to={'/'}><Button>Back</Button></Link>
                </Form>
            </div>
        </div>
        </>
    );
};
export default Create;


 
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const Create = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const nevigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then((resp) => {
                setUsers(resp.data)
            })
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // create new user
        const newUser={
            id:users.length+1,
            Name:name,
            Age:parseInt(age),
        }

        // send the post reqest to server side
        axios.post('http://localhost:5000/users',newUser)
        .then((resp)=>{
            setUsers([...users,resp.data]);
        })
        nevigate('/')
    }
    return (
        <>
            <div>
                <h1>this is json serve create pages</h1>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="enter the name" onChange={(e)=>setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control placeholder="enter the age" onChange={(e)=>setAge(e.target.value)} />
                        </Form.Group>
                        <input type="submit" value="submit" />
                    </Form>
                    <div>
                        {/* <Button onClick={(e)=>handleSubmit(e)}>Submit</Button> */}
                        <Link to='/'><Button>Back</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Create;

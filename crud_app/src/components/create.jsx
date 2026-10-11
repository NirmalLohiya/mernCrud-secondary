import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Form } from "react-bootstrap";
import Arrays from './arrays'

function Create() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const nevigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let a = name, b = age
        if (name == "" || age == "") {
            alert("invalid input")
            return
        }
        Arrays.push({ id: Arrays.length + 1, Name: a, Age: b });
        nevigate('/')
    }
    return (
        <div>
            <h1>create  and fill to all yor detail !</h1>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>setName(e.target.value)} placeholder="enter name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control onChange={(e)=>setAge(e.target.value)} placeholder="enter age" />
                    </Form.Group>
                    <input type="submit" value="submit" name="" id="" />
                    <Link to={'/'} ><input type="submit" value="back" name="" id="" /></Link>
                </Form>
            </div>
        </div>
    )
}
export default Create; 
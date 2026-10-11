import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

const Update = () => {
    const [user, setUser] = useState({ name: "", age: "" });
    const { _id } = useParams(); // Get the _id from the URL
    const navigate = useNavigate(); // For navigation after update

    // Fetch the user data when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:5000/api/${_id}`)
            .then((res) => {
                setUser(res.data); // Set the fetched user data to state
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [_id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Handle form submission and update user
    const handleUpdate = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Send updated data to the backend
        axios.put(`http://localhost:5000/api/update/${_id}`, user)
            .then(() => {
                // Navigate back to home page after update
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>This is the update page with backend Node connected</h1>
            <div>
                <Form onSubmit={handleUpdate}> 
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control value={user._id} disabled />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"  
                            value={user.name}  
                            onChange={handleChange}  
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="age"
                            value={user.age}  
                            onChange={handleChange}  
                        />
                    </Form.Group>
                    <Button type="submit">Update</Button>  
                    <Link to={'/'}><Button>Back</Button></Link>
                </Form>
            </div>
        </div>
    );
};

export default Update;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const [user, setUser] = useState({ Name: "", Age: "" });
    const { id } = useParams();  // Get the user ID from URL params
    const navigate = useNavigate();

    // Fetch the user data when the component mounts or `id` changes
    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)  // Fetch user by id
            .then((resp) => {
                setUser(resp.data);  // Set the fetched user data to the state
            })
            .catch((err) => {
                console.error("Error fetching user:", err);  // Handle fetch errors
            });
    }, [id]);  // Re-run when the `id` changes

    // Handle changes to input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });  // Update the corresponding field
    };

    // Handle the form submission
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, user)  // Send PUT request to update the user
            .then(() => {
                navigate("/");  // Redirect to the home page after the update
            })
            .catch((err) => {
                console.error("Error updating user:", err);  // Handle update errors
            });
    };
    return (
        <>
            <div>
                <h1>Update User Information</h1>
                <div>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                disabled
                                value={id} // Display the user ID, but keep it disabled
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Name"
                                value={user.Name}  // Bind the value to the `Name` field
                                onChange={handleChange}  // Update the user state on change
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                name="Age"
                                value={user.Age}  // Bind the value to the `Age` field
                                onChange={handleChange}  // Update the user state on change
                            />
                        </Form.Group>
                        <Button type="submit">Update</Button>
                        <Link to="/">
                            <Button variant="secondary">Back</Button>
                        </Link>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Update;

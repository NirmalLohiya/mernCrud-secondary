import React, { useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/users")
        // axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                setUsers(resp.data)
            })
    });

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(() => {
                setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
            })
            .catch((err) => {
                console.error('Error deleting user:', err);
            });
    };
    return (
        <>
            <div align="center">
                <h1>this is json server first home page</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                        {/* <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.Name}</td>
                                <td>{user.Age}</td>
                                {/* <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td> */}
                                <td><Link to={`/update/${user.id}/`}><Button>update</Button></Link>
                                <Button 
                                        onClick={() => handleDelete(user.id)} 
                                        variant="danger">
                                        Delete
                                    </Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <Link to="create"><Button>Create</Button></Link>
                </div>
            </div>
        </>
    )
}
export default Home
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,Link, useParams } from "react-router-dom";
import { Table,Button } from "react-bootstrap";


const Home=()=>{
    const[users,setUsers]=useState([]);
    const{_id}=useParams()
    

    useEffect(()=>{
        axios.get('http://localhost:5000/api')
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((err)=>console.log("data is not the fetch",err));
    });

    const handleDelete=(e,userId)=>{
        e.preventDefault()
        axios.delete(`http://localhost:5000/api/delete/${userId}`)
        .then((res)=>{
            setUsers(users.filter(item=>item._id!==userId));
            // alert("data deleted sccesfll")
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <>
        <div align="center">
            <h1>Welcome to visit this crud_app</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td><Link to={`/update/${user._id}`}><Button>update</Button></Link>
                            <Button onClick={(e)=>handleDelete(e,user._id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <Link to={'/create'}><Button>Create</Button></Link>
            </div>
        </div>
        </>
    )
}
export default Home;
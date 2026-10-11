import React from 'react'
import { Table } from 'react-bootstrap';
import Arrays from './arrays';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    let nevigate = useNavigate()

    function setId(id, name, age) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
    }

    function handleDelete(id) {
        let index = Arrays.map(function (e) {
            return e.id
        }).indexOf(id);
        Arrays.splice(index, 1);
        nevigate('/')
    }

    return (
        <div align="center">
            <h1>this is m home page</h1>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {Arrays.map((item) => (
                    <tbody>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td><Link to={'update/'}><button onClick={()=>setId(item.id,item.Name,item.Age)}>update</button></Link>
                                <button onClick={()=>handleDelete(item.id)}>delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            <div>
                <Link to={'create/'}><button>Create</button></Link>
            </div>
        </div>
    )
}
export default Home;
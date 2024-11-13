import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { deleteEmployee, ListEmployees } from '../components/EmployeeService'
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
    const [employees,setEmployees]=useState([])

    const navigator=useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        ListEmployees().then((response)=>{
            console.log(response.data);
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator("/add-employee")
    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <button type="button" className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>

                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;

import React, {useEffect, useState} from 'react'
import { listEmployees , deleteEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'



export const ListEmployee = () => {


    const [employees, setEmployee] = useState([]);
    const navigator = useNavigate();
    


    const addNewEmployee = ()=>{
        navigator("/add-employee")


    }

    useEffect(()=>{
        getAllEmployees();

    }, [])

    const getAllEmployees = ()=>{
        listEmployees().then((response) =>{
            setEmployee(response.data);
        }).catch(err => console.log(err))


    }

    const updateEmployee = (id) =>{
        navigator(`/edit-employee/${id}`)
    }

    const deleteEmployeeById = (id) =>{
        console.log(id)


        deleteEmployee(id).then((response)=>{
            getAllEmployees()
            navigator(`/employees`)
        }).catch(err =>{
            console.log(err)
        });
        
    }









  return (
    <div className='container-xl ' style={{maxHeight:"50%"}}>
         <h1 className='text-center' style={{margin:'50px'}}> List of Employee</h1>

         <button 
            type="button" 
            class="btn btn-outline-success" 
            onClick={addNewEmployee}
            style={{marginBottom:'30px',width:"35%"}} >
            Add Employee
         </button>

        <table className='table  table-striped table-hover table-bordered ' >
            <thead>
               <tr>
                    <th scope='col'  style={{ width: '5%' }} > Id</th>
                    <th scope='col'  style={{ width: '15%' }}> First Name</th>
                    <th scope='col'  style={{ width: '15%' }}> Last Name</th>
                    <th scope='col'  style={{ width: '40%' }}> Email</th>
                    <th scope='col'  style={{ width: '25%' }}>
                        <div>
                            Actions

                        </div>
                    </th>
    
               </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                    <tr key={employee.id}>
                        <th scope='row'  style={{ width: '5%' }}>{employee.id}</th>
                        <td  style={{ width: '15%' }} >{employee.firstName}</td>
                        <td  style={{ width: '15%' }} >{employee.lastName}</td>
                        <td  style={{ width: '40%' }}  >{employee.email}</td>
                        <td style={{ width: '25%' }}  >
                        <div className='row '>
                        <button  onClick={()=> updateEmployee(employee.id)} className='col btn btn-success' style={{margin:"10px 15px  0px"}}>Update</button>
                        <button onClick={()=> deleteEmployeeById(employee.id)} className='col btn btn-success' style={{margin:"10px 15px 0px "}} >Delete</button>
                        

                        </div>

                        </td>
                    </tr>
                    )
                }
                
            </tbody>
         </table>

     
         
    </div>

  )
}

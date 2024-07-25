import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate , useParams} from 'react-router-dom';

 const EmployeeComponent = () => {

    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    
    const {id} = useParams();

    const navigator = useNavigate();

    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmail(response.data.lastName);
            }).catch(err => console.log(err))
        }
     },[]);
    const feedback = ["invalid-feedback","valid-feedback"];

    const [errors, setErrors] =useState({
        firstName: "",
        lastName:"",
        email : ""
    })

    const validateForm = () =>{
        let valid = true;

        const errorsCopy = {...errors}

        if(firstName.trim()){
            errorsCopy.firstName = "";

        }else{
            errorsCopy.firstName = "First Name is required"
            valid = false
        }

        if(lastName.trim()){
            errorsCopy.lastName = "";

        }else{
            errorsCopy.lastName = "Last Name is required"
            valid= false
        }

        if(email.trim()){
            errorsCopy.email = ""
        }else{
            errorsCopy.email = "Email is required"
            valid = false
        }

        setErrors(errorsCopy);

        return valid;
    }


    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, email};


            if(id){
                updateEmployee(id,employee).then((response)=>{
                    navigator('/employees')
                    
    
                }).catch(err => console.log(err))
            }else{
                createEmployee(employee).then((response) => {
            
                    navigator("/employees")}
                ).catch((err)=>console.log(err))
            }


        }


    }

    

  return (
    <div className='container-xl' style={{marginTop:"40px"}}>

        <div className='card g-3 border-succes mb-3 border-succes   ' style={{marginTop:"100px", padding:"30px" }}>

  
            <h1 className='text-center' style={{marginBottom:"20px"}}>{id ? "Update Employee" : "Add Employee"}</h1>
            <form className='row ' >                
                    <div className='form-floating mb-3 col'>
                        <input type="text" 
                            className={`form-control ${errors.firstName ? "is-invalid": "" }` } 
                            placeholder="First name" 
                            aria-label="First name"
                            value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}
                            
                        ></input>
                        {errors.firstName  && <div className={feedback[0]}>{errors.firstName}</div>}
                        <label for="floatingInput" className='cen'>First Name</label>
                

                    </div>

                    <div className='form-floating mb-3 col'>
                        <input 
                            type="text" 
                            className={`form-control ${errors.firstName ? "is-invalid": "" }` } 
                            placeholder="Last name" 
                            aria-label="Last name"
                            value={lastName}
                            onChange={(e)=> setLastName(e.target.value)}
                            ></input>
                            {errors.lastName  && <div className={feedback[0]}>{errors.lastName}</div>}
                        <label for="floatingInput" className='cen'>Last Name</label>


                    </div>
                    <div class="form-floating mb-3">
                        <input 
                            type="email" 
                            className={`form-control ${errors.firstName ?"is-invalid": "" }` } 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) =>setEmail(e.target.value)}
                            ></input>
                            {errors.email  && <div className={feedback[0]}>{errors.email}</div>}
                        <label for="floatingInput" className='cen'>name@example.com</label>
                    </div>
                    <button className="cool-button" onClick={saveOrUpdateEmployee}>{id? "Update" : "Save"}</button>

            </form>

        </div>
        

    </div>
   
  )
}

export default EmployeeComponent





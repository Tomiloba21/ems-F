import { useState } from 'react'

import './App.css'
import { ListEmployee } from './components/ListEmployee'
import HeaderComponent from './components/HeaderComponent'
import { FooterComponents } from './components/FooterComponents'
//Configuring the rout component within the react localHost
import {BrowserRouter,Route,Routes} from "react-router-dom"
import EmployeeComponent from './components/EmployeeComponent'



function App() {

  return (
    <>
    <BrowserRouter>
        <HeaderComponent />
        <Routes>
        {/* http://localhost:3000/*/}
          <Route path='/' element={<ListEmployee/>}>            
          </Route>

          {/* http://localhost:3000/emloyees */}

          <Route path='/employees' element={<ListEmployee/>}></Route>


        {/* http://localhost:3000/add-employee */}  
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        
        {/* http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        
        </Routes>
        
        <FooterComponents/>

    </BrowserRouter>

      
      
    </>
  )
}

export default App

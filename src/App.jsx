import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponet'
import EmployeeComponent from './components/EmployeeComponent'


function App() {
  return (
    <>
      <HeaderComponent/>
      <Routes>
        <Route path='' element={<ListEmployeeComponent/>}></Route>
        <Route path='/all' element={<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </>
  )
}

export default App

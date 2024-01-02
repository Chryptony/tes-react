import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import { 
    HomePage,
    Lecturer,
    Student
} from '../pages'

const MainContent = () => {
  return (
    <div className="container p-3">
        {/* <h3>dashboard class</h3> */}

        <Routes>
            <Route path="/" element={
                <HomePage></HomePage>
            }></Route>
            <Route path="/lecturers" element={
                <Lecturer></Lecturer>
            }></Route>
            <Route path="/students" element={
                <Student></Student>
            }></Route>
        </Routes>
    </div>
  )
}

export default MainContent
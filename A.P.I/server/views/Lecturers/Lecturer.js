import React from 'react'
import { Outlet } from 'react-router-dom'

const Lecturer = () => {
  return (
    <div className="my-3">
      <div className="w-100 my-3">
        <div className="flex">
          <h3>Lecturer</h3>
          <p>Lecturers list of this classroom</p>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Lecturer
import React from 'react'
import { FiPlusCircle } from "react-icons/fi";

const Lecturer = () => {
  return (
    <div className="my-3">
      <div className="w-100 my-3">
        <div className="flex">
          <h3>Lecturer</h3>
      <button className="btn btn-sm btn-primary">
        <span className="me-2">
        <FiPlusCircle></FiPlusCircle>
        </span>
        Add lecturerss
      </button>
        </div>
      
      </div>
      
    </div>
  )
}

export default Lecturer
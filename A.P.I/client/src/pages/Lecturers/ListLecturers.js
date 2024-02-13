import React, { useState, useEffect} from 'react'
import { getLecturers, removeLecturer } from '../../axios/lecturerAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { FiPlusCircle } from "react-icons/fi"
import {
  Link
} from'react-router-dom'

const ListLecturers = () => { 
  const [Lecturers, setLecturers] = useState([])

  useEffect(() => {
    // callback untuk mengambil data lecturer dari folder axios
    getLecturers(result => console.log(result) )
  }, [])
  
  const deleteHandler = (id) => {
    removeLecturer(id)
    getLecturers(result => setLecturers(result))
  }

  return (
    <>
    <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <Link to="/lecturers/create" className="btn btn-sm btn-primary my-2">
              <span className="me-2">
                <FiPlusCircle></FiPlusCircle>
              </span>
              Add Lecturer
            </Link>
          </div>
          <div className="w-100">
            <table className="table table-bordered">
              <thead>
                <tr className="table-primary">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                Lecturers.length > 0 ?
                Lecturers.map (lecturer => {
                  const{ id, name, age, subject} = lecturer
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{age} years old</td>
                      <td>{subject}</td>
                      <td>
                        <Link to={`/lecturers/edit/${id}`} className="btn btn-sm btn-info">edit</Link>
                        <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr> 
                  ) 
                }) :<LoadingBar></LoadingBar>
              }
              </tbody>
            </table>
          </div>
        </div>
      </div> 
    </>
  )
}

export default ListLecturers
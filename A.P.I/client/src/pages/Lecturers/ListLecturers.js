import React, { useState, useEffect} from 'react'
import { getLecturers } from '../../axios/lecturerAxios'
import LoadingBar from '../../helpers/LoadingBar'

const ListLecturers = () => { 
  const [Lecturers, setLecturers] = useState([])

  useEffect(() => {
    // callback untuk mengambil data lecturer dari folder axios
    getLecturers(result => console.log(result) )
  }, [])
  return (
    <>
    <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
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
                      <td></td>
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
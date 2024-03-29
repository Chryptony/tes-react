import React,{useState,useEffect} from 'react'
import {accountLecturer, editLecturer} from'../../axios/lecturerAxios'
import { useNavigate, useParams} from 'react-router-dom'

const EditLecturer = () => {
  const [form, setForm] = useState({
    name: "",
    subject:"",
    age: 0,
  })

  const navigation = useNavigate()
  const params = useParams()

  const getLecturerInfo = () => {
    const {id} = params
    accountLecturer(+id, result => {
        setForm({
            name: result.name,
            subject: result.subject,
            age: result.age
        })
        console.log(result)
    }) 
  }

  useEffect(() => {
    getLecturerInfo()
  }, [])

  const submitHandler = () => {
    editLecturer(+params.id, form)
    navigation('/lecturers')
  }

  return (
    <>
    <div className="row my-3">
      <div className="w-100 text-center">
        <h5>edit Lecturers</h5>
        <hr/>
      </div>
      <div className="w-75 mx-auto">
        <div className="mb-3">
          <label>Name: </label>
          <input 
          value={ form.name }
          onChange={(e) => setForm ({ ...form, name: e.target.value})} //(e)= even
          type="text" 
          className="form-control"></input>
        </div>
        <div className="mb-3">
          <label>Subject: </label>
          <input 
          value={ form.subject}
          onChange={(e) => setForm ({ ...form, subject: e.target.value})} //(e)= even
          type="text" 
          className="form-control"></input>
        </div>
        <div className="mb-3">
          <label>Age: </label>
          <input 
          value={ form.age}
          onChange={(e) => setForm ({ ...form, Age: e.target.value})} //(e)= even
          type="number" 
          className="form-control"></input>
        </div>
        <div className="mb-3">
          <button  onClick={() => submitHandler()} className="btn btn-block btn-primary"> Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditLecturer
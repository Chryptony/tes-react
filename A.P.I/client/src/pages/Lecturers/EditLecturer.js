import React,{useState,useEffect} from 'react'
import {accountLecturer, editLecturer} from'../../axios/lecturerAxios'
import { useNavigate, useParams} from 'react-router-dom'

const EditLecturer = () => {
  const [form, setForm] = useState({
    name:"",
    subject: "",
    age:0,
    action:""
  })

  const navigation = useNavigate()
  const params = useParams()

  useEffect(() => {
    const {id} = params
    accountLecturer(+id, result => {
        setForm({
            name: result.name,
            subject: result.subject,
            age: result.age
        })
    }) 
  }, [])

  const submitHandler = () => {
    editLecturer(form)
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
          onChange={(e) => setForm ({ ...form, name: e.target.value})} //(e)= even
          type="text" 
          className="form-control"></input>
        </div>
        <div className="mb-3">
          <label>Subject: </label>
          <input 
          onChange={(e) => setForm ({ ...form, subject: e.target.value})} //(e)= even
          type="text" 
          className="form-control"></input>
        </div>
        <div className="mb-3">
          <label>Age: </label>
          <input 
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
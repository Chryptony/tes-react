import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/lecturers'

const getLecturers = async (cb) => {
    try {
        let lecturers = await axios({ // gak boleh [] , kalau [] akan error
            method: "get",
            url: URL 
        })
        cb(lecturers.data)
        console.log(lecturers)
    }catch (e) {
        console.log(e)
    }
}
const addLecturer = () => {

}
const editLecturer = () => {
    
}
const removeLecturer = () => {
    
}
const accountLecturer = () => {
    
}

export {
    getLecturers,
    addLecturer,
    editLecturer,
    removeLecturer,
    accountLecturer
}
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
const addLecturer = async (lecturer) => {
    try {
        let result =  await axios({
            method: 'POST',
            url: URL + "/create",
            data: lecturer
        })
        console.log(result.data)
    } catch (e) {
        console.log(e)
    } //e disini adalah error bukan even
}
const editLecturer = () => {
    
}
const removeLecturer =  async (id) => {
    try {
        let result = await axios ({
            method: 'DELETE',
            url: URL + "/delete" + id
        })
    } catch (e) {
        console.log (e)
    }
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
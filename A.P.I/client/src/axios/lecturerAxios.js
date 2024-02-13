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

        Swal.fire(
            'Add Lecturer',
            'Lecturer has been added',
            'success'
        )
    } catch (e) {
        console.log(e)
    } //e disini adalah error bukan even
}
const editLecturer = async(id, lecturer) => {
    try {
        let result = await axios ({
            method:'PUT',
            url: URL + '/update/'+ id,
            data: lecturer
        })

        Swal.fire(
            'Edit Lecturer' + id,
            'Lecturer ' + id + 'has been ',
            'success'
        )
        console.log(result.data)
    } catch (e) {
        console.log (e)
    }
}
const removeLecturer = async (id) => {
    try {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: "DELETE",
                    url: URL + '/delete/' + id
                })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    } catch (e) {
        console.log(e)
    }
}
const accountLecturer = async (id,cb) => {
    try{
        let result = await axios ({
            method:"GET",
            url: URL + '/information/'+id
        })
        cb(result.data)
    } catch (e){
        console.log (e)
    }
}

export {
    getLecturers,
    addLecturer,
    editLecturer,
    removeLecturer,
    accountLecturer
}
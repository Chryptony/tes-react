const studentRoute = require('express').Router()
const StudentController = require ( '../controllers/StudentController')

studentRoute.get('/', StudentController.getStudent);
studentRoute.get('/detail/:id', StudentController.getStudentById);
studentRoute.get('/create', StudentController.create);
studentRoute.post('/create', StudentController.createPage)
studentRoute.post('/cancel', StudentController.cancel)
studentRoute.delete('/delete/:id', StudentController.delete);
studentRoute.get("/edit/:id",StudentController.editPage)
studentRoute.post("/edit/:id",StudentController.edit);

module.exports = studentRoute;
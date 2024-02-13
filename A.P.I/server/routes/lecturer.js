const lecturerRoute = require('express').Router()
const LecturerController = require ( '../controllers/LecturerController')

lecturerRoute.get('/', LecturerController.getLecturer);
lecturerRoute.get('/information/:id', LecturerController.getLecturerById);
// lecturerRoute.get('/create', LecturerController.create);
lecturerRoute.post('/create', LecturerController.create)
lecturerRoute.post('/cancel', LecturerController.cancel)
lecturerRoute.delete('/delete/:id', LecturerController.delete);
// lecturerRoute.get("/update/:id",LecturerController.updatePage)
lecturerRoute.put("/update/:id",LecturerController.update);

module.exports = lecturerRoute;
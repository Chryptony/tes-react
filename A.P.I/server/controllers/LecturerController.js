const { lecturer} = require ("../models");

class LecturerController {
    static getLecturer(req,res) {
        lecturer.findAll()
        .then((lecturer) => {
            res.render('ListLecturers.js', {lecturer})
        })
        .catch((err)=> {
            res.json(err);
        });
    }
    static getLecturerById(req, res) {
        const id = Number(req.params.id);
        lecturer.findByPk(id)
        .then((result) => {
            res.json(result);
        })
        .catch((result) => {
            result 
            ? res.render('CreateLecturer.js',)
            : res.redirect('CreateLecturer.js');
        });
    }
    static createPage(req, res) {
        res.render('CreateLecturer.js');
    }
    static create(req, res) {
        const { name, subject, age} = req.body;
        lecturer.create({
            name,
            subject,
            age,
        })
        .then ((result) => {
            result
            ? res.redirect('../../client/pages/Lecturers/ListLecturer.js')
            : res.redirect('../../client/pages/Lecturers/CreateLecturer.js');
        })
        .catch((result)=> {
            result 
            ? res.render('../../client/pages/Lecturers/CreateLecturer.js')
            : res.redirect('../../client/pages/Lecturers/CreateLecturer.js');
        });
    }
    static cancel(req,res) {
        //
        res.render('ListLecturer.js')
    }
    static delete(req, res) {
        const id = +req.params.id;
        console.log(id)
        lecturer.destroy({
            where:{id},
        })
        .then((result) => {
            result
              ? res.redirect('ListLecturer.js')
            : res.json({ message: `Id ${id} cannot be deleted`});
        })
        .catch((err) => {
            res.json(err);
        });
    }
    static updatePage(req, res) {
        const id = +req.params.id;
        lecturer.findByPk(id)
          .then((lecturer) => {
            res.render("CreateLecturer.js", { lecturer });
          })
          .catch((err) => res.json(err));
      }
    static update(req, res) {
        //
        const id = +req.params.id;
        const { name, subject, age } = req.body;
        lecturer.update(
          {
            name,
            subject,
            age,
          },
          {
            where: { id },
          }
        )
          .then((result) => {
            result[0]
              ? 
              // res.json({ message: `Id ${id} has been edited` })
              res.redirect('ListLecturer.js')
              : res.json('{ message: `Id ${id} has not been edited` }');
          })
          .catch((err) => {
            res.json(err);
          });
    }
}

module.exports = LecturerController;
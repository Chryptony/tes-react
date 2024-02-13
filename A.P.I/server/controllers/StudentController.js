const { student} = require ("../models");

class StudentController {
    static getStudent(req,res) {
        student.findAll()
        .then((student) => {
            res.render('ListStudent.js', {student})
        })
        .catch((err)=> {
            res.json(err);
        });
    }
    static getStudentById(req, res) {
        const id = Number(req.params.id);
        student.findByPk(id)
        .then((result) => {
            res.json(result);
        })
        .catch((result) => {
            result 
            ? res.render('Createstudent.js',)
            : res.redirect('Createstudent.js');
        });
    }
    static createPage(req, res) {
        res.render('Createstudent.js');
    }
    static create(req, res) {
        const { name, subject, age} = req.body;
        student.create({
            name,
            subject,
            age,
        })
        .then ((result) => {
            result
            ? res.redirect('ListStudent.js')
            : res.redirect('Createstudent.js');
        })
        .catch((result)=> {
            result 
            ? res.render('Createstudent.js')
            : res.redirect('Createstudent.js');
        });
    }
    static cancel(req,res) {
        //
        res.render('ListStudent.js')
    }
    static delete(req, res) {
        const id = +req.params.id;
        console.log(id)
        student.destroy({
            where:{id},
        })
        .then((result) => {
            result
              ? res.redirect('ListStudent.js')
            : res.json({ message: `Id ${id} cannot be deleted`});
        })
        .catch((err) => {
            res.json(err);
        });
    }
    static editPage(req, res) {
        const id = +req.params.id;
        student.findByPk(id)
          .then((student) => {
            res.render("Createstudent.js", { student });
          })
          .catch((err) => res.json(err));
      }
    static edit(req, res) {
        //
        const id = +req.params.id;
        const { name, subject, age } = req.body;
        student.update(
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
              res.redirect('ListStudent.js')
              : res.json('{ message: `Id ${id} has not been edited` }');
          })
          .catch((err) => {
            res.json(err);
          });
    }
}

module.exports = StudentController;
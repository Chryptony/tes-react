const route = require("express").Router();

route.get("/", (req,res)=> {
    // res.json({
    //     message: "Home Page",
    // });

    res.render('home.ejs')
});
route.get("/lecturers", (req, res) => {
  
    res.render('./lecturers/index.ejs')
});
route.get("/students", (req, res) => {
    
    res.render('./students/index.ejs')
});

const lecturerRoutes = require("./lecturer");
const studentRoutes = require("./student");

route.use("/lecturers", lecturerRoutes);
route.use('/students', studentRoutes);
// stocknya harus pakai s di kata stock ("/stocks") . kalau gak pakai s jadinya error

module.exports = route;
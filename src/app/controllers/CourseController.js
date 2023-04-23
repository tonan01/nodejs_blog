const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  // Get /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // get
  create(req, res, next) {
    res.render("courses/create");
  }
  // post
  store(req, res, next) {
    const formData = req.body;
    formData.image =
      "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png";
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  //Sua
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //PUT
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //Delete
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();

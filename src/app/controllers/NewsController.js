class NewsController {
  //Get /News
  index(req, res) {
    res.render("news");
  }

  //Get /News/:slug
  show(req, res) {
    res.send("New details");
  }
}

module.exports = new NewsController();


class SiteController {
  //Get /
  index(req, res) {
    res.render("Home");
  }

  //Get /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

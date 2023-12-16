const axios = require("axios");
exports.home_route = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(`Error: ${err}`);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userData) {
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.send(`Error: ${err}`);
    });
};

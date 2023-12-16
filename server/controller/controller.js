const Userdb = require("../model/model");
// for crearing new user
exports.creating_user = (req, res) => {
  if (!req.body) {
    return res.status(404).send({ message: `User fields cannot be empty` });
  }
  //creating new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  //saving user into database
  user
    .save(user)
    .then((data) => {
      //   res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({ message: `Error while creating user ${err}` });
    });
};
// for searching or fetching all users
exports.finding_user = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `User is not present` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error while fetching user: ${err}` });
      });
  } else {
    Userdb.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: `Error while fetching user data: ${err}` });
      });
  }
};
// for updaring user
exports.updating_user = (req, res) => {
  if (!req.body) {
    return res.status(404).send({ message: `User fields cannot be empty` });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Error While fetching data` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error while fetching data: ${err}` });
    });
};
// for deleting user
exports.deleting_user = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not is not present` });
      } else {
        res.send({ message: `Data deleted Successfully` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error while deleting data ${err}` });
    });
};

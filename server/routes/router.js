const express = require("express");
const route = express.Router();
const service = require("../services/render");
const controller = require("../controller/controller");
// @description for Home_page
//Method: GET
route.get("/", service.home_route);
// @description for adding new user
//Method: GET
route.get("/add-user", service.add_user);
// @description for updaring user
//Method: GET
route.get("/update-user", service.update_user);

//RestFull API's
//Creating users
route.post("/api/users", controller.creating_user);
//Reading or finding users
route.get("/api/users", controller.finding_user);
//updating users
route.put("/api/users/:id", controller.updating_user);
//deleting users
route.delete("/api/users/:id", controller.deleting_user);

module.exports = route;

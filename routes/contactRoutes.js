const express = require("express");
const expressRouter = express.Router();
const {
  getContacts,
  addContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactControllers");

expressRouter.get("/", getContacts);

expressRouter.post("/", addContact);

expressRouter.get("/:id", getContact);

expressRouter.put("/:id", updateContact);

expressRouter.delete("/:id", deleteContact);

module.exports = {
  expressRouter,
};

const express = require("express");
const {
  createAccount,
  getHistoryTrasnfer,
  loging,
} = require("../controllers/user.controller");
const router = express.Router();
router.get("/:id/history", getHistoryTrasnfer);
router.post("/signup", createAccount);
router.post("/loging", loging);

module.exports = { usersRouter: router };

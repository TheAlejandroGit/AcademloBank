const { User } = require("../models/user.model");
const { Transfer } = require("../models/transfer.model");

const getHistoryTrasnfer = async (req, res) => {
  try {
    const { id } = req.params;
    const trasnfer = await User.findAll({
      where: { id },
      include: [{ model: Transfer }],
    });
    if (!trasnfer) {
      return res.status(404).json({
        status: "error",
        message: "User not found given that id",
      });
    }
    res.status(200).json({
      trasnfer,
    });
  } catch (error) {
    console.log(error);
  }
};

const createAccount = async (req, res) => {
  try {
    const { name, password } = req.body;
    const accountNumber =
      Math.floor(Math.random() * (999999 - 100000)) + 100000;
    const newAccount = await User.create({
      name,
      password,
      accountNumber,
    });
    res.status(201).json({ newAccount });
  } catch (error) {
    console.log(error);
  }
};

const loging = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;
    const userLoging = await User.findOne({
      where: { accountNumber, password },
    });
    if (!userLoging) {
      return res.status(404).json({
        status: "Error",
        message: "User or Password invalid",
      });
    }
    res.status(201).json({
      status: "succes",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {  getHistoryTrasnfer, createAccount, loging };

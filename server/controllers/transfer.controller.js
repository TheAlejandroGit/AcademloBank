const { User } = require("../models/user.model");
const { Transfer } = require("../models/transfer.model");

const transfer = async (req, res) => {
  try {
    const { senderUserId, receiverUserId, amount } = req.body;

    const receiverAccount = await User.findOne({
      where: { accountNumber: receiverUserId },
    });
    const senderAccount = await User.findOne({
      where: { accountNumber: senderUserId },
    });

    if (!receiverAccount) {
      return res.status(404).json({
        status: "error",
        msg: "Account not found",
      });
    }

    if (senderAccount.amount < amount) {
      return res.status(404).json({
        status: "error",
        msg: "Amount is not valid",
      });
    }

    receiverAccount.amount += Number(amount);
    senderAccount.amount -= Number(amount);

    await User.update(
      { amount: receiverAccount.amount },
      { where: { accountNumber: receiverUserId } }
    );
    await User.update(
      { amount: senderAccount.amount },
      { where: { accountNumber: senderUserId } }
    );

    await Transfer.create({
      receiverUserId: receiverUserId,
      senderUserId: senderUserId,
      amount,
    });

    res.status(200).json({});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { transfer };

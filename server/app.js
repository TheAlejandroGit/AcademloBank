const express = require("express");
const cors = require("cors");
const { transferRoute } = require("./routes/transfer.routes");
const userRoutes = require("./routes/user.routes");
const { usersRouter } = require("./routes/user.routes");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", usersRouter);
app.use("./api/v1/transfer", transferRoute);

module.exports = { app };

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const loggerMiddleWare = require("./middlewares/logger.middleware");
const authMiddleWare = require("./middlewares/auth.middleware");
const privateRouter = require("./routes/private.router");
const publicRouter = require("./routes/public.router");
const authRouter = require("./routes/auth.router");
const connectMongoDB= require("./models/mongo.client");

(async () => {
  try {
    await connectMongoDB();
  } catch (error) {
      console.error("Ha ocurrido un error al conectarse a la base de datos de MongoDB", error);
    process.exit(1)
  }
}
)();



app.use(express.json());
app.use(loggerMiddleWare);
app.use(morgan("dev"));
app.use(cors());


app.use("/", publicRouter);

app.use("/v1/auth", authRouter);

app.use(authMiddleWare);

// Private
app.use("/v1", privateRouter);

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Listen & serve PORT: ${PORT}`);
// });
module.exports = app;

// Solo escuchá el puerto si el archivo se ejecuta directamente (desarrollo local)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listen & serve PORT: ${PORT}`);
  });
}
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
const connectMongoDB = require("./models/mongo.client");

// Conexión a MongoDB (no usar process.exit en serverless)
(async () => {
  try {
    await connectMongoDB();
  } catch (error) {
    console.error(
      "Ha ocurrido un error al conectarse a la base de datos de MongoDB",
      error
    );
    // En Vercel, NO terminar el proceso; deja que la request falle y revisa logs.
  }
})();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleWare);

// Rutas públicas
app.use("/", publicRouter);

// Rutas de autenticación públicas
app.use("/v1/auth", authRouter);

// Middleware de auth para el resto
app.use(authMiddleWare);

// Rutas privadas
app.use("/v1", privateRouter);

// Exportar la app para que Vercel la use como handler
module.exports = app;

// Escuchar solo en local (npm run dev)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listen & serve PORT: ${PORT}`);
  });
}

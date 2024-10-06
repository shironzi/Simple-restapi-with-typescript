import express from "express";
import dotenv from "dotenv";

import sequelize from "./db/database";
import errorHandler from "./middleware/errorHandler";
import bookRoutes from "./routes/bookRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await sequelize.sync({ alter: true, force: true }); // alter true for development use only || use force: true when to model to be recreate
    console.log("All models were synchronized successfully.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`The server is running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error("Unable to connect to database: ", error);
    process.exit(1);
  }
};

startServer();

app.use('/book', bookRoutes);

app.use(errorHandler);

export default app;

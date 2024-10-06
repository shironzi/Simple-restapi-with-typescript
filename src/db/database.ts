import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } =
  process.env;

if (
  !DB_NAME ||
  !DB_USER ||
  !DB_PASSWORD ||
  !DB_HOST ||
  !DB_DIALECT ||
  !DB_PORT
) {
  throw new Error(
    "Database configuration not fully set in environment variables."
  );
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT as Dialect,
  port: parseInt(DB_PORT),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("database is synced");
    await sequelize.sync({ alter: true});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export default sequelize;

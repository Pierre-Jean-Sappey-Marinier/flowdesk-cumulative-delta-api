import dotenv from "dotenv";

dotenv.config();

export default {
  API_URL: process.env.API_URL,
  API_PATH: process.env.API_PATH,
  PORT: process.env.PORT,
};

import mongoose from "mongoose";
import {} from 'dotenv/config.js';

export const db_connection = async () => {
  const params = { useNewUrlParser: true, useUnifiedTopology : true };
  await mongoose
    .connect(process.env.DB_URL, params)
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log("DB Connection failure", e));
};

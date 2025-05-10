import mongoose from "mongoose";
import colors from "colors";
import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port = process.env.PORT || 5000;

//Database connection
async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mongoose-ts-practice");
    console.log(colors.bgGreen.bold("DB connected"));
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(colors.bgRed.bold("DB connection error"), error);
  }
}

main().catch((err) => console.log(err));

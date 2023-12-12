import mongoose from "mongoose";
import config from "config";


const loggerNam = require('./loggerNam');
async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    loggerNam.info("DB connected");
  } catch (error) {
    loggerNam.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;

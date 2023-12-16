const mongoose = require("mongoose");

const createDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is Connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = createDb;

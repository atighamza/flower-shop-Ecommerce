const mongoose = require('mongoose')

async function main() {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
        process.env.MONGODB_URL
    );
    console.log("Connected to MongoDB");
  }
  main().catch((err) => console.log(err));

module.exports = main 
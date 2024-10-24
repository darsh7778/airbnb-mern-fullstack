const mongoose = require("mongoose");
const  initData = require("./data.js");
const  Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// to clean random data

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "67016e8569b922e0ca8573ac"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();

const mongoose = require("mongoose");

async function connectDb() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Sucessfully connected");
    } catch (error) {
        console.log(err);
    }
}

module.exports = connectDb;
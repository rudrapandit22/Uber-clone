const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
        throw new Error("Invalid mongo uri");
    }

    await mongoose.connect(mongoURI);
};

module.exports = connectDB;
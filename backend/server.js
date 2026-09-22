require('dotenv').config();
const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");

const PORT = process.env.PORT || 3000;

const startserver = async () => {
    try {
        await connectDB();
        console.log("Mongo db connected");
        app.listen(PORT, () => {
            console.log("Server is running");
        });
    } catch (error) {
        console.log("Failed to start the server", error.message);
        process.exit(1);
    }
};

startserver();
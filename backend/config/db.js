const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not configured");
        }

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

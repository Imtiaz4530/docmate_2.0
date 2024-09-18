import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected 😍");

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected 😥");
    });

    // Handle connection errors
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error 😥 ---->", err.message);
    });
  } catch (e) {
    console.error("MongoDB connection error 😥 ---->", e.message);
    process.exit(1);
  }
};

export default connectToMongoDB;

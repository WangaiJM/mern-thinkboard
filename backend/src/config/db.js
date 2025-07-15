import moongose from "mongoose";

const connection = process.env.connectionString;

export const connectDB = async () => {
  try {
    await moongose.connect(connection);
    console.log("DB Connected successfully!");
  } catch (error) {
    console.error("Failed to connect to the Database", error);
    process.exit(1);
  }
};

const monngoose=require("mongoose")

function ConnectDb() {
  const dbUrl = process.env.MONGO_URI

  monngoose.connect(dbUrl, {
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    monngoose.disconnect()
    process.exit(1); // Exit the process with failure
  });
}
module.exports = ConnectDb;
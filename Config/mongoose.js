const mongoose = require("mongoose");

exports.connect = () => {
  mongoose.connect(
    `mongodb://${process.env.MONGODB_HOST}/todo_project_local_dev`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  let connection = mongoose.connection;
  connection.on(
    "error",
    console.error.bind(console, "Mongo connection error:")
  );
  connection.once("open", () => {
    console.log(`mongoDB is connected on ${process.env.MONGODB_HOST}`);
  });
};

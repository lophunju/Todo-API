const mongoose = require("mongoose");

const nowdate = new Date();

let todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  context: { type: String, required: true },
  dueDate: { type: Date, required: false },
  // Convert Date type values to UNIX number type (absolute time) with getTime()
  // but MongoDB converts it to ISO-8601 String type (absolute time) when creating DB Documents
  createdAt: { type: Date, required: true, default: nowdate.getTime() },
  doneAt: { type: Date, required: false }
});

module.exports = mongoose.model("Todo_info", todoSchema);

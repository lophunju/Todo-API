const mongoose = require("mongoose");

let kittenSchema = new mongoose.Schema({
  name: String
});

kittenSchema.methods.speak = function() {
  let greeting = this.name ? `My name is ${this.name}` : "I don't have a name";
  console.log(greeting);
};

module.exports = mongoose.model("Kitten", kittenSchema);

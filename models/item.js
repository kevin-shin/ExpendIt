const mongoose = require("mongoose");

let itemSchema = new mongoose.Schema({
    name: String, 
    category: String,
    price: Number
});

module.exports = mongoose.model("Item", itemSchema);
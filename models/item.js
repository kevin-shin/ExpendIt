const mongoose = require("mongoose");

let itemSchema = new mongoose.Schema({
    name: String, 
    category: String,
    price: String,
    author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

module.exports = mongoose.model("Item", itemSchema);
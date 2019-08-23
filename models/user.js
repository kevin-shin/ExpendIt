const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    itemCollection: [
		{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Item"
		}
	]
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

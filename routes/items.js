const express = require("express"),
	  router = express.Router(),
	  Item = require("../models/item");
	  User = require("../models/user");


//INDEX

//NEW
router.get("/new", function(req, res){
	res.render("items/new");
});

//CREATE
router.post("/", function(req, res){
	let newItem = {
		name: req.body.name,
		category: req.body.category,
		price: req.body.price,
		description: req.body.description,
		date: req.body.date,
	};
	console.log(newItem);
	User.findById(req.user._id, function(err, user){
		if (err) {
			console.log(err);
		} else {
			Item.create(newItem, function(err, newItem){
				if (err) {
					console.log(err);
				} else {
					newItem.save();
					user.itemCollection.push(newItem);
					user.save();
					res.redirect("/");
				}
			});
		}
	})
	
})
//SHOW

//EDIT

//UPDATE

//DESTROY


module.exports = router;
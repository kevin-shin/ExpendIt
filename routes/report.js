let express = require("express"),
	stat = require("simple-statistics"),
	User = require("../models/user"),
	Item = require("../models/item"),
	router = express.Router();

//INDEX

//NEW
router.get("/", function (req, res) {
	User.findById(req.user._id).populate("itemCollection").exec(
		function (err, currentUser) {
			if (err) {
				console.log(err);
			} else {
				console.log("-----------> MAIN STATs");
				let prices = [];
				for (let item of currentUser.itemCollection){
					console.log(item);
					prices.push(parseFloat(item.price));
				};
				console.log(prices);
				console.log("MAX: " + stat.max(prices));
				console.log("STD DEV: " + stat.standardDeviation(prices));
				console.log("AVERAGE: " + stat.mean(prices));
				res.render("report", {  currentUser: currentUser,
										max: stat.max(prices).toFixed(2),
										stdDev: stat.standardDeviation(prices).toFixed(2),
										average: stat.mean(prices).toFixed(2),
										count: prices.length});
			};
		});
});

router.get("/filter", function (req, res) {
	res.render("filter");
})

router.post("/", function (req, res) {
	let query = {
		category: req.body.category,
		minPrice: req.body.minPrice,
		maxPrice: req.body.maxPrice
	};

	Item.find(
		{
			category: query.category,
			price: { $gt: query.minPrice },
			price: { $lt: query.maxPrice }
		}, function (err, user) {
			if (err) {
				console.log(err);
			} else {
				console.log("new item created");
				res.redirect("/", {currentUser: currentUser});
			}
		});
})

module.exports = router;
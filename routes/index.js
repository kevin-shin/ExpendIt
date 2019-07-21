let express = require("express"),
    router = express.Router();

let passport = require("passport");
let User = require("../models/user");

router.get("/", function(req, res){
    res.render("main");
});

//AUTHORIZATION ROUTES
router.get("/register", function(req, res){
	res.send("GET REQUEST, REGISTER");
});

router.post("/register", function(req, res){
    // var newUser = new User({username: req.body.username});
    // User.register(newUser, req.body.password, function(err, user){
    //     if(err){
    //         return res.render("register", {error: err.message});
    //     }
    //     passport.authenticate("local")(req, res, function(){
    //        req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
    //        res.redirect("/campgrounds"); 
    //     });
    // });
});


//login form
router.get("/login", function(req, res){
	res.send("GET LOGIN");
});

// router.post("/login", passport.authenticate("local", {
// 	successRedirect: "/campgrounds",
// 	failureRedirect: "/login"
// }), function(req, res){
	
// });

//logout
router.get("/logout", function(req, res){
    res.send("LOGOUT");
	// req.logout();
	// req.flash("success", "Logged you out!");
	// res.redirect("/campgrounds");
});

router.get("/item/new", function(req, res))

module.exports = router;
let express = require("express"),
    passport = require("passport"),
    User = require("../models/user");

let router = express.Router(); 

/*------------ MAIN -----------*/
router.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        User.findById(req.user._id).populate("itemCollection").exec(
            function (err, currentUser) {
                if (err) { 
                    console.log(err);
                } else {
                    let userData = {};
                    for (let item of currentUser.itemCollection) {
                        if (userData.hasOwnProperty(item.category)) {
                            userData[item.category].push(item);
                        } else {
                            userData[item.category] = [item];
                        }
                    };
                    console.log(userData);
                    res.render("main", { userData: userData })
                }
            }
        );
    } else {
        res.redirect("/login");
    }
});

/*-------- AUTHORIZATION ROUTES --------*/
router.get("/register", function (req, res) {
    res.render("register");
});

router.post("/register", function (req, res) {
    let newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            return res.render("register", { error: err.message });
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/");
        });
    });
});


/*----------- LOGIN ------------*/
router.get("/login", function (req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}), function (req, res) {
});

/*------------ LOG OUT ------------*/
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


module.exports = router;
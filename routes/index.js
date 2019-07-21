let express = require("express"),
    passport = require("passport"),
    User = require("../models/user");

let router = express.Router();

/*------------ MAIN -----------*/
router.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("main");
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
let middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("Hit middware login")
    res.redirect("/login");
};

module.exports = middlewareObj;


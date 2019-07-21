const express = require("express"),
	  bodyParser = require("body-parser"),
	  mongoose = require("mongoose"), 
	  passport = require("passport"),
	  flash = require("connect-flash")
	  methodOverride = require("method-override"),
	  LocalStrategy = require("passport-local");

const app = express();
const indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/expend_it");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Once again Rusy wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//pass user object to each route
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	// res.locals.error = req.flash("error");
	// res.locals.success = req.flash("success");
	next();
});

app.use("/", indexRoutes);
// app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, function(){
	console.log("App started...");
});
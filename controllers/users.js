const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs")
};

module.exports.signup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome To Wanderlust");
        res.redirect("listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      req.redirect(res.locals.redirectUrl);
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back Wanderlust! You are logged in!");
    res.redirect("/listings");
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "you are logged out!");
      let redirectUrl = res.locals.redirectUrl || "/listings";
      res.redirect(redirectUrl);
    });
};
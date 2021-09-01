const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");
router.get('/secrett', (req, res) => {
    res.json({
        user: 'got here yay'
    });
});
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;

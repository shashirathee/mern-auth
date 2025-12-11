const router = require("express").Router();
const ensureAuth = require("../Middlewares/Auth");

router.get("/", ensureAuth, (req, res) => {
    console.log('------logged in user -----', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 20000
        },
        {
            name: "laptop",
            price: 50000        
        }
    ])
});
module.exports = router; 
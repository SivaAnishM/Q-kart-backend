const express = require("express");
const app = express();

const userRoute = require("./user.route");
const authRoute = require("./auth.route")
const productRoute = require("./product.route")
const cartRoute = require("./cart.route");


const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Reroute all API requests beginning with the `/v1/users` route to Express router in user.route.js
// app.get('/users', (req, res) => {
//     res.send('GET request to the homepage')
//   })
// console.log("router")
router.use('/users',userRoute)
router.use('/auth',authRoute)
router.use('/products',productRoute)
router.use("/cart", cartRoute);


module.exports = router;

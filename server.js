exp = require("express")
bodyparser = require("body-parser")
cors = require("cors")
request= require('request');
jwt = require("jsonwebtoken")
mongojs = require("mongojs")
file = require("express-fileupload")
nm = require("nodemailer")
oid = require("mongojs").ObjectId;
mailer = nm.createTransport({
  service: 'Gmail',
  auth: {
    user: "jagadeshg123@gmail.com",
    pass: "royalstag@6300"
  }
})
conn = mongojs("mongodb://localhost:27017/liveproject")
app = exp();
// app.use(bodyparser.json())
app.use(bodyparser.json({
  limit: '50mb'
}));
app.use(bodyparser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(cors())
app.use(file())

adminfile = require("./Backend/admin")
app.use("/adminpath", adminfile)
catfile = require("./Backend/category")
subcatfile = require("./Backend/subcategory")
subsubcatfile = require("./Backend/subsubcategory")
products = require("./Backend/products")
userregistration = require("./Backend/user")
payment=require("./Backend/payment")
// cart=require("./Backend/cart")


app.use("/catpath", catfile)
app.use("/subcatpath", subcatfile)
app.use("/subsubcatpath", subsubcatfile)
app.use("/productspath", products)
app.use("/userpath", userregistration)
app.use("/paymentpath",payment)
// app.use("/cartitempath",cart)
console.log("serverstarted")
app.listen(1234)

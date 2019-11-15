exp=require("express")
bodyparser=require("body-parser")
cors=require("cors")
jwt=require("jsonwebtoken")
mongojs=require("mongojs")
conn=mongojs("mongodb://localhost:27017/liveproject")
app=exp();
app.use(bodyparser.json())
app.use(cors())

adminfile=require("./Backend/admin")
app.use("/adminpath",adminfile)
// cat=require("./Backend/category")
// subcat=require("./Backend/subcategory")
// subsubcat=require("./Backend/subsubcategory")
// products=require("./Backend/products")
// payment=require("./Backend/payment")
// cart=require("./Backend/cart")


// app.use("/catpath",cat)
// app.use("/subcatpath",subcat)
// app.use("/subsubcatpath",subsubcat)
// app.use("/productspath",products)
// app.use("/cartitempath",cart)
console.log("serverstarted")
app.listen(1234)
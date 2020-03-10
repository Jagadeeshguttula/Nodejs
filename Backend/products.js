rt = exp.Router()
rt.post("/getproductsbasedonId",(req,res)=>{
  pid=req.body._id
  console.log(pid)
  //conn.tbl_products.find(req.body,(err,result))
  conn.tbl_products.find({_id:oid(pid)},(err,result)=>{
    res.send(result)
  })
})
rt.post("/insproducts", (req, res) => {
  objid = {

    cat_id: oid(req.body.cat_id),
    subcat_id: oid(req.body.subcat_id),
    subsubcat_id: oid(req.body.subsubcat_id),
    pname: req.body.pname,
    color: req.body.color,
    oldprice: req.body.oldprice,
    newprice: req.body.newprice,
    description: req.body.description,
    proQuantity:req.body.proQuantity,
    rating: req.body.rating,
    offer: req.body.offer,
    producttype: req.body.producttype,
    size: req.body.size
  }
  conn.tbl_products.save(objid, () => {
          res.send({
      result: "inserted produstsdata"
    })
  })
  // conn.tbl_products.save(req.body)
  // console.log(req.body)
  //     res.send({result:"Inserted"})
})
//connect upcoming products
rt.get("/getupcomingproducts",(req,res)=>{
  conn.tbl_products.find().sort({_id:-1}).limit(9,(err,result)=>{
    res.send(result)
   })
})
//New Collections products get process
rt.get("/getnewcollectionproducts",(req,res)=>{
  conn.tbl_products.find({producttype:'1'}).sort({producttype:-1}).limit(10,(err,result)=>{
      res.send(result)
  })
})

//connect products
rt.post("/getproductsbasedonsubsubcatid", (req, res) => {
  subsubid = oid(req.body.ssid)
  // console.log(subsubid)
  conn.tbl_products.find({
    subsubcat_id: subsubid
  }, (err, result) => {
    res.send(result)
  })
})

rt.post("/moveimages", (req, res) => {
  arr = []
  for (i = 0; i < req.files.file1.length; i++) {
    cont = req.files.file1[i]
    dt = new Date();
    fname = dt.getTime() + req.files.file1[i].name

    cont.mv("./src/assets/productuploadimages/" + fname)
    arr.push(fname)
  }
  conn.tbl_products.find().sort({
    _id: -1
  }).limit(1, (err, result) => {
    rowid = result[0]._id
    conn.tbl_products.update({
      _id: oid(rowid)
    }, {
      $set: {
        images: arr
      }
    })
  })
  res.redirect("http://localhost:4200/ad/products?status=1")
  // res.send({result:"Image Updated"})
  //  console.log(req.body)
  // console.log(arr)
})
rt.get("/getproduct", (req, res) => {
  conn.tbl_products.aggregate([{
      $lookup: {
        from: "tbl_subcategory",
        localField: "subcat_id",
        foreignField: "_id",
        as: "subcatdata"
      }
    },
    {
      "$unwind": "$subcatdata"
    },
    {
      $lookup: {
        from: "tbl_subsubcategory",
        localField: "subsubcat_id",
        foreignField: "_id",
        as: "subsubcatdata"
      }
    },
    {
      "$unwind": "$subsubcatdata"
    },
    {
      $lookup: {
        from: "tbl_category",
        localField: "cat_id",
        foreignField: "_id",
        as: "catdata"
      }
    },
    {
      "$unwind": "$catdata"
    },
    {
      "$group": {
        "_id": "$_id",
        "items": {
          "$push": {
            "productname": "$pname",
            "cat": "$catdata.catname",
            "subcat": "$subcatdata.subcatname",
            "subsubcat": "$subsubcatdata.subsubcatname",
            "oldprice": "$oldprice",
            "newprice": "$newprice",
            "description": "$description",
            "offer": "$offer",
            "rating": "$rating",
            "proQuantity":"$proQuantity",
            "producttype": "$producttype",
            "size": "$size",
            "color": "$color"
          }
        }
      }
    }, {
      "$unwind": "$items"
    }
  ], (err, result) => {
    if (err)
      res.send(err)
    else
      res.send(result)
  })
})
rt.post("/getsearchdata",(req,res)=>{
  console.log(req.body)
  conn.tbl_products.find({pname:{$regex:req.body.txt}},{pname:1},(err,result)=>{
  console.log(result)
  res.send(result)
  })
  })
  
module.exports = rt

rt=exp.Router()
rt.get("/getsubcatdata",(req,res)=>{
    conn.tbl_subcategory.aggregate([{

        "$lookup":{
            from:"tbl_category",
            localField:"cat_id",
            foreignField:"_id",
            as:"categorydata"
        }
    },
    {"$unwind":"$categorydata"}
],(err,result)=>{
        if(err)
            res.send(err)
            else
                res.send(result)
                 
        
    })

})
rt.post("/inssubcatdata",(req,res)=>{

    obj={
        subcatname:req.body.subcatname,
        cat_id:oid(req.body.cat_id),
        active:req.body.active
    }
    conn.tbl_subcategory.save(obj,()=>{
        res.send({resp:"Inserted Subcatdata"})

    })
})

rt.post("/updatesubcatdata", (req,res)=>{
    rowid=req.body[0]._id.toString()
    //console.log(req.body[1])

    obj = {
        subcatname : req.body[1].subcatname,
        cat_id : oid(req.body[1].cat_id),
        active:req.body[1].active
    }
    conn.tbl_subcategory.update({_id:oid(rowid)},{$set:obj},(err, result)=>{
        if(err)
        res.send({resp:err})
        else
        res.send({resp:"Updated SubCatData"})
    })
})

module.exports=rt
















// rt = exp.Router()
// rt.get("/getsubcatdata", (req, res) => {
//   conn.tbl_subcategory.aggregate([{

//       "$lookup":{
//           from:"tbl_category",
//           localField:"cat_id",
//           foreignField:"_id",
//           as:"categorydata"
//       }
//   },
//   {"$unwind":"$categorydata"}
// ],(err,result)=>{
//       if(err)
//           res.send(err)
//           else
//               res.send(result)
               
      
//   })

// })
// rt.post("/inssubcatdata", (req, res) => {
//   conn.tbl_subcategory.save(req.body, (err,result) => {
//     res.send({ resp: "Inserted Subcatdata"})
//      console.log(result)
//   })
// })
// module.exports = rt

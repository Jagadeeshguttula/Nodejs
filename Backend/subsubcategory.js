rt=exp.Router()
rt.get("/getsubsubcatdata", (req,res)=>{
    conn.tbl_subsubcategory.aggregate([{

        $lookup:{
        from: "tbl_subcategory",
        localField:"subcat_id",
        foreignField:"_id",
        as:"subcategorydata"
        }
    },
    {"$unwind":"$subcategorydata"}
],
    (err,result)=>{
        if(err)
        res.send(err)
        else
        res.send(result)
    })
})
rt.post("/inssubsubcatdata", (req,res)=>{
    obj={
        subsubcatname:req.body.subsubcatname,
        subcat_id:oid(req.body.subcat_id),
        active:req.body.active
    }
    conn.tbl_subsubcategory.save(obj,()=>{
        res.send({resp:"Inserted SubSubCatData"})
    })
})

rt.post("/updatesubsubcatdata" ,(req,res)=>{
    rowid=req.body[0]._id.toString()
    console.log(req.body[1])
    obj={
        subsubcatname: req.body[1].subsubcatname,
        subcat_id: oid(req.body[1].subcat_id),
        active: req.body[1].active

    }
    conn.tbl_subsubcategory.update({_id:oid(rowid)}, {$set:obj}, (err,result)=>{
        if(err)
        res.send({resp:err})
        else
        res.send({resp:"Updated SubSubCatData"})
    })

})
module.exports=rt














// rt=exp.Router()
// rt.get("/getsubsubcatdata", (req,res)=>{
//     conn.tbl_subsubcategory.find((err,result)=>{
//         if(err)
//         res.send(err)
//         else
//         res.send(result)
//     })
// })
// rt.post("/inssubsubcatdata", (req,res)=>{
//     conn.tbl_subsubcategory.save(req.body,(err,result)=>{
//         res.send({resp:"Inserted SubSubCatName"})
//         // console.log(result)
//     })
// })
// module.exports=rt
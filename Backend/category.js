rt=exp.Router()
rt.get("/getcatdata",(req,res)=>{
    conn.tbl_category.find((err,result)=>{
        if(err)
        res.send(err)           
        else
        res.send(result)
    })
})
rt.post("/inscatdata",(req,res)=>{
    conn.tbl_category.save(req.body,()=>{   
        res.send({resp:"Inserted"})
    })
})

rt.post("/updatecatdata", (req,res)=>{
    rowid=req.body[0]._id.toString()
    console.log(rowid)
    console.log(req.body[1])
    conn.tbl_category.update({_id:oid(rowid)},{$set:req.body[1]},(err,result)=>{
        if(err)
        res.send({resp:err})
        else
        res.send({resp:"Updated"})
    })
})


















module.exports=rt
api=exp.Router()
api.post("/adminlogin",(req,res)=>{
    conn.tbl_admin_login.find(req.body,(err,result)=>{
        
        if(err)
        res.send(err)
        else{

            console.log(result)

        if(result.length==0)
        {
            res.send({resp:0})
        }
        else
        {

            payload={
                "username":result[0].uname,
                "role":result[0].role
            }
            seckey="$%^&*$%"
            tkn=jwt.sign(payload,seckey,{expiresIn:"12h"})

        console.log(tkn)
            res.send({resp:tkn})
        }
    }

    }) 
})
module.exports=api



// rt=exp.Router()
// rt.post("/adminlogin",(req,res)=>{
//     // console.log(req.body)
//     conn.tbl_admin_login.find(req.body,(err,result)=>{
//         if(err)
//         res.send(err)
//         else{
//             console.log(result)
//     if(result.length==0)
//     {
//       res.send({resp:0})
//     }
//     else
//     {
//         payload={
//             "username":result[0].uname,
//             "userrole":result[0].role           
//         }
//         secretkey="krishna123"
//         tkn=jwt.sign(payload,secretkey,{expiresIn:"12h"})
//         console.log(tkn)
//         res.send({resp:tkn})
//     }}
// })
// })
//  module.exports=rt
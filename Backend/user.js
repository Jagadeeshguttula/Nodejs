rt=exp.Router()
rt.post("/register",(req,res)=>{
  obj=req.body
  obj.actlink=0
  em=obj.Email
  obj.acttext=em
  console.log(obj)
  conn.tbl_register.save(obj,(err,result)=>{
    if(err)
    res.send(err)
    else
    {
      str="Account activation link <a href='http://localhost:4200/us/activate?"+em+"'>click here </a>"
      console.log(str)
      mailer.sendMail({
        to:em,
        subject:"Activation link",
        from:"jagadeshg123@gmail.com",
        html:str
      },(err,result)=>{
        if(err)
        res.send(err)
        else
        res.send({resp:"registration success"})
      })
    }
  })
})
rt.post("/login",(req,res)=>{
  conn.tbl_register.find(req.body,(err,result)=>{
    if(err){
    res.send(err)
  }
  else{
    console.log(result)
    if(result.length==1){
      payload={
        "Username":result[0].Username,
         email:result[0].Email,
        "uid":result[0]._id
      }
      secretkey="##@@@FFFDDDD"
      UserToken=jwt.sign(payload,secretkey,{expiresIn:"12h"})
      console.log(UserToken)
      res.send({resp:UserToken})
    }
    else {
      res.send({resp:0})
    }
  }
})
})

rt.post("/activeaccountlink",(req,res)=>{
  console.log(req.body)
  conn.tbl_register.update(req.body,{$set:{actlink:1}},(err,result)=>{
    if(err)
    res.send(err)
    else
    res.send({resp:"Account Avtivated"})
  })
})
rt.post("/addcartdata",(req,res)=>{
  conn.tbl_user_cart_data.save(req.body,(err,result)=>{
  res.send({resp:"Data tras..."})
  })
  })
module.exports=rt













































//rt = exp.Router()
// rt.post("/register", (req, res) => {
//   conn.tbl_register.save(req.body, (err, result) => {
//     if (err)
//       res.send(err)
//     else
//       res.send({
//         resp: "registerd"
//       })
//     console.log(result)
//   })

// })
// rt = exp.Router()
// rt.post("/login", (req, res) => {
//   conn.tbl_register.find(req.body, (err, result) => {
//     if (err) {
//       res.send(err)
//     } else {
//       console.log(result)
//       if (result.length == 1) {

//         payload = {
//           "Username": result[0].Username,
//           "Password": result[0].Password
//         }
//         secretkey = "$%^&*$%"
//         UserToken = jwt.sign(payload, secretkey, {
//           expiresIn: "12h"
//         })
//         console.log(UserToken)
//         res.send({
//           resp: UserToken
//         })
//       } else {
//         res.send({
//           resp: 0
//         })
//       }

//     }
//   })
// })
// activeaccountlink
// module.exports = rt

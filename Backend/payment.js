rt=exp.Router()
rt.post("/paymentlink",(req,res)=>{

    var headers = { 'X-Api-Key': '70df8223e8eada9cd929ad9fae5c35da ', 'X-Auth-Token': '3a7041c4ff52ec47f2b584dc05e5f6ce'}
    var payload = {
      purpose: 'Shopping ',
      amount: '10',
      phone: '9966613893',
      buyer_name: 'jagadeesh	',
      redirect_url: 'http://localhost:4200/us/paymentreceipt/',
      send_email: true,
      webhook: 'http://www.example.com/webhook/',
      send_sms: true,
      email: 'jagadeshg123@gmail.com',  
      allow_repeated_payments: false}
    
    request.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers}, function(error, response, body){
      if(!error && response.statusCode == 201){
        console.log(body);
        res.send({resp:"hi"})
      }
    })
})
module.exports=rt
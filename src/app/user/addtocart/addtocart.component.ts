import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  cart_data:any=[];grand_total=0;tot_cart;
  constructor(private sercart:AddtocartService) { 
    this.sercart.currentvalue.subscribe(dt=>{this.tot_cart=parseInt(dt)})
   this.fungetlocaldata()
  }
  fundec(ind,proid)
  {
    var conid="txt"+ind
    var con=<HTMLInputElement>document.getElementById(conid)
    var cur_val:any=parseInt(con.value)
    if(cur_val>1)
    {
    cur_val=cur_val-1
    con.value=cur_val
    this.funqtychange(cur_val,proid)
    }
  }
  funqtychange(cv,proid){
    this.grand_total=0
    var str=""
    for(var i=0;i<this.cart_data.length;i++)
    {
      if(this.cart_data[i].pid==proid)
      {
        this.cart_data[i].sqty=cv
        this.cart_data[i].total=this.cart_data[i].nprice*cv
      }
      var tot=this.cart_data[i].nprice*this.cart_data[i].sqty
      this.grand_total+=tot
      str+=JSON.stringify(this.cart_data[i])
      str+="&&"
    }
    str=str.substr(0,str.length-2) //remove &&
    localStorage.setItem("prod",str)
    
  }
  funinc(ind,tqty,proid)
  
  {
    var conid="txt"+ind
    var con=<HTMLInputElement>document.getElementById(conid)
    var cur_val:any=parseInt(con.value)
    if(cur_val<tqty)
    {
    cur_val=cur_val+1
    con.value=cur_val
    this.funqtychange(cur_val,proid)
    }
  }
  fungetlocaldata(){
    this.grand_total=0
    this.cart_data=[]
    var dt=localStorage.getItem("prod").split("&&")
    for(var i=0;i<dt.length;i++)
    {
      var ob=JSON.parse(dt[i])
    var each_pro_tot=ob.sqty*ob.nprice
    ob.total=each_pro_tot
    this.cart_data.push(ob)
this.grand_total+=each_pro_tot
    }
  }
  
fundel(pn){
  //alert(pn)
  var rv=confirm("Do you want to delete?")
  if(rv==true)
  {
  var nstr=""
  for(var i=0;i<this.cart_data.length;i++)
  {
    if(this.cart_data[i].pname!=pn)
    {
    //  alert(this.cart_data[i].pname)
    nstr+=JSON.stringify(this.cart_data[i])
    nstr+="&&"
    }
   
  }
  //alert(nstr)
  nstr=nstr.substr(0,nstr.length-2)
  localStorage.setItem("prod",nstr)
  //delete cart and take service   
  this.tot_cart--
  this.sercart.funnext(this.tot_cart)
  this.fungetlocaldata()
  
}
else
{
  
}

}
  ngOnInit() {
  }

}












  //   cart_data:any=[];
//   constructor() { 
//    this.fungetlocaldata()
//   }
//   fungetlocaldata(){
//     this.cart_data=[]
//     var dt=localStorage.getItem("prod").split("&&")
//     for(var i=0;i<dt.length;i++)
//     this.cart_data.push(JSON.parse(dt[i]))
//   }
//   //delete addtocart products in addcart page ..start
//   funDel(pn){
//   //alert(pn)
//   var rv=confirm("You want to delete?")
//   if(rv==true)
//   {
//   var nstr=""
//   for(var i=0;i<this.cart_data.length;i++)
//   {
//     if(this.cart_data[i].pname!=pn)
//     {
//     //  alert(this.cart_data[i].pname)
//     nstr+=JSON.stringify(this.cart_data[i])
//     nstr+="&&"
//     }
   
//   }
//   alert(nstr)
//   nstr=nstr.substr(0,nstr.length-2)
//   localStorage.setItem("prod",nstr)
//   this.fungetlocaldata()
// }
// else
// {    
  
// }
// }
//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from '../services/user.service';
import { AddtocartService } from '../addtocart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent} from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catdata;
  subcatdata;
  subsubcatdata;
  tot_items: number = 0;
  fname:string;
  lname:string;
  uname:any;
  paswrd:any;
  email:any;
  pnumber:any;
  txtarea:any;
  gender:any;
  MyRegForm:FormGroup;
  hideofpwd;
  showofpwd;
  DataOfRegister: any;
  
  constructor(private seradd: AddtocartService,private rt:Router, private comser: CommonService, private userser: UserService) {
    this.comser.serGetCategoryGetter().subscribe(dt => {
      if (dt == null)
        this.comser.serCatSetter().subscribe(dt => {
          this.catdata = dt
        })
      //behaviour part cart update
      this.seradd.currentvalue.subscribe(dt => {
        this.tot_items = parseInt(dt)
      })
      // checking purpose else block
      //else
      //this.catdata=dt

    })
    this.comser.serSubCatGetter().subscribe(dt => {
      if (dt == null)
        this.comser.serSubcatSetter().subscribe(dt => {
          this.subcatdata = dt
        })
      // checking purpose else block
      //else
      //this.subdata=dt
    })
    this.comser.serSubSubCatGetter().subscribe(dt => {
      if (dt == null)
        this.comser.serSubSubCatSetter().subscribe(dt => {
          this.subsubcatdata = dt
        })
    })
    //validator Registration Form
this.MyRegForm=new FormGroup({
  Firstname:new FormControl("",[Validators.required]),
  Lastname:new FormControl("",[Validators.required]),
  Username:new FormControl("",[Validators.required]),
  Password:new FormControl("",[Validators.required]),
  Email:new FormControl("",[Validators.required]),
  Address:new FormControl("",[Validators.required]),
  Phonenumber:new FormControl("",[Validators.required]),
  Textarea:new FormControl("",[Validators.required]),
  Gender:new FormControl("",[Validators.required]),



})
  }
  funlogindiv() {
    $("#main").css("display", "block")
    $("#logindiv").modal("show")
    

  }
  //pending
  funcloselogin(){
    $("#main").css("display",'none')
   //$("#model").modal("toggle")
   $("#logindiv").modal("hide")
  }
  fun2regform() {
    $("#regform").toggle("fade", 1000)
    $("#regform").modal("show")

  }

  funregform() {
    if (localStorage.getItem("form")) {
      alert("Created")
    }
    else {
      this.fun2regform()
    }

  }
  toggleofpwd(){
    this.hideofpwd=document.getElementById("hide");
    this.showofpwd=document.getElementById("show");
    if(this.hideofpwd.type=='password')
    {
      this.hideofpwd.type='text';
      this.showofpwd.className='fa fa-eye'
    }
    else{
      this.hideofpwd.type='password'
      this.showofpwd.className='fa fa-eye-slash'
    }
  }

// Registration Form
funregisterform(){
  //this.submitted=true
  //if(this.MyRegForm.valid)
  
      alert("Hii")
  var RegisterForm={
    Firstname:this.fname,
    Lastname:this.lname,
    Username:this.uname,
    Password:this.paswrd,
    Email:this.email,
    Phonenumber:this.pnumber,
    Textarea:this.txtarea,
    Gender:this.gender
  }
  this.userser.serSaveRegister(RegisterForm).subscribe((dt:any)=>{
  this.DataOfRegister=dt
  if(dt.resp==0){
    alert("Registration Failed")
  }
  else{
    alert("Registration Success....!")
    this.fname="",
    this.lname="",
    this.uname="",
    this.paswrd="",
    this.email="",
    this.pnumber="",
    this.txtarea="",
    this.gender=""
  }
  })
}

txtsearch:string;
searchdata:object;

  // UserLoginForm
  funsearch(){
    if(this.txtsearch.length==0)
    {
      $("#divsearch").css("display","none")
      
    }
    else
    {
      $("#divsearch").css("display","block")
      this.userser.serGetSearchData({txt:this.txtsearch}).subscribe(dt=>{
        this.searchdata=(dt)
      })
    }
  }
UserLoginFormfun(){
  var Userform={
    Username:this.uname, Password:this.paswrd
  }
  this.userser.serLoginUserform(Userform).subscribe((dt:any)=>{
    if(dt.resp==0){
      alert("Invalid Username/Password")
    }
    else{
      localStorage.setItem("UserToken",dt.resp)
      this.rt.navigate(["us/hm"])
      alert("LogIn Success....!")
      var proarr=[]
      this.comser.modalEmitter.emit({result:"LogIn Success....!"})
      if(localStorage.getItem("prod")){
      var user_cart_data=localStorage.getItem("prod")
      var arr=user_cart_data.split("&&")
      for(var i=0;i<arr.length;i++)
      { 
       var str= arr[i]
      // alert(str)
      var obj=JSON.parse(arr[i])
      obj.uid=this.userser.user_id
       proarr.push(obj)
      }
      alert(proarr)
      this.userser.serAddCartData(proarr).subscribe(()=>{
        localStorage.removeItem("prod")
      })
    }}
  })
  $("#main").css("display","none")
    $("#logindiv").modal("hide")
}
funUserLoggedIn(){
  return localStorage.getItem("UserToken");
}

funUserLoggedOut(){
  localStorage.removeItem("UserToken");
}
  ngOnInit() {
    var con=<HTMLInputElement>document.getElementById("txtsea")
    fromEvent(con,"keyup").subscribe((dt:KeyboardEvent)=>{
      if(dt.keyCode == 13)
      {
        this.userser.serGetSearchData({txt:this.txtsearch}).subscribe((dt:any)=>{
          alert(dt)
        })
      }
    })
  }

}

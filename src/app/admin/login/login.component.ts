import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myloginform:FormGroup
  submitted=false;
  txtuname:string;txtpwd:string;
  constructor(private ser:AuthService, private rt:Router ) {
    this.myloginform=new FormGroup({
      uname:new FormControl ("",[Validators.required]),
      pwd:new FormControl("",[Validators.required])

    })
   }
   errtmp:boolean=false;
  funlogin(){
    this.submitted=true
    if(this.myloginform.valid){
    var obj={uname:this.txtuname,pwd:this.txtpwd}
    this.ser.serAdminLogin(obj).subscribe((dt:any)=>{
      if(dt.resp==0)
      {
        alert("Invalid username/password")                   
      }
      else
      {
        this.ser.logintmp=true;
        localStorage.setItem("token",dt.resp)
      this.rt.navigate(["ad/welcome"])
      }
    })
  }
  else
    {
      this.errtmp=true
     // alert("Enter data")
    }

}

  
  ngOnInit() {
  }

}

import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtuname:string;txtpwd:string;
  constructor(private ser:AuthService) { }
  funlogin(){
    var obj={uname:this.txtuname,pwd:this.txtpwd}
    this.ser.serAdminLogin(obj).subscribe((dt:any)=>{
      if(dt.resp==0)
      {
        alert("Invalid username/password")
      }
      else
      {
        localStorage.setItem("token",dt.resp)
      }
    })
  }

  
  ngOnInit() {
  }

}

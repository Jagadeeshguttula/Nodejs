import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {     
  logintmp:boolean=false;
  constructor(private ht:HttpClient) {
    if(localStorage.getItem("token"))
    {
      this.logintmp=true;
    }
   }
  serAdminLogin(ob){
   // alert("hiii")
    return this.ht.post("http://localhost:1234/adminpath/adminlogin",ob)
  }
}

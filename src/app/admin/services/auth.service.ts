import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ht:HttpClient) { }
  serAdminLogin(ob){
   // alert("hiii")
    return this.ht.post("http://localhost:1234/adminpath/adminlogin",ob)
  }
}

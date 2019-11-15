import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot } from '@angular/router';
import decode from "jwt-decode"
@Injectable({
  providedIn: 'root'
})
export class RoleadminService implements CanActivate {
  canActivate(obj:ActivatedRouteSnapshot){ 
   // 
  if(localStorage.getItem("token"))
  {
   var localobj=decode(localStorage.getItem("token"))
   if(obj.data.role===localobj.role)
   return true;
   else
   {
    this.rt.navigate(["/"])
    return false;
   
   }
  }
  else
  {
    this.rt.navigate(["ad/login"])
    return false;
  }
   }

  constructor(public rt:Router) { }
}

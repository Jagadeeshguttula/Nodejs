import { Injectable } from '@angular/core';
import * as x from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  bs=new x.BehaviorSubject("0")
  currentvalue;                    
    constructor() { 
      this.currentvalue=this.bs.asObservable()
      if(localStorage.getItem("prod"))
      {
      var arr=localStorage.getItem("prod").split("&&")
      this.funnext(arr.length)
      }
    }
    funnext(val)
    {
      this.bs.next(val)
    }
  
  }
  
  
  
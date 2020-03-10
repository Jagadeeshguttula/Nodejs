import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from 'src/settings';
import { map } from 'rxjs/operators';
import  decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url: string
  sobj: Settings
  constructor(private ht: HttpClient) {
    this.sobj = new Settings()
    this.url = this.sobj.serUrl
  }
  serGetProductsOfsubsubid(ob) {
    return this.ht.post(`${this.url}` + "/productspath/getproductsbasedonsubsubcatid", ob)
  }
  setGetProductsBasedOnId(ob) {
    return this.ht.post(`${this.url}` + "/productspath/getproductsbasedonId", ob)
  }
  serGetUpcomingProducts() {
    return this.ht.get(`${this.url}` + "/productspath/getupcomingproducts")
  }
  serGetNewcollectionproducts() {
    return this.ht.get(`${this.url}` + "/productspath/getnewcollectionproducts")
  }
  user_id;
  serLoginUserform(loginform){
    return this.ht.post(`${this.url}`+"/userpath/login",loginform).pipe(map((dt:any)=>{
      var tok_data=decode(dt.resp)
      this.user_id=tok_data.uid
      return dt;
    }))
  }
  serSaveRegister(rform){
    return this.ht.post(`${this.url}`+"/userpath/register",rform)
  }
  serActAccount(ob){
    return this.ht.post(`${this.url}`+"/userpath/activeaccountlink",ob)
  }
  serAddCartData(ob){
    return this.ht.post(`${this.url}`+"/userpath/addcartdata",ob)
  }
  serGetPaymentLink(ob){
    return this.ht.post(`${this.url}/paymentpath/paymentlink`,ob)
  
  }
  //search service 
  serGetSearchData(ob){
    return this.ht.post(`${this.url}/productspath/getsearchdata`,ob)
  }
}

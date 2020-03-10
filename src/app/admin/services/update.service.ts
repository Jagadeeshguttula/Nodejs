import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private ht:HttpClient) { }
  serProductInsert(ob):Observable<any>{
    return this.ht.post("http://localhost:1234/productspath/insproducts",ob)
  }
  serGetProducts(){
    return  this.ht.get("http://localhost:1234/productspath/getproduct")
    }
}

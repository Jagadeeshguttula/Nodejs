import { HttpClient } from '@angular/common/http';
import { Settings } from './../../settings';
import { Injectable } from '@angular/core';
import { Observable, of,pipe } from 'rxjs';
import {map} from "rxjs/operators";
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url:string  
  sobj:Settings
  catdata:object=null;
  subcatdata:object=null;
  subsubcatdata:object=null;
  modalEmitter = new EventEmitter()
  //This is CatData Method
  serGetCategoryGetter(){
    return of(this.catdata)
  }
  
 //This is SubCatData Method
 serSubCatGetter(){
   return of(this.subcatdata)
 }
 //this is SubSubcatData Method
 serSubSubCatGetter(){
   return of(this.subsubcatdata)
 }
 
   constructor(private ht:HttpClient) {
     this.sobj=new Settings()
     this.url=this.sobj.serUrl
   //  alert(this.sobj.serUrl)
   //products page dropdown purpose
   if(this.catdata==null){
     this.serCatSetter().subscribe()
   }
   if(this.subcatdata==null){
     this.serSubcatSetter().subscribe()
   }
   if(this.subsubcatdata==null){
     this.serSubSubCatSetter().subscribe()
   }
   //the above lines products dropdown purpose
   }
   //Add Cat api to node
   serCatSetter(){
    // alert(this.url)
   // alert("setterrex....")
     return this.ht.get(`${this.url}`+"/catpath/getcatdata").pipe(map(dt=>{
       return this.catdata=dt
     }))
   }
   serInsertCat(ob){
     return this.ht.post(`${this.url}/catpath/inscatdata`,ob)
   }
 
     // Add subcat api to node
 
   serSubcatSetter(){
     return this.ht.get(`${this.url}`+"/subcatpath/getsubcatdata").pipe(map(dt=>{
       return this.subcatdata=dt
     }))
   }
   serInsSubcatdata(obdata){
     return this.ht.post(`${this.url}/subcatpath/inssubcatdata`,obdata)
 
   }
 
     //Add subsubcat api to node
 
   serSubSubCatSetter(){
     return this.ht.get(`${this.url}`+"/subsubcatpath/getsubsubcatdata").pipe(map(dt=>{
       return this.subsubcatdata=dt
 
     }))
 
   }
   serInsSubSubcatdata(obsubdata){
     return this.ht.post(`${this.url}/subsubcatpath/inssubsubcatdata`,obsubdata)
 
   }

//Update CatData
serUpdateCatData(updatedata){
  return this.ht.post(`${this.url}/catpath/updatecatdata`,updatedata)
 }
//Update SubCat Data
serUpdateSubCatData(updatesubdata){
  return this.ht.post(`${this.url}/subcatpath/updatesubcatdata`, updatesubdata)
}
//Update SubSubCat Data
serUpdateSubSubCatData(updatesubsubdata){
  return this.ht.post(`${this.url}/subsubcatpath/updatesubsubcatdata`, updatesubsubdata)
}

   }


































   




//  url:string;
//  sobj:Settings;
//  catdata:object=null; 
//  subcatdata: object = null;
//  subsubcatdata: object = null;
//  modalemitter = new EventEmitter()
//   constructor(private ht:HttpClient) { 
//   this.sobj=new Settings()
//   //In this serurl is calling in settings.ts file
//   this.url=this.sobj.serUrl
//   //  alert(this.sobj.serUrl)
// }
// //get data
// serGetCategoryGetter(){
//   return of(this.catdata)
//   // return this.ht.get(`${this.url}/catpath/getcatdata`)
// }
// serCatSetter(){
//   // alert(this.url)
//  // alert("setterrex....")
//    return this.ht.get(`${this.url}`+"/catpath/getcatdata").pipe(map(dt=>{
//      return this.catdata=dt
//    }))
//  }
// //add data
// serInsertCat(ob):Observable<any>{
//   return this.ht.post(`${this.url}/catpath/insertcatdata`,ob)
// }
//  // Add subcat api to node

//  serSubcatdata(){
//   return this.ht.get(`${this.url}`+"/subcatpath/getsubcatdata").pipe(map(dt=>{
//     return this.subcatdata=dt
//   }))
// }         
// serInsSubcatdata(obdata){
//   return this.ht.post(`${this.url}/subcatpath/inssubcatdata`,obdata)

// }
// //Add subsubcat api to node

// serSubSubcatdata(){
//   return this.ht.get(`${this.url}`+"/subsubcatpath/getsubsubcatdata").pipe(map(dt=>{
//     return this.subsubcatdata=dt
//   }))

// }
// serInsSubSubcatdata(obsubdata){
//   return this.ht.post(`${this.url}/subsubcatpath/inssubsubcatdata`,obsubdata)

// }
// }=
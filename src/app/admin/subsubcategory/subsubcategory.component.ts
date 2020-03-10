import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-subsubcategory',
  templateUrl: './subsubcategory.component.html',
  styleUrls: ['./subsubcategory.component.css']
})
export class SubsubcategoryComponent implements OnInit {
  subsubtbl:object;
  searchsubsubcat;
  subasds:boolean=true;
  tmp=0;
  subsubcatname;
  drpsubchnge;
  subcatname;
  catname;
  txtsubsubcat;
  txtsubcat;
  txtcatname;myform:FormGroup;
  submitted=false;
  
  
  subcatdata:object;
    constructor(private comser:CommonService) { 
      // this.subsubtbl=[
      //   {subsubcatid:1,subsubcatname:"Lg", subcatname:"Tv", catname:"Electronics" ,active:1},
      //   {subsubcatid:2,subsubcatname:"Samsung Note10",subcatname:"Samsung", catname:"Mobiles",active:1},
      //   {subsubcatid:3,subsubcatname:"Ton jeans",subcatname:"Mensware", catname:"Clothes",active:1},
      //   {subsubcatid:4,subsubcatname:"Eyelash",subcatname:"Eyelash", catname:"Items",active:0},
      //   {subsubcatid:5,subsubcatname:"Raw rice",subcatname:"Rice", catname:"Grosories",active:1},
      //   {subsubcatid:6,subsubcatname:"Remoute control car",subcatname:"Remoute Control Car", catname:"Toys",active:0},
      //   {subsubcatid:7,subsubcatname:"Items",subcatname:"Casico", catname:"Watches",active:0},
      //   {subsubcatid:8,subsubcatname:"Casico",subcatname:"Bata", catname:"Footwares",active:1}
  
      // ]
  
      this.myform=new FormGroup({
        subsubcatname:new FormControl("",[Validators.required]),
        subcatname:new FormControl("", [Validators.required])
      })
  
      this.funsubsubget()
  
  
  
      this.comser.serSubCatGetter().subscribe(dt=>{
        this.subcatdata=dt;
        if(dt==null){
          this.comser.serSubcatSetter().subscribe(dt=>{
            this.subcatdata=dt
          })
  
        }
      })
    }
  
  
  //Find SubSubCat Data
    funsubsubget(){
      this.comser.serSubSubCatGetter().subscribe((dt:any)=>{
         this.subsubtbl=dt
        if(this.subsubtbl==null){
        this.comser.serSubSubCatSetter().subscribe((dt:any)=>{
          this.subsubtbl=dt
        })
        }
      
      })
    }
  
    funedit(obj){
      this.tmp=obj._id;
      this.subsubcatname=obj.subsubcatname;
      this.subcatname=obj.subcat_id;
      // this.catname=obj.catname;
      this.drpsubchnge=obj.active.toString();
    }
  
  
    //Insert SubSubCatData
    funsavesubsubcat(){
      this.submitted=true
  
      if(this.myform.valid){
      var objdata={subsubcatname:this.txtsubsubcat,subcat_id:this.txtsubcat,active:1}
      this.comser.serInsSubSubcatdata(objdata).subscribe((dt:any)=>{
        alert(dt.resp)
        if(dt.resp==0){
          alert("SubSub Cat Data Not Get")
        }
        this.comser.serSubSubCatSetter().subscribe(dt=>{      
          this.funsubsubget()
        this.txtsubsubcat=""
        this.txtsubcat=""
      })
  
      })
    }
    }
  
  
    //Update SubSubCat Data
    funupdatesubsubcat(){
      //alert("Hi")
      var subsubobj=[{_id:this.tmp},{subsubcatname:this.subsubcatname,subcat_id:this.subcatname,active:this.drpsubchnge}]
      this.comser.serUpdateSubSubCatData(subsubobj).subscribe(dt=>{
        this.tmp=0
        this.comser.subsubcatdata=null;
        this.comser.subcatdata=null;
        this.comser.catdata=null
        this.comser.modalEmitter.emit({resp: "SubSubCategory Loaded"})
        this.funsubsubget()
  
      })
  
    }
  
    ngOnInit() {
    }
  
  
  }
  





import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',           
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  mycategory:FormGroup
  tblcat:object;
  tblcategory:object;ord:boolean=true;
  txtcategory:string;txtcat:string;
  dropdownstatus: any; tmp: number = 0;
  submitted=false;
  searchstatus;

  constructor(private comservice:CommonService) { 
      this.mycategory=new FormGroup({
        category:new FormControl("",[Validators.required])
      })
      this.funget()
     }
     funget(){
      this.comservice.serGetCategoryGetter().subscribe(dt=>{
        this.tblcategory=dt;
      //  alert("getterrex....")
       if(this.tblcategory==null){
        this.comservice.serCatSetter().subscribe((dt:any)=>{
          this.tblcategory=dt
          

        })

       }
     
    })
   }
     funsave(){
      this.submitted=true;
      var obj={catname:this.txtcategory,active:1}
      this.comservice.serInsertCat(obj).subscribe((dt:any)=>{
        alert(dt.resp)
        if(dt.resp==0){
          alert("Cat data not get")
        }
        else{
        this.comservice.serCatSetter().subscribe(dt=>{
        this.funget()
        this.txtcategory=""
        this.tblcategory=dt
        this.comservice.modalEmitter.emit({resp : "Category Added"})
      })
    }
    })
     }
   //updata data html to ts ts to service to nodejs database
   funupdate(){
     var obj=[{_id:this.tmp},{catname:this.txtcat},{active:this.dropdownstatus}]
     this.comservice.serUpdateCatData(obj).subscribe((dt:any)=>{
       this.tmp=0;
       this.comservice.catdata=null
       this.comservice.modalEmitter.emit({resp:"category data updated"})
       this.funget()
     })
   }
   
   funedit(obj){
     this.tmp=obj._id;
     this.txtcat = obj.catname;
     this.dropdownstatus = obj.active;

   }
   cancelUpdate() {
    this.tmp = 0;
  }
  ngOnInit() {
  }
  
}




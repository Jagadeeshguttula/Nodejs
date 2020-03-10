import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-subcategory',                    
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  tblcat:object;
  asds:boolean=true;
  searchstatus:string;
  tmp=0;
  txtsubcatname:string;
  drpchnge:string;
  tmpcatname:string;
  myform:FormGroup; 
  txtcatname:string; 
  txtsubcat:string;
  submitted=false;
  catdata:object

  constructor(private comser:CommonService) {
    this.myform=new FormGroup({
      subcatname:new FormControl("",[Validators.required]),
      catname:new FormControl("",[Validators.required])

    

    })

    this.fungetsubdata()
    // this.tblcat=[
    //   {subcatid:1,subcatname:"Samsung",catname:"Electronics",active:1},
 
    // ]
    
    this.comser.serGetCategoryGetter().subscribe(dt=>{
      this.catdata=dt
      if(dt==null)
      {
        this.comser.serCatSetter().subscribe(dt=>{
          this.catdata=dt
          
        })
      }

    })
   }


  //Find SubCat Data....
   fungetsubdata(){

     this.comser.serSubCatGetter().subscribe((dt:any)=>{
       this.tblcat=dt
       if(this.tblcat == null){
        this.comser.serSubcatSetter().subscribe((dt:any)=>{
          this.tblcat=dt
          //console.log(this.tblcat)
     })
    }
     
     })
   }

   
   // Insert SubCat Data....
   funsavesubcat(){
     this.submitted=true;

    if(this.myform.valid){

     var obj={subcatname:this.txtsubcat,cat_id:this.txtcatname, active:1}
     this.comser.serInsSubcatdata(obj).subscribe((dt:any)=>{
      alert(dt.resp)

       if(dt.resp==0){
         alert("SubCat Data Not Get")
       }
       this.comser.serSubcatSetter().subscribe(dt=>{      
       this.fungetsubdata()
       this.txtsubcat=""
       this.txtcatname=""
     })
    
    })
  }


   }


   //Update SubCategory data 

   funsubcatdata(){
     var subobj=[{_id:this.tmp},{subcatname:this.txtsubcatname,cat_id:this.tmpcatname , active:this.drpchnge}]
     this.comser.serUpdateSubCatData(subobj).subscribe(dt=>{
       this.tmp=0
       this.comser.subcatdata=null
       this.comser.catdata=null
       this.comser.modalEmitter.emit({resp: "Subcategory Data Loaded"})
       this.fungetsubdata()

     })
   }

   funedit(row){
     //debugger;
    // alert("hi")
    // console.log(row)
     this.tmp=row._id;
     this.txtsubcatname=row.subcatname;
     this.tmpcatname=row.cat_id;
     this.drpchnge=row.active.toString();
   } 
   
   
   ngOnInit() {
  }

}


//    fungetsubdata(){
//      this.comser.serSubCatGetter().subscribe((dt:any)=>{
//        this.tblcat=dt
//      })
//    }
//    funsavesubcat(){
//      var obj={subcatname:this.txtsubcat,catname:this.txtcatname, active:1}
//      this.comser.serInsSubcatdata(obj).subscribe((dt:any)=>{
//        alert(dt.resp)
//        this.fungetsubdata()
//        this.txtsubcat=""
//        this.txtcatname=""
//      })
//    }

//    funedit(row){
//     this.tmp=row.subcatid
//     this.txtsubcatname=row.subcatname;
//      this.tmpcatname=row.catname;
//       this.drpchnge=row.active
//    }  
//    ngOnInit() {
//   }

// }

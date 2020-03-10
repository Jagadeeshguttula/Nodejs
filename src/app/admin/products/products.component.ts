import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { UpdateService } from '../services/update.service';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import {AllCommunityModules} from "@ag-grid-community/all-modules"      
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  catdata:object;
  subcatdata:object;
  subsubcatdata:object
  drpcat:string;
  txtcolor:string;
  txtname:string;
  drpsubcat:string;
  drpsubsubcat:string
  txtop:number;
  txtnp:number;
  txtdesptn:string;
  txtrtng:string;
  txtoffer:string;
  txtprotype:string;
  proQuantity:number;
  txtsize:string;
  submitted=false;
  myform:FormGroup
  imgfile:string;
  rowData;
  constructor(private comser:CommonService,private updateser:UpdateService) {
    var str=document.URL
    var arr=str.split("?")
    var arrnewone:any=[]
    this.updateser.serGetProducts().subscribe((dt:any)=>{
     // this.rowData=dt
     for(var i=0;i<dt.length;i++)
     {
       arrnewone.push(dt[i].items)
     }
     //console.log(arrnew)
     this.rowData=arrnewone
    })
    if(arr[1]=="status=1")
    {
  // alert("Hiii")
    }
    this.myform=new FormGroup({
      pname:new FormControl("", [Validators.required]),
      cat:new FormControl("", [Validators.required]),
      subcat:new FormControl("",[Validators.required]),
      subsubcat:new FormControl("", [Validators.required]),
      color:new FormControl("", [Validators.required]),
      oldprice:new FormControl("", [Validators.required]),  
      newprice:new FormControl("", [Validators.required]),
      description:new FormControl("",[Validators.required]),
      rating:new FormControl("", [Validators.required]),
      offer:new FormControl("", [Validators.required]),
      producttype:new FormControl("",[Validators.required]),
      proQuantity:new FormControl("",[Validators.required]),
      file:new FormControl("", [Validators.required]),
      size:new FormControl("", [Validators.required])





    })
    
   }
   funsavepro(){
     console.log(this.myform)
     this.submitted=true;
    if(this.myform.valid)
     {
     var obj={pname:this.txtname,cat_id:this.drpcat,
              subcat_id:this.drpsubcat,subsubcat_id:this.drpsubsubcat,
                color:this.txtcolor,
                 oldprice:this.txtop,newprice:this.txtnp,
                  description:this.txtdesptn, rating:this.txtrtng,
                   offer:this.txtoffer, producttype:this.txtprotype,
                   proQuantity:this.proQuantity,
                   file:this.imgfile, size:this.txtsize}
    this.updateser.serProductInsert(obj).subscribe((dt:any)=>{
      //alert(dt.result)
      this.comser.modalEmitter.emit({resp:"Product added"})
      var fileobj=<HTMLFormElement>document.getElementById("frm1")
      fileobj.submit()
    })
    
   }
  //  else{
  //    alert("Not Insterted")
  //  }
  // alert("Hiii")
  }

  ngOnInit() {
  }

column=[

  {headerName:"Product Name", field:"productname", sortable:true, filter:true},
  {headerName:"Category Name", field:"cat", sortable:true, filter:true},
  {headerName:"Subcategory Name", field:"subcat", sortable:true, filter:true},
  {headerName:"SubSubcategory Name", field:"subsubcat", sortable:true, filter:true},
  {headerName:"Old price", field:"oldprice", sortable:true, filter:true},
  {headerName:"New price", field:"newprice", sortable:true, filter:true},
  {headerName:"Description", field:"description", sortable:true, filter:true},
  {headerName:"Rating", field:"rating", sortable:true, filter:true},
  {headerName:"Offers", field:"offer", sortable:true, filter:true},
  {headerName:"Product Type", field:"producttype", sortable:true, filter:true},
  {headerName:"Quantity",field:"proQuantity",sortable:true,filter:true},
  {headerName:"Size", field:"size", sortable:true, filter:true},
  {headerName:"Color", field:"color", sortable:true, filter:true}

  // {headerName:"Product Name", field:"pname", sortable:true, filter:true},
  // {headerName:"Category Name", field:"cat_id", sortable:true, filter:true},
  // {headerName:"Subcategory Name", field:"subcat_id", sortable:true, filter:true},
  // {headerName:"SubSubcategory Name", field:"subsubcat_id", sortable:true, filter:true},
  // {headerName:"Old price", field:"oldprice", sortable:true, filter:true},
  // {headerName:"New price", field:"newprice", sortable:true, filter:true},
  // {headerName:"Description", field:"description", sortable:true, filter:true},
  // {headerName:"Rating", field:"rating", sortable:true, filter:true},
  // {headerName:"Offers", field:"offer", sortable:true, filter:true},
  // {headerName:"Product Type", field:"producttype", sortable:true, filter:true},
  // {headerName:"Size", field:"size", sortable:true, filter:true},
  // {headerName:"Color", field:"color", sortable:true, filter:true}

];


modules=AllCommunityModules;
}




  //  catdata:object;
//  subcatdata:object;
//  subsubcatdata:object
//  //above three are dropdown data setter browser
//  subcat:object;
//  subsubcat:object;
//  drpcat:object;
//  drpsubcat:object;
//  drpsubsubcat:object;
//  txtname:string;
//  txtcolor:string;
//  txtoldprice:string;
//  txtnewprice:string;
//  txtdescription:string;
//   constructor(private comser:CommonService,private updateser:UpdateService) { }
//   funsaveproducts(){
//     var obj={pname:this.txtname,cat:this.drpcat,subcat:this.drpsubcat,subsubcat:this.drpsubsubcat}
//     this.updateser.serProductInsert(obj).subscribe((dt:any)=>{
//     alert(dt.result)
//     var fileobj=<HTMLFormElement>document.getElementById("frm1")
//         fileobj.submit()
//     })
//   }

//   ngOnInit() {
//   }

// }


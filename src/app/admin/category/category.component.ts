import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  tblcategory:object;ord:boolean=true;

  constructor() { 
    this.tblcategory=[
      {_id:1,catname :"Electronics",active:1},
      {_id:2,catname:"Mobles",active:1},
      {_id:3,catname:"Mobles",active:1},
      {_id:4,catname:"HomeNeeds",active:1},
      {_id:5,catname:"Toys",active:1},
      {_id:6,catname:"Books",active:0},
      {_id:7,catname:"Vechiles",active:0}

    ]
  }
   txtcat:string;
   dropdownstatus: any; tmp: number = 0;
   funedit(obj){
     this.tmp=obj._id;
     this.txtcat = obj.catname;
     this.dropdownstatus = obj.active;

   }
  ngOnInit() {
  }
  
}




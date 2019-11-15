import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  tblcategory:object;ord:boolean=true;
  tblsubcategory:object;txtsubcat;dropdownstatus;tmp=0;
  constructor() { 
    this.tblsubcategory=[
      {_id:1,catid:1,subcatname:"Electronics",active:1},
      {_id:2,catid:2,subcatname:"Mobles",active:1},
      {_id:3,catid:1,subcatname:"Mobles",active:1},
      {_id:4,catid:2,subcatname:"HomeNeeds",active:1},
      {_id:5,catid:1,subcatname:"Toys",active:1},
      {_id:6,catid:2,subcatname:"Books",active:0},
      {_id:7,catid:1,subcatname:"Vechiles",active:0}

    ]
  }
  funedit(obj){
    this.tmp=obj._id;
    this.txtsubcat = obj.catname;
    this.dropdownstatus = obj.active;
  }
  ngOnInit() {
  }
 



}

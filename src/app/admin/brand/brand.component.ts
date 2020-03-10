import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  myform:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

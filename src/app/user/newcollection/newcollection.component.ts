import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
declare var $:any

@Component({
  selector: 'app-newcollection',
  templateUrl: './newcollection.component.html',
  styleUrls: ['./newcollection.component.css']
})
export class NewcollectionComponent implements OnInit {
  newcollectiondata;
  constructor(private userser:UserService) {
    this.userser.serGetNewcollectionproducts().subscribe((dt:any)=>{
     this.newcollectiondata=dt
    })
   }

  ngOnInit() {
  }
  funleft1(){
    $("#divinner").animate({left:'-900px'},1000)
    $(".arrow").css({display:'none'})
    setTimeout(function(){
      $(".arrow").css({display:'block'})
    },3000)

    // alert("hii")
  }
  funright1(){
    $("#divinner").animate({left:'0px'},1000)
    $(".arrow1").css({display:"none"})
    setTimeout(function(){
      $(".arrow1").css({display:'block'})
    },3000)
  }

}

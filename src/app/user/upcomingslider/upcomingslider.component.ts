import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
declare var $:any

@Component({
  selector: 'app-upcomingslider',
  templateUrl: './upcomingslider.component.html',
  styleUrls: ['./upcomingslider.component.css']
})
export class UpcomingsliderComponent implements OnInit {
  prodata:object
  constructor(private userservice:UserService) {
    this.userservice.serGetUpcomingProducts().subscribe(dt=>{
      this.prodata=dt
    })
   }


  ngOnInit() {
  }
  funleft(){
    $("#divinner").animate({left:'-900px'},1000)
    $(".arrow").css({display:'none'})
    setTimeout(function(){
      $(".arrow").css({display:'block'})
    },3000)
  }
  funright(){
    $("#divinner").animate({left:'0px'},1000)
    $(".arrow1").css({display:"none"})
    setTimeout(function(){
      $(".arrow1").css({display:'block'})
    },3000)
  }

}

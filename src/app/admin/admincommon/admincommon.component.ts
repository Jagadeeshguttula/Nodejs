import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
declare var $ : any
@Component({
  selector: 'app-admincommon',
  templateUrl: './admincommon.component.html',
  styleUrls: ['./admincommon.component.css']
})
export class AdmincommonComponent implements OnInit {
  modalmsg:string;
  constructor(private ser:AuthService,private sercom:CommonService) { 
    // private rt : Router
    // if(localStorage.getItem("token"))
    // {
    //   this.rt.navigate(["ad/welcome"])
    // }
    this.sercom.modalEmitter.subscribe(dt => {
      this.modalmsg = dt.resp;
      this.funShowModal()
    })
  }

  funlogout(){
    localStorage.clear();
  }
  funShowModal(){
    $("#myModal").modal('show')
  }



  ngOnInit() {
  }

}

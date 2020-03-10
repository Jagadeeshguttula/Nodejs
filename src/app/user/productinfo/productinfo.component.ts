import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  // pro_id:string;prodata:any;
  //   constructor(private ar:ActivatedRoute,private ser:UserService) {
  //     this.ar.params.subscribe(dt=>{
  //       this.pro_id=dt.pid
  //       //alert(this.pro_id)
  //       this.ser.setGetProductsBasedOnId({_id:this.pro_id}).subscribe((dt:any)=>{
  //         this.prodata=dt;
  //       })

  //     })
  tot_cart: number;
  pro_id: string; prodata: any;
  offerarr: any; bigimg; ratarr = []; newcolors = ""
  halfstar: boolean;
  constructor(private sercart: AddtocartService, private rt: Router, private ar: ActivatedRoute, private ser: UserService, private head: HeaderComponent) {
   //below current value sentence is behaviour subject
    this.sercart.currentvalue.subscribe(dt=>{this.tot_cart=parseInt(dt)})
    this.ar.params.subscribe(dt => {
      this.pro_id = dt.pid
      this.ser.setGetProductsBasedOnId({ _id: this.pro_id }).subscribe((dt: any) => {
        this.prodata = dt;
        this.newcolors = dt[0].color.split(",")
        this.selcolor = this.newcolors[0]
        this.bigimg = dt[0].images[0];
        this.offerarr = dt[0].offer.split(",")
        for (var i = 1; i <= dt[0].rating; i++) {
          this.ratarr.push('')
        }
        i--;
        if (dt[0].rating > i)
          this.halfstar = true;
      })
    })

  }

  funadd() {
    if (localStorage.getItem("aut")) {
      alert("yes")
    }
    else {
      this.head.funlogindiv()
    }
  } 
  selcolor: string;

  funaddcart() {
    var duplicateItem = ""
    if (localStorage.getItem("prod"))
      duplicateItem = localStorage.getItem('prod')

    if (duplicateItem.match(this.prodata[0]._id) == null) {
      // alert('duplicateItem')

      var obj = {
        pid: this.prodata[0]._id,
        pname: this.prodata[0].pname,
        descp: this.prodata[0].description,
        oprice: this.prodata[0].oldprice,
        nprice: this.prodata[0].newprice,
        scolor: this.selcolor,
        sqty: 1,
        totqty: this.prodata[0].proQuantity,
        image: this.prodata[0].images[0]
      }
      if (localStorage.getItem("prod")) {
        var str = localStorage.getItem("prod")
        str += "&&"
        str = str + JSON.stringify(obj)
        localStorage.setItem("prod", str)         
        this.rt.navigateByUrl("us/addtocart")
      }
      else {
        localStorage.setItem("prod", JSON.stringify(obj))
        this.rt.navigateByUrl("us/addtocart")
      }
      //behaviour subject
      this.tot_cart++
      this.sercart.funnext(this.tot_cart)
    }
    else {
      this.rt.navigateByUrl("us/addtocart")
    } 
    

  }
  ngOnInit() {
  }

}

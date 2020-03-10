import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  subsubid:string;
  prodata:any;
  // colrstr:any;
  constructor(private ar:ActivatedRoute, private userservice:UserService) { 
    this.ar.params.subscribe(dt=>{
      this.subsubid=dt.subsubcatid;
      this.userservice.serGetProductsOfsubsubid({ssid:this.subsubid}).subscribe(dt=>{
        this.prodata=dt
        var colorarr=[];
        var colrstr
        for(var i=0;i<this.prodata.length;i++)
        {

           colrstr=this.prodata[i].color
         //  alert(colrstr)
         //  colorarr=colrstr.split(",")
         this.prodata[i].newcolors=colorarr
       //alert(colrstr)
        }
       alert(this.prodata)
      })
    })
   }
 
 
    //   this.ar.params.subscribe(dt=>{
  //     this.subsubid=dt.subsubcatid;
  //     userservice.serGetProductsOfsubsubid({ssid:this.subsubid}).subscribe(dt=>{
  //       this.prodata=dt
  //     })
  //   })
  // }

  ngOnInit() {
  }

}

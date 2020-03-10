import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercommonComponent } from './usercommon/usercommon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import {MatButtonModule, MatInputModule} from "@angular/material";
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { UserComponent } from './user/user.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UpcomingsliderComponent } from './upcomingslider/upcomingslider.component';
import { NewcollectionComponent } from './newcollection/newcollection.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { ActivateComponent } from './activate/activate.component';
import { PaymentComponent } from './payment/payment.component';

const routes:Routes=[
  {path:"",component:UsercommonComponent,children:[
    {path:"",component:UserComponent},
    {path:"hm",component:UserComponent},
    {path:"products",component:ProductsComponent},
    {path:"productinfo",component:ProductinfoComponent},
    {path:"addtocart",component:AddtocartComponent},
    {path:"activate",component:ActivateComponent},
    {path:"payment",component:PaymentComponent}

  ]},
]


@NgModule({
  declarations: [UsercommonComponent, HeaderComponent, FooterComponent, ProductsComponent, ProductinfoComponent, AddtocartComponent, UserComponent, CarouselComponent, UpcomingsliderComponent, NewcollectionComponent, ActivateComponent, PaymentComponent],
  imports: [MatRadioModule,FormsModule,ReactiveFormsModule,
    MatInputModule,MatButtonModule,CommonModule,RouterModule.forChild(routes)
  ],
  providers:[HeaderComponent]
})

export class UserModule { }

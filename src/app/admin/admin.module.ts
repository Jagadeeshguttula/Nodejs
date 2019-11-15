import { HttpClient } from '@angular/common/http';
import { RoleadminService } from './../gaurds/roleadmin.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule} from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule} from '@angular/material/input';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { MatButtonModule} from "@angular/material/button";
import { MatToolbarModule} from '@angular/material';
import { MatMenuModule}  from '@angular/material';
import { NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule} from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';
import { BrandComponent } from './brand/brand.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { NotauthorisedComponent } from './notauthorised/notauthorised.component';

const obj:Routes= [
{path:"",component:AdmincommonComponent,
children:[
  {path:"cat",component:CategoryComponent,
  canActivate:[RoleadminService],data:{role:"admin"}},
  {path:"subcat",component:SubcategoryComponent,
  canActivate:[RoleadminService],data:{role:"admin"}},
  {path:"subsubcat",component:SubsubcategoryComponent,
  canActivate:[RoleadminService],data:{role:"admin"}},
  {path:"brand",component:BrandComponent,
  canActivate:[RoleadminService],data:{role:"manager"}},
  {path:"products",component:ProductsComponent,
  canActivate:[RoleadminService],data:{role:"manager"}},
  {path:"login",component:LoginComponent},
  {path:"**",component:NotauthorisedComponent}
]}
];
@NgModule({
  declarations: [AdmincommonComponent, CategoryComponent, 
    SubcategoryComponent,
    SubsubcategoryComponent, 
    BrandComponent, 
    ProductsComponent, LoginComponent,NotauthorisedComponent],
  imports: [
    FormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatSidenavModule,
    CommonModule,
    MatSelectModule,
    RouterModule.forChild(obj)
  ]
})
export class AdminModule { }

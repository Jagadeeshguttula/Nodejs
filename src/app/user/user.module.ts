import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercommonComponent } from './usercommon/usercommon.component';
const routes:Routes=[
  {path:"",component:UsercommonComponent}
]


@NgModule({
  declarations: [UsercommonComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }

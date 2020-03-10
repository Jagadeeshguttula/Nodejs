import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgGridModule } from '@ag-grid-community/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

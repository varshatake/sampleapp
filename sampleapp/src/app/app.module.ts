import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CardsComponent } from './cards/cards.component';
import { ProductsComponent } from './products/products.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { Childproduct1Component } from './products/childproduct1/childproduct1.component';
import { Childproduct2Component } from './products/childproduct2/childproduct2.component';
import { Childproduct3Component } from './products/childproduct3/childproduct3.component';
import { Childproduct4Component } from './products/childproduct4/childproduct4.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactusComponent,
    CardsComponent,
    ProductsComponent,
    PgnotfoundComponent,
    Childproduct1Component,
    Childproduct2Component,
    Childproduct3Component,
    Childproduct4Component,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

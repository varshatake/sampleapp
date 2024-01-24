import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CardsComponent } from './cards/cards.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { ProductsComponent } from './products/products.component';
import { Childproduct1Component } from './products/childproduct1/childproduct1.component';
import { Childproduct2Component } from './products/childproduct2/childproduct2.component';
import { Childproduct3Component } from './products/childproduct3/childproduct3.component';
import { Childproduct4Component } from './products/childproduct4/childproduct4.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'', redirectTo:'contact',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactusComponent},
  {path:'card',component:CardsComponent},
  {path:'product',component:ProductsComponent,children: [
    {path:'childroute1',component:Childproduct1Component},
    {path:'childroute2',component:Childproduct2Component},
    {path:'childroute3',component:Childproduct3Component},
    {path:'childroute4',component:Childproduct4Component},
  ]},
  {path:'user',component:UserComponent},
  {path:'**',component:PgnotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

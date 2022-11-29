import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { PetViewComponent } from './pet-view/pet-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { PublicViewComponent } from './public-view/public-view.component';
import { QuotesViewComponent } from './quotes-view/quotes-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserOneViewComponent } from './user-one-view/user-one-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';


const myRoutes:Routes = [
  {
    path:"",
    component:PassengerViewComponent
  },
  {
    path:"us",
    component:PublicViewComponent
  },
  {
    path:"userinfo",
    component:UserViewComponent
  },
  {
    path:"shopping",
    component:ProductViewComponent
  },
  {
    path:"userdata",
    component:UserOneViewComponent
  },
  {
    path:"todo",
    component:PetViewComponent
  },
  {
    path:"quotes",
    component:QuotesViewComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    PetViewComponent,
    ProductViewComponent,
    PublicViewComponent,
    QuotesViewComponent,
    UserViewComponent,
    UserOneViewComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

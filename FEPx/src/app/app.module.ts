import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViverosComponent } from './viveros/viveros.component';
import { HomeComponent } from './home/home.component';
import { ProductoresComponent } from './productores/productores.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViverosComponent,
    HomeComponent,
    ProductoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

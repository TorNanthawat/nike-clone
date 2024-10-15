import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewProductComponent } from './new-product/new-product.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { HitProductComponent } from './hit-product/hit-product.component';
import { ClassicProductsComponent } from './classic-products/classic-products.component';
import { NotMissComponent } from './not-miss/not-miss.component';
import { TypeSportComponent } from './type-sport/type-sport.component';
import { MemberProductComponent } from './member-product/member-product.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewProductComponent,
    FeaturedProductsComponent,
    NewProductsComponent,
    HitProductComponent,
    ClassicProductsComponent,
    NotMissComponent,
    TypeSportComponent,
    MemberProductComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

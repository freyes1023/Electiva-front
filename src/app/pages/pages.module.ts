import { ProductsModule } from './../components/products/products.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ProductsModule,
  ]

})
export class PagesModule { }

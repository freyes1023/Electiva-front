import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
    FormComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ProductComponent, ListComponent, FormComponent],
  providers: [ProductsService]
})
export class ProductsModule { }

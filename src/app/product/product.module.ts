import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent,
    ProductManagementComponent
  ],
  exports: [ProductManagementComponent]
})
export class ProductModule { }
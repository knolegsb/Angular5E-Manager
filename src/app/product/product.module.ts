import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductStatusPipe } from './product-status.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent,
    ProductManagementComponent,
    ProductDetailComponent,
    ProductStatusPipe
],
  exports: [ProductManagementComponent]
})
export class ProductModule { }
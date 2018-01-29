import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryManagementComponent } from './category-management/category-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent,
    CategoryManagementComponent
  ],
  exports: [CategoryManagementComponent]
})
export class CategoryModule { }
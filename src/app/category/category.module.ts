import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent,
    CategoryManagementComponent,
    CategoryDetailComponent
],
  exports: [CategoryManagementComponent]
})
export class CategoryModule { }
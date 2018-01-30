import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryItemComponent } from './category-management/category-item/category-item.component';
import { CAT_LIST_PAGE_SIZE } from './category.tokens';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryComponent,
    CategoryManagementComponent,
    CategoryDetailComponent,
    CategoryItemComponent
  ],
  // exports: [CategoryManagementComponent, CategoryDetailComponent, CategoryItemComponent],
  providers: [{provide: CAT_LIST_PAGE_SIZE, useValue: 3}]
})
export class CategoryModule { }
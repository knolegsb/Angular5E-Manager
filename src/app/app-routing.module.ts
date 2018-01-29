import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainDashboardComponent } from './scm-main/main-dashboard/main-dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './scm-main/page-not-found/page-not-found.component';

const routes: Routes = [  
  { path: "product-list", component: ProductComponent },
  { path: "category-list", component: CategoryComponent },
  { path: "total-summary", component: MainDashboardComponent },
  { path: "", redirectTo: 'total-summary', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
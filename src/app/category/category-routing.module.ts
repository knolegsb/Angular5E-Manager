import { Routes, RouterModule } from "@angular/router";
import { CategoryManagementComponent } from "./category-management/category-management.component";
import { CategoryListResolverService } from "./category-management/category-list-resolver.service";
import { SessionAuthGuardService } from "../shared/session-auth-guard.service";
import { CategoryDetailResolverService } from "./category-detail/category-detail-resolver.service";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { CanDeactivateGuardService } from "../shared/can-deactivate-guard.service";
import { NgModule } from "@angular/core";


const routes: Routes = [{
    path: 'category-list', children: [
        {
            path: '',
            pathMatch: 'full',
            resolve: {list: CategoryListResolverService},
            component: CategoryManagementComponent
        },
        {
            path: 'category/:no',
            canActivate: [SessionAuthGuardService],
            resolve: {categorry: CategoryDetailResolverService},
            canDeactivate: [CanDeactivateGuardService],
            component: CategoryDetailComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],    
    providers: [
        CategoryDetailResolverService,
        CategoryListResolverService
    ],
    exports: [RouterModule]
})
export class CategoryRoutingModule {
    
}
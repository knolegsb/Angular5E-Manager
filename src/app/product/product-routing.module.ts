import { NgModule } from "@angular/core";
import { ProductDetailResolverService } from "./product-detail/product-detail-resolver.service";
import { ProductListResolverService } from "./product-management/product-list/product-list-resolver.service";
import { RouterModule } from "@angular/router";
import { SessionAuthGuardService } from "../shared/session-auth-guard.service";
import { ProductManagementComponent } from "./product-management/product-management.component";
import { CanDeactivateGuardService } from "../shared/can-deactivate-guard.service";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
    {
        path: 'product-list', children: [
            {
                path: '',
                pathMatch: 'full',
                canActivate: [SessionAuthGuardService],
                resolve: {list: ProductListResolverService},
                component: ProductManagementComponent
            },
            {
                path: '',
                resolve: {detail: ProductDetailResolverService},
                canDeactivate: [CanDeactivateGuardService],
                component: ProductDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ProductDetailResolverService,
        ProductListResolverService
    ]
})
export class ProductRoutingModule {}
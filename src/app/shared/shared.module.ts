import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DataStoreService } from './data-store.service';
import { NoCounterService } from './no-counter.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        DataStoreService, NoCounterService
    ],
    declarations: [LoadingSpinnerComponent],
    exports: [LoadingSpinnerComponent]
})

export class SharedModule {
}

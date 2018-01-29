import { Component, ViewContainerRef } from '@angular/core';
import { SidebarMenu } from './scm-main/sidebar/sidebar.component';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMenu: SidebarMenu;

  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }
}

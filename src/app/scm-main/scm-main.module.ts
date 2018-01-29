import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const CORE_COMPONENTS = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class ScmMainModule { }
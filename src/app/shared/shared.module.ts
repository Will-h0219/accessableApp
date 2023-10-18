import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material/material.module';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './layout/components/sidenav-content/sidenav-content.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material/material.module';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './layout/components/sidenav-content/sidenav-content.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavContentComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

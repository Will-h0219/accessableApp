import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material/material.module';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { SidenavContentComponent } from './layout/components/sidenav-content/sidenav-content.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavContentComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

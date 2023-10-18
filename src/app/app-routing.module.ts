import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/events/pages/home/home.component';
import { EventDetailComponent } from './core/events/pages/event-detail/event-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:eventId', loadComponent: () => import('./core/events/pages/event-detail/event-detail.component').then(c => c.EventDetailComponent) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

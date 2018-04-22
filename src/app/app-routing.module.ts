import { ShotsComponent } from './shots/shots.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShotsComponent
  },
  {
    path: 'shots',
    component: ShotsComponent
  },
  {
    path: 'shot/:id',
    redirectTo: '',
    component: ShotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

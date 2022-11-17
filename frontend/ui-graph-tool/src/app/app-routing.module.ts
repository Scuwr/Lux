import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-component/main.component';
import { ViewerComponent } from './viewer-component/viewer.component';

const routes: Routes = [
  { path: 'home', component: MainComponent,},
  { path: 'view', component: ViewerComponent,},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
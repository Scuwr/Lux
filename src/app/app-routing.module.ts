import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-component/main.component';
import { ViewerComponent } from './viewer-component/viewer.component';
import { SettingsComponent } from './settings/settings.component';
import { DocsComponent } from './docs-component/docs.component';

const routes: Routes = [
  { path: 'home', component: MainComponent,},
  { path: 'view', component: ViewerComponent,},
  { path: 'settings', component: SettingsComponent,},
  { path: 'docs/:article', component: DocsComponent,},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
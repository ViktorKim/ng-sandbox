import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageHomeComponent} from './pages/page/page-home/page-home.component';
import {PageNotFoundComponent} from './pages/page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: PageHomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

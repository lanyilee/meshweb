import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PandectComponent } from './pandect/pandect.component';
import { ServiceListComponent } from './service-list/service-list.component';


const routes: Routes = [
  { path: '', component: PandectComponent},
  { path: 'servicelist', component: ServiceListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

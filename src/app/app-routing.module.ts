import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PandectComponent } from './pandect/pandect.component';


const routes: Routes = [
  { path: '', component: PandectComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

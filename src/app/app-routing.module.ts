import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PandectComponent } from './pandect/pandect.component';
import { TrafficManagementComponent } from './traffic-management/traffic-management.component';
import { IstioManageComponent } from './istio-manage/istio-manage.component';
import { MonitorCenterComponent } from './monitor-center/monitor-center.component';


const routes: Routes = [
  { path: '', component: PandectComponent},
  { path: 'trafficmanage', component: TrafficManagementComponent},
  { path: 'istiomanage', component: IstioManageComponent},
  { path: 'monitorcenter', component: MonitorCenterComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

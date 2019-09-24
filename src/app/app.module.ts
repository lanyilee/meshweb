import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PandectComponent } from './pandect/pandect.component';
import { TrafficManagementComponent } from './traffic-management/traffic-management.component';
import { IstioManageComponent } from './istio-manage/istio-manage.component';
import { MonitorCenterComponent } from './monitor-center/monitor-center.component';

@NgModule({
   declarations: [
      AppComponent,
      SideBarComponent,
      PandectComponent,
      TrafficManagementComponent,
      IstioManageComponent,
      MonitorCenterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

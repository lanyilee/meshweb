import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PandectComponent } from './pandect/pandect.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
   declarations: [
      AppComponent,
      SideBarComponent,
      PandectComponent,
      ServiceListComponent
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

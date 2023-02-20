import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SingleIpComponent } from './single-ip/single-ip.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { RangeIpComponent } from './range-ip/range-ip.component';
import { timeRangeIpComponent } from './timeRange-ip/timeRange-ip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SingleIpComponent,
    SideNavComponent,
    RangeIpComponent,
    timeRangeIpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    BrowserAnimationsModule,AgGridModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

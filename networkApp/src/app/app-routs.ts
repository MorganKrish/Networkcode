import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RangeIpComponent } from './range-ip/range-ip.component';
import { SingleIpComponent } from './single-ip/single-ip.component';
import { timeRangeIpComponent } from './timeRange-ip/timeRange-ip.component';

export const routes: Routes = [
  {
    path:"singleIp",
    component:SingleIpComponent,
    
  },
  {
    path:"rangeIp",
    component:RangeIpComponent,
    
  },
  {
    path:"timerangeIp",
    component:timeRangeIpComponent
    
  },
  {
    path:"**",
    component:HomeComponent
  }
 
];


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavRoutingModule } from './main-nav-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainNavRoutingModule,
    MaterialModule
  ],
  exports:[NavbarComponent]
})
export class MainNavModule { }

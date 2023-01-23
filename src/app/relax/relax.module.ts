import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelaxRoutingModule } from './relax-routing.module';
import { AllComponent } from './all/all.component';
import { RelaxNavbarComponent } from './relax-navbar/relax-navbar.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { SelfCalmComponent } from './self-calm/self-calm.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AllComponent,
    RelaxNavbarComponent,
    MyfavouriteComponent,
    BeginnersComponent,
    SelfCalmComponent
  ],
  imports: [
    CommonModule,
    RelaxRoutingModule,
    MaterialModule
  ]
})
export class RelaxModule { }

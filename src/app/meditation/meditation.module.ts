import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeditationRoutingModule } from './meditation-routing.module';
import { AllComponent } from './all/all.component';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { StressComponent } from './stress/stress.component';
import { MeditaionNavbarComponent } from './meditaion-navbar/meditaion-navbar.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { AppModule } from '../app.module';
import { MainNavModule } from '../main-nav/main-nav.module';


@NgModule({
  declarations: [
    AllComponent,
    MyfavoriteComponent,
    BeginnersComponent,
    StressComponent,
    MeditaionNavbarComponent,

  ],
  imports: [
    CommonModule,
    MeditationRoutingModule,
    MaterialModule,
    MainNavModule
  ],
  exports:[MyfavoriteComponent]
})
export class MeditationModule { }

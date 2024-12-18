import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelodiesRoutingModule } from './melodies-routing.module';
import { AllComponent } from './all/all.component';
import { MelodiesNavComponent } from './melodies-nav/melodies-nav.component';
import { NatureComponent } from './nature/nature.component';
import { MusicalComponent } from './musical/musical.component';
import { CategoryComponent } from './category/category.component';
import { ShadowDirective } from '../Directives/shadow.directive';
import { MaterialModule } from '../material/material.module';
import { MainNavModule } from '../main-nav/main-nav.module';
import { FormsModule } from '@angular/forms';
import { ActiveTrackDirective } from '../Directives/active-track.directive';


@NgModule({
  declarations: [
    AllComponent,
    MelodiesNavComponent,
    NatureComponent,
    MusicalComponent,
    CategoryComponent,
    ShadowDirective,
    ActiveTrackDirective,
  ],
  imports: [
    CommonModule,
    MelodiesRoutingModule,
    MaterialModule,
    MainNavModule,
    FormsModule
  ]
})
export class MelodiesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditaionNavbarComponent } from './meditaion-navbar/meditaion-navbar.component';
import { AllComponent } from './all/all.component';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { StressComponent } from './stress/stress.component';

const routes: Routes = [
  {
    path:'meditation-nav',component:MeditaionNavbarComponent
  },
  {
    path:'all',component:AllComponent
  },
  {
    path:'myfavorite',component:MyfavoriteComponent
  },
  {
    path:'beginner',component:BeginnersComponent
  },
  {
    path:'stress',component:StressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeditationRoutingModule { }

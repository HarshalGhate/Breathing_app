import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { SelfCalmComponent } from './self-calm/self-calm.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';

const routes: Routes = [
  {
    path:'all',component:AllComponent
  },
  {
    path:'beginner',component:BeginnersComponent
  },
  {
    path:'myfavorite',component:MyfavouriteComponent
  },
  {
    path:'self-calm',component:SelfCalmComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelaxRoutingModule { }

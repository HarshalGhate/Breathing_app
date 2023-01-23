import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NatureComponent } from './nature/nature.component';
import { MusicalComponent } from './musical/musical.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:'',redirectTo:'all',pathMatch:'full'},
  {path:'all',component:AllComponent},
  {path:'nature',component:NatureComponent},
  {path:'musical',component:MusicalComponent},
  {path:'category',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MelodiesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'meditation',loadChildren:()=>import('./meditation/meditation.module').then(m=>m.MeditationModule)},
  {path:'relax',loadChildren:()=>import('./relax/relax.module').then(m=>m.RelaxModule)},
  {path:'melodies',loadChildren:()=>import('./melodies/melodies.module').then(m=>m.MelodiesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

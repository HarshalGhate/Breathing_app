import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BreathAnimationComponent } from './Components/breath-animation/breath-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreathAnimationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

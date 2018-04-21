import { ShotsService } from './services/shots.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShotsComponent } from './shots/shots.component';
import { ShotComponent } from './shot/shot.component';


@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent,
    ShotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

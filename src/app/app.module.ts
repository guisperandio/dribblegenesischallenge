import { ShotsService } from './services/shots.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShotsComponent } from './shots/shots.component';
import { ShotComponent } from './shot/shot.component';
import { OverlayComponent } from './overlay/overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent,
    ShotComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

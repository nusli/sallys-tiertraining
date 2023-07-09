import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './Modules/routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { LandingHeroComponent } from './Landing/landing-hero/landing-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHeroComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

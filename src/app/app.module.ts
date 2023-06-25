import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './Modules/routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

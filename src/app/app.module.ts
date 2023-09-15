import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './Modules/routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { NavigationComponent } from './Shared/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QualisComponent } from './qualis/qualis.component';
import { HttpClientModule } from '@angular/common/http'
import { FirestoreModule, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { CookieDisclaimerComponent } from './cookie-disclaimer/cookie-disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    GalleryComponent,
    QualisComponent,
    CookieDisclaimerComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }

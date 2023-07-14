import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './Modules/routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GlossarComponent } from './glossar/glossar.component';
import { GlossarArticleComponent } from './Glossar/glossar-article/glossar-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    GalleryComponent,
    GlossarComponent,
    GlossarArticleComponent
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

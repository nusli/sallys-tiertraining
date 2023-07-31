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
import { GlossarComponent } from './glossar/glossar.component';
import { GlossarArticleComponent } from './glossar/glossar-article/glossar-article.component';
import { QualisComponent } from './qualis/qualis.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    GalleryComponent,
    GlossarComponent,
    GlossarArticleComponent,
    QualisComponent,
    PartnersComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

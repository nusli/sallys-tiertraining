import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieDisclaimerComponent } from './cookie-disclaimer/cookie-disclaimer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonComponent } from './button/button.component';
import { PictureFrameComponent } from './picture-frame/picture-frame.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { PictureArticleComponent } from './picture-article/picture-article.component';



@NgModule({
  declarations: [CookieDisclaimerComponent, HeroSectionComponent, ButtonComponent, PictureFrameComponent, TrainingsComponent, PictureArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [CookieDisclaimerComponent, HeroSectionComponent, ButtonComponent, PictureFrameComponent, TrainingsComponent, PictureArticleComponent]
})

export class SharedModule { }

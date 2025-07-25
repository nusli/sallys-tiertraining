import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonComponent } from './button/button.component';
import { PictureFrameComponent } from './picture-frame/picture-frame.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { PictureArticleComponent } from './picture-article/picture-article.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeroSectionComponent, ButtonComponent, PictureFrameComponent, TrainingsComponent, PictureArticleComponent],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [HeroSectionComponent, ButtonComponent, PictureFrameComponent, TrainingsComponent, PictureArticleComponent]
})

export class SharedModule { }

/**
 * This file consolidates all the exports for the "Shared" folder
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonComponent } from './button/button.component';
import { PictureFrameComponent } from './picture-frame/picture-frame.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { PictureArticleComponent } from './picture-article/picture-article.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeroSectionComponent, ButtonComponent, PictureFrameComponent, TrainingsComponent, PictureArticleComponent, ImageGalleryComponent],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [HeroSectionComponent, ButtonComponent, PictureFrameComponent, TrainingsComponent, PictureArticleComponent, ImageGalleryComponent]
})

export class SharedModule { }

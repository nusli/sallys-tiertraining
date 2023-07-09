import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./courses/courses.component";
import { LandingHeroComponent } from "./landing-hero/landing-hero.component";
import { LandingComponent } from "./landing/landing.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [CoursesComponent, LandingHeroComponent, LandingComponent],
  imports: [
    CommonModule
  ],
  exports: [CoursesComponent, LandingHeroComponent, LandingComponent]
})

export class LandingModule { }

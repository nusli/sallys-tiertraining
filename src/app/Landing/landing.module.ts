import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./courses/courses.component";
import { LandingHeroComponent } from "./landing-hero/landing-hero.component";
import { LandingComponent } from "./landing.component";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Shared/shared.module";

@NgModule({
  declarations: [CoursesComponent, LandingHeroComponent, LandingComponent, CardComponent],
  imports: [
    CommonModule, SharedModule,  RouterModule.forChild([
      {path: '', component:LandingComponent},
    ])
  ],
  exports: [CoursesComponent, LandingHeroComponent, LandingComponent, CardComponent]
})

export class LandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from 'src/app/Landing/landing/landing.component';
import { MeComponent } from 'src/app/Me/me/me.component';
import { GroupComponent } from 'src/app/Group/group/group.component';
import { HorseComponent } from 'src/app/Horse/horse/horse.component';
import { ImpressumComponent } from 'src/app/Impressum/impressum/impressum.component';
import { IndividualComponent } from 'src/app/Individual/individual/individual.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from 'src/app/Landing/courses/courses.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'DasBinIch', component: MeComponent},
  {path: 'Hundegruppentraining', component: GroupComponent},
  {path: 'Reitunterricht', component: HorseComponent},
  {path: 'Hundeeinzeltraining', component: IndividualComponent},
  {path: 'Impressum', component: ImpressumComponent},
];

@NgModule({
  declarations: [LandingComponent,ImpressumComponent,MeComponent, GroupComponent, HorseComponent, IndividualComponent,
  CoursesComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
  ],
  exports: [RouterModule]
})

export class RoutingModule { }

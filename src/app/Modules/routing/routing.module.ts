import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from 'src/app/Me/me/me.component';
import { GroupComponent } from 'src/app/Group/group/group.component';
import { HorseComponent } from 'src/app/Horse/horse/horse.component';
import { ImpressumComponent } from 'src/app/Impressum/impressum/impressum.component';
import { IndividualComponent } from 'src/app/Individual/individual/individual.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingModule } from 'src/app/Landing/landing.module';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { GlossarComponent } from 'src/app/glossar/glossar.component';
import { SharedModule } from 'src/app/Shared/shared.module';


export const routes: Routes = [
  {path: 'DasBinIch', component: MeComponent},
  {path: 'Hundegruppentraining', component: GroupComponent},
  {path: 'Reitunterricht', component: HorseComponent},
  {path: 'Hundeeinzeltraining', component: IndividualComponent},
  {path: 'Impressum', component: ImpressumComponent},
  {path: 'Galerie', component: GalleryComponent},
  {path: 'Glossar', component: GlossarComponent},
];

@NgModule({
  declarations: [ImpressumComponent,MeComponent, GroupComponent, HorseComponent, IndividualComponent],
  imports: [
    CommonModule, FormsModule, SharedModule, LandingModule, RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
  ],
  exports: [RouterModule]
})

export class RoutingModule { }

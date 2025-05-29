import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from 'src/app/me/me.component';
import { GroupComponent } from 'src/app/group/group.component';
import { HorseComponent } from 'src/app/horse/horse.component';
import { ImpressumComponent } from 'src/app/impressum/impressum.component';
import { IndividualComponent } from 'src/app/individual/individual.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingModule } from 'src/app/Landing/landing.module';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ContactComponent } from 'src/app/contact/contact.component';
import { QualisComponent } from 'src/app/qualis/qualis.component';
import { StableComponent } from 'src/app/stable/stable.component';
import { PensionComponent } from 'src/app/pension/pension.component';


export const routes: Routes = [
  {path: 'DasBinIch', component: MeComponent},
  {path: 'Hundegruppentraining', component: GroupComponent},
  {path: 'Reitunterricht', component: HorseComponent},
  {path: 'Hundeeinzeltraining', component: IndividualComponent},
  {path: 'Reitstall', component: StableComponent},
  {path: 'Pension', component: PensionComponent},
  {path: 'Impressum', component: ImpressumComponent},
  {path: 'Galerie', component: GalleryComponent},
  {path: 'Kontakt', component: ContactComponent},
  {path: 'Qualifikationen', component: QualisComponent},
];

@NgModule({
  declarations: [ImpressumComponent,MeComponent, GroupComponent, HorseComponent, IndividualComponent, ContactComponent],
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

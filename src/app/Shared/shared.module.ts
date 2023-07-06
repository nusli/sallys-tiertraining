import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieDisclaimerComponent } from './cookie-disclaimer/cookie-disclaimer.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [CookieDisclaimerComponent, FooterComponent, HeroSectionComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [CookieDisclaimerComponent, FooterComponent, HeroSectionComponent, NavigationComponent]
})

export class SharedModule { }

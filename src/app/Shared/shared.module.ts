import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieDisclaimerComponent } from './cookie-disclaimer/cookie-disclaimer.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [CookieDisclaimerComponent, FooterComponent, HeroSectionComponent, NavigationComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CookieDisclaimerComponent, FooterComponent, HeroSectionComponent, NavigationComponent, ButtonComponent]
})

export class SharedModule { }

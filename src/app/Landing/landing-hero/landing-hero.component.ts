import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-hero',
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.scss']
})
export class LandingHeroComponent {
@Input() mobilePortrait = false;
}

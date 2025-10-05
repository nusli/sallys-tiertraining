import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';
import { SharedModule } from "src/app/Shared/shared.module";

@Component({
  selector: 'app-springgymnastik',
  templateUrl: './springgymnastik.component.html',
  styleUrl: './springgymnastik.component.scss',
  imports: [SharedModule],
  standalone: true
})
export class SpringgymnastikComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  // Scroll to the top on load because Scrollrestoration does not work for some reason.
  ngAfterViewInit() {
    // scroll to top of page
    // other methods of scrolling do not work because angular overrides the viewport body
    const component = document.querySelector("app-hero-section");
    if (component) {
      component.scrollIntoView({behavior: "instant"})
    }
  }
}

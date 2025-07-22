import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';

@Component({
  selector: 'app-abzeichen',
  templateUrl: './abzeichen.component.html',
  styleUrls: ['./abzeichen.component.scss']
})
export class AbzeichenComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  // Scroll to the top on load because Scrollrestoration does not work for some reason.
  ngAfterViewInit(): void {
    document.body.scrollTop = 0;
  }

}

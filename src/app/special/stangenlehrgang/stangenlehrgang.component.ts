import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';

@Component({
  selector: 'app-stangenlehrgang',
  templateUrl: './stangenlehrgang.component.html',
  styleUrls: ['./stangenlehrgang.component.scss']
})
export class StangenlehrgangComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  ngAfterViewInit(): void {
    document.body.scrollTop = 0;
  }
}

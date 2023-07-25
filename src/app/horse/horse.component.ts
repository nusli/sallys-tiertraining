import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
}

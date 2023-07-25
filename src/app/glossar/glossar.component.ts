import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-glossar',
  templateUrl: './glossar.component.html',
  styleUrls: ['./glossar.component.scss']
})
export class GlossarComponent {
@Input() mobilePortrait = false;
@Input() hero!: Hero;
}

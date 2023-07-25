import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
}

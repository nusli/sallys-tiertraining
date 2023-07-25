import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
}

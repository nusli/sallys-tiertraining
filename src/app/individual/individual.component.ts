import { Component, Input } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
}

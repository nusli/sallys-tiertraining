import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';

@Component({
  selector: 'app-trainingswochenende',
  templateUrl: './trainingswochenende.component.html',
  styleUrls: ['./trainingswochenende.component.scss']
})
export class TrainingswochenendeComponent {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  ngAfterViewInit(): void {
    document.body.scrollTop = 0;
  }
}

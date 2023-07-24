import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.scss']
})
export class HorseComponent {
  @Input() mobilePortrait = false;
}

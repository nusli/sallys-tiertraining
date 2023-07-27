import { Component, Input } from '@angular/core';
import { Card } from 'src/app/Models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() mobilePortrait = false;
@Input() cardContent!: Card;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glossar',
  templateUrl: './glossar.component.html',
  styleUrls: ['./glossar.component.scss']
})
export class GlossarComponent {
@Input() mobilePortrait = false;
}

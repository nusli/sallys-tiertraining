import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() primary = true;
  @Input() withContext = false;
  @Input() buttonTitle = "";

  context_open = false;
}

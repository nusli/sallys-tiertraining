import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() primary = true;
  @Input() withContext = false;
  @Input() buttonTitle = "";
  @Input() mobilePortrait = false;

  context_open = false;

  buttonFontSize = 1;

  ngOnInit(): void {
    if (this.mobilePortrait){this.buttonFontSize = 0.88}
  }

}

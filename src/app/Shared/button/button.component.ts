import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = "button";
  @Input() cookieButton = false;
  @Input() primary = true;
  @Input() withContext = false;
  @Input() buttonTitle = "";
  @Input() mobilePortrait = false;
  cookiesAccepted = false;

  context_open = false;

  buttonFontSize = 1;

  @Output() cookiesAcceptedChanged = new EventEmitter<boolean>()

  ngOnInit(): void {
    if (this.mobilePortrait){this.buttonFontSize = 0.88}
  }

  clickOn(tag:string){
    if (tag === "p"){
      if (this.cookieButton){this.cookiesAccepted = true}
      this.cookiesAcceptedChanged.emit(this.cookiesAccepted);
    }
  }
}

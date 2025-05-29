import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonEntry } from 'src/app/Models/button-entry.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = "button";
  @Input() cookieButton = false;
  @Input() buttonDesign = "primary";
  @Input() withContext = false;
  @Input() buttonTitle = "";
  @Input() mobilePortrait = false;
  @Input() disabled = false;

  cookiesAccepted = false;

  context_open = false;

  buttonFontSize = 1;

  @Output() cookiesAcceptedChanged = new EventEmitter<boolean>()

  constructor(private router:Router){

  }
  ngOnInit(): void {
    if (this.mobilePortrait){this.buttonFontSize = 0.88}
  }

  clickOn(tag:string){
    if (tag === "p"){
      if (this.cookieButton){this.cookiesAccepted = true;
        this.cookiesAcceptedChanged.emit(this.cookiesAccepted);
      }
    }
  }
}

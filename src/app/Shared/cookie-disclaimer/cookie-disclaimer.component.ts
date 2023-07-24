import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cookie-disclaimer',
  templateUrl: './cookie-disclaimer.component.html',
  styleUrls: ['./cookie-disclaimer.component.scss']
})
export class CookieDisclaimerComponent implements OnInit {
  @Input() mobilePortrait = false;
  constructor() { }

  cookiesAccepted = false;
  @Output() cookiesAcceptedChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  changeCookiesAccepted(value: boolean){
    this.cookiesAccepted = value;
    this.cookiesAcceptedChanged.emit(this.cookiesAccepted);
  }
}

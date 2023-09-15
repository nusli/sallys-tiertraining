import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-disclaimer',
  templateUrl: './cookie-disclaimer.component.html',
  styleUrls: ['./cookie-disclaimer.component.scss']
})
export class CookieDisclaimerComponent implements OnInit {
  @Input() mobilePortrait = false;
  private cookie_name='';
  private all_cookies:any='';

  constructor(private cookieService:CookieService) { }

  cookiesAccepted = false;

  @Output() cookiesAcceptedChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
  }


  setCookie(){
    this.cookieService.set('name','sallys-tiertraining');
    console.log(this.cookieService.get('name'))
  }

  changeCookiesAccepted(value: boolean){
    this.cookiesAccepted = value;
    this.setCookie();
    this.cookiesAcceptedChanged.emit(this.cookiesAccepted);
  }
}

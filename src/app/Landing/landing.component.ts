import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input() mobilePortrait = false;
  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }

}

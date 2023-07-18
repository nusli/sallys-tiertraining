import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})

export class HeroSectionComponent implements OnInit {

  @Input() mobilePortrait = false;
  constructor() { }

  ngOnInit(): void {
  }

}

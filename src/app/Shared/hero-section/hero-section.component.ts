import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})

export class HeroSectionComponent implements OnInit {

  @Input() mobilePortrait = false;
  @Input() hero!:Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}

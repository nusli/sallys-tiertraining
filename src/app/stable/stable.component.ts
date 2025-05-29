import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';

@Component({
  selector: 'app-stable',
  templateUrl: './stable.component.html',
  styleUrls: ['./stable.component.scss']
})
export class StableComponent implements OnInit {
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  ngOnInit(): void {
    // this.hero = {
    //   id: "stallangebote",
    //   title: "Stallangebote",
    //   subtitle: "Wir bieten Ihnen ein umfassendes Angebot für Ihre Pferde. Unsere Stallungen sind modern und hygienisch, um Ihren Tieren ein angenehmes Zuhause zu gewährleisten.",
    //   pictureUrl: "../../../assets/pictures/stallangebote.jpg",
    //   pictureUrlDesk: "../../../assets/pictures/stallangebote.jpg",
    //   text: "Wir bieten Ihnen ein umfassendes Angebot für Ihre Pferde. Unsere Stallungen sind modern und hygienisch, um Ihren Tieren ein angenehmes Zuhause zu gewährleisten.",
    // }
  }
}

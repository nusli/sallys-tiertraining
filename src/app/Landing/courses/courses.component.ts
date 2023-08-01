import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() mobilePortrait = false;
  leftArrowActive = false;
  rightArrowActive = true;
  direction = "right";
  xWidth = window.innerWidth;
  cardMargin = 20;
  cards: Card[] = [
    {
      id: "funagility",
      pictureUrl: "../../../assets/backgrounds/cards-pictures/fun.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/cards-pictures/fun.JPG",
      title: "Fun Agility",
      text: "Mit einem Hindernisparcours zu Spaß und Auslastung",
      link: "/Hundegruppentraining",
      fragment: "funagility",
    },
    {
      id: "locagility",
      pictureUrl: "../../../assets/backgrounds/cards-pictures/local.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/cards-pictures/local.jpg",
      title: "Locagility",
      text: "Kognitive & körperlichen Auslastung für Hunde aller Altersklassen",
      link: "/Hundegruppentraining",
      fragment: "locagility",
    },
    {
      id: "tricks",
      pictureUrl: "../../../assets/backgrounds/cards-pictures/tricks.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/cards-pictures/tricks.jpg",
      title: "Tricks und Parcours",
      text: `Mehr als "Sitz" und "Platz"`,
      link: "/Hundegruppentraining",
      fragment: "tricks",
    },
    {
      id: "mantrailing",
      pictureUrl: "../../../assets/backgrounds/cards-pictures/mantrailing.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/cards-pictures/mantrailing.jpg",
      title: "Mantrailing",
      text: "Artgerechtes Auslasten für Hunde",
      link: "/Hundegruppentraining",
      fragment: "mantrailing",
    },
  ]

  constructor() { }

  ngOnInit(): void {
    if(this.mobilePortrait){this.cardMargin = (this.xWidth - 96 - 210 - 0.1666*this.xWidth)/2;}
  }

  onClick(direction: string): void{
    this.move();
  }

  move(){
    const slidesContainer = document.querySelector("#landing-courses-slides-container");
    if(this.direction == "left"){
      this.rightArrowActive = true;
      if(slidesContainer!.scrollLeft - slidesContainer!.clientWidth <= 0){
        this.leftArrowActive = false;
        this.direction = "right";
      }
      slidesContainer!.scrollLeft -= slidesContainer!.clientWidth;

    }else{
      this.leftArrowActive = true;

      if(slidesContainer!.scrollLeft + slidesContainer!.clientWidth >= slidesContainer!.scrollWidth - slidesContainer!.clientWidth){
        this.rightArrowActive = false;
        this.direction = "left";
      }
      slidesContainer!.scrollLeft += slidesContainer!.clientWidth;
    }
  }
}

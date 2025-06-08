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
      pictureUrl: "../../../assets/pictures/card_funagility.JPG",
      pictureUrlDesk: "../../../assets/pictures/card_funagility.JPG",
      title: "Fun Agility",
      text: "Mit einem Hindernisparcours zu Spaß und Auslastung",
      link: "/Hundegruppentraining",
      fragment: "funagility",
    },
    // {
    //   id: "locagility",
    //   pictureUrl: "../../../assets/pictures/card_locagility.jpg",
    //   pictureUrlDesk: "../../../assets/pictures/card_locagility.jpg",
    //   title: "Locagility",
    //   text: "Kognitive & körperlichen Auslastung für Hunde aller Altersklassen",
    //   link: "/Hundegruppentraining",
    //   fragment: "locagility",
    // },
    {
      id: "tricks",
      pictureUrl: "../../../assets/pictures/card_tricks.jpg",
      pictureUrlDesk: "../../../assets/pictures/card_tricks.jpg",
      title: "Tricks und Parcours",
      text: `Mehr als "Sitz" und "Platz"`,
      link: "/Hundegruppentraining",
      fragment: "tricks",
    },
    /* {
      id: "mantrailing",
      pictureUrl: "../../../assets/pictures/card_mantrailing.JPG",
      pictureUrlDesk: "../../../assets/pictures/card_mantrailing.JPG",
      title: "Mantrailing",
      text: "Artgerechtes Auslasten für Hunde",
      link: "/Hundegruppentraining",
      fragment: "mantrailing",
    }, */
    {
      id: "rowdy",
      pictureUrl: "../../../assets/pictures/rowdy_card.jpg",
      pictureUrlDesk: "../../../assets/pictures/card_mantrailing.JPG",
      title: "Rowdy-Gruppe",
      text: "Bereit für den Alltag",
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

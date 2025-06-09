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
  // if link == "", there is no button on the card
  // text 2 only displays if no link is given (for space and layout constraints)
  specialCards: Card[] = [
    {
      id: "jumping",
      pictureUrl: "../../../assets/gallery/placeholder-icon.png",
      pictureUrlDesk: "../../../assets/gallery/placeholder-icon.png",
      title: "Freispringen",
      text: "28. Juni bei uns in der Halle",
      text2: "",
      link: "",
      fragment: "jumping",
      query: {},
    },
    {
      id: "kinderferienwoche",
      pictureUrl: "../../../assets/gallery/placeholder-icon.png",
      pictureUrlDesk: "../../../assets/gallery/placeholder-icon.png",
      title: "Kinderferienwoche",
      text: "10. Juli - 14. Juli",
      text2: "",
      link: "",
      fragment: "holidayweek",
      query: {},
    },
    {
      id: "longe",
      pictureUrl: "../../../assets/gallery/placeholder-icon.png",
      pictureUrlDesk: "../../../assets/gallery/placeholder-icon.png",
      title: "Longenlehrgang",
      text: "18. Juli - 19. Juli",
      text2: "Lehrgang zur Arbeit mit der Longe und Doppellonge.",
      link: "",
      fragment: "longe",
      query: {},
    },
    {
      id: "abzeichen",
      pictureUrl: "../../../assets/gallery/placeholder-icon.png",
      pictureUrlDesk: "../../../assets/gallery/placeholder-icon.png",
      title: "Reitabzeichen",
      text: "5. Oktober - 7. Oktober, Prüfung am 23. Oktober",
      text2: "",
      link: "",
      fragment: "longe",
      query: {},
    },
  ]
  courseCards: Card[] = [
    {
      id: "funagility",
      pictureUrl: "../../../assets/pictures/card_funagility.JPG",
      pictureUrlDesk: "../../../assets/pictures/card_funagility.JPG",
      title: "Fun Agility",
      text: "Mit einem Hindernisparcours zu Spaß und Auslastung",
      text2: "",
      link: "/Hundegruppentraining",
      fragment: "funagility",
      query: {openArticle: "0"},
    },
    /*
    {
      id: "locagility",
      pictureUrl: "../../../assets/pictures/card_locagility.jpg",
      pictureUrlDesk: "../../../assets/pictures/card_locagility.jpg",
      title: "Locagility",
      text: "Kognitive & körperlichen Auslastung für Hunde aller Altersklassen",
      text2: "",
      link: "/Hundegruppentraining",
      fragment: "locagility",
    query: {openArticle: "1"},
    },
    */
    {
      id: "tricks",
      pictureUrl: "../../../assets/pictures/card_tricks.jpg",
      pictureUrlDesk: "../../../assets/pictures/card_tricks.jpg",
      title: "Tricks und Parcours",
      text: `Mehr als "Sitz" und "Platz"`,
      text2: "",
      link: "/Hundegruppentraining",
      fragment: "tricks",
      query: {openArticle: "1"},
    },
    /*
     {
      id: "mantrailing",
      pictureUrl: "../../../assets/pictures/card_mantrailing.JPG",
      pictureUrlDesk: "../../../assets/pictures/card_mantrailing.JPG",
      title: "Mantrailing",
      text: "Artgerechtes Auslasten für Hunde",
      text2: "",
      link: "/Hundegruppentraining",
      fragment: "mantrailing",
      query: {openArticle: "1"},
    },
    */
   /*
    {
      id: "rowdy",
      pictureUrl: "../../../assets/pictures/rowdy_card.jpg",
      pictureUrlDesk: "../../../assets/pictures/rowdy_card.JPG",
      title: "Rowdy-Gruppe",
      text: "Bereit für den Alltag",
      text2: "",
      link: "/Hundegruppentraining",
      fragment: "rowdy",
      query: {openArticle: "1"},
    }, 
    */
  ]

  constructor() { }

  ngOnInit(): void {
    if(this.mobilePortrait){this.cardMargin = (this.xWidth - 96 - 210 - 0.1666*this.xWidth)/2;}
  }

  moveCarousel(direction: string, carouselId: string, contentSource: any[]): void{
    // this.move();
    const slidesContainer = document.querySelector("#" + carouselId);
    // we calculate the number of steps the user has for clicking through the carousel
    // 3 cards are already at display
    // for mobile, scroll steps is always full width (1 step)
    let steps = this.mobilePortrait? 1 : contentSource.length - 3;
    if (steps < 1) steps = 1;
    const scrollStep = slidesContainer!.clientWidth / steps;
    console.log("scrollStep", scrollStep)
    if(direction == "left"){
      this.rightArrowActive = true;
      if(slidesContainer!.scrollLeft - scrollStep <= 0){
        this.leftArrowActive = false;
        this.direction = "right";
      }
      
      slidesContainer!.scrollLeft -= scrollStep;

    }else{
      this.leftArrowActive = true;

      if(slidesContainer!.scrollLeft + scrollStep >= slidesContainer!.scrollWidth - slidesContainer!.clientWidth){
        this.rightArrowActive = false;
        this.direction = "left";
      }
      console.log('scroll', slidesContainer!.scrollLeft, 'width', slidesContainer!.clientWidth)
      slidesContainer!.scrollLeft += scrollStep;
      console.log('scroll', slidesContainer!.scrollLeft, 'width', slidesContainer!.clientWidth)
    }
  }

  // move(){
  //   const slidesContainer = document.querySelector("#landing-courses-slides-container");
  //   if(this.direction == "left"){
  //     this.rightArrowActive = true;
  //     if(slidesContainer!.scrollLeft - slidesContainer!.clientWidth <= 0){
  //       this.leftArrowActive = false;
  //       this.direction = "right";
  //     }
  //     console.log('scroll', slidesContainer!.scrollLeft, 'width', slidesContainer!.clientWidth)
  //     slidesContainer!.scrollLeft -= slidesContainer!.clientWidth;
  //     console.log('scroll', slidesContainer!.scrollLeft, 'width', slidesContainer!.clientWidth)

  //   }else{
  //     this.leftArrowActive = true;

  //     if(slidesContainer!.scrollLeft + slidesContainer!.clientWidth >= slidesContainer!.scrollWidth - slidesContainer!.clientWidth){
  //       this.rightArrowActive = false;
  //       this.direction = "left";
  //     }
  //     console.log('scroll', slidesContainer!.scrollLeft, 'width', slidesContainer!.clientWidth)
  //     slidesContainer!.scrollLeft += slidesContainer!.clientWidth;
  //     console.log('scroll', slidesContainer!.scrollLeft, 'width', slidesContainer!.clientWidth)

  //   }
  // }
}

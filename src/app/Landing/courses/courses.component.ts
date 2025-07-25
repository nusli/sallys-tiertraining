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
      //pictureUrl: "../../../assets/gallery/placeholder-icon.png",
      pictureUrl: "./assets/gallery/placeholder-icon.png",
      pictureUrlDesk: "./assets/gallery/placeholder-icon.png",
      title: "Freispringen",
      text: "19.07., 13.08. bei uns in der Halle",
      text2: "",
      link: "",
      fragment: "jumping",
      query: {},
    },
    {
      id: "longe",
      pictureUrl: "./assets/pictures/coffee.jpg",
      pictureUrlDesk: "./assets/pictures/coffee.jpg",
      title: "Longenlehrgang",
      text: "17.10. - 19.10.",
      text2: "Lehrgang zur Arbeit mit der Longe und Doppellonge.",
      link: "",
      fragment: "longe",
      query: {},
    },
    {
      id: "englisch_lehrgang",
      pictureUrl: "./assets/pictures/sally.jpg",
      pictureUrlDesk: "./assets/pictures/sally.jpg",
      title: "Reitlehrgang auf Englisch",
      text: "Verbessere dein Englisch beim Reiten.",
      text2: "Verbessere dein Englisch beim Reiten.",
      link: "/special/englischlehrgang",
      fragment: "english",
      query: {},
    },
    {
      id: "stangenlehrgang",
      pictureUrl: "./assets/pictures/training_setup.jpg",
      pictureUrlDesk: "./assets/pictures/training_setup.jpg",
      title: "Stangenlehrgang",
      text: "Ein Lehrgang  für alle Reiter ab E-Niveau mit dem Fokus auf Stangenarbeit.",
      text2: `Ein Lehrgang  für alle Reiter ab E-Niveau mit dem Fokus auf Stangenarbeit.`,
      link: "special/stangenlehrgang",
      fragment: "stangenlehrgang",
      query: {},
    },
    {
      id: "trainingswochenende",
      pictureUrl: "./assets/pictures/hunde_mit_pferd.jpg",
      pictureUrlDesk: "./assets/pictures/hunde_mit_pferd.jpg",
      title: "Trainingswochenende für Hunde",
      text: "dreitägiges Intensivtraining für Hunde im August",
      text2: "dreitägiges Intensivtraining für Hunde",
      link: "/special/trainingswochenende",
      fragment: "trainingswochenende",
      query: {},
    },
    {
      id: "abzeichen",
      pictureUrl: "./assets/pictures/reitergruppe.jpg",
      pictureUrlDesk: "./assets/pictures/reitergruppe.jpg",
      title: "Reitabzeichen",
      text: "Mache dein Reitabzeichen oder Pferdeführerschein",
      text2: "",
      link: "special/abzeichen",
      fragment: "longe",
      query: {},
    },
  ]
  courseCards: Card[] = [
    {
      id: "funagility",
      pictureUrl: "./assets/pictures/card_funagility.JPG",
      pictureUrlDesk: "./assets/pictures/card_funagility.JPG",
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
      pictureUrl: "assets/pictures/card_tricks.jpg",
      pictureUrlDesk: "assets/pictures/card_tricks.jpg",
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

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Hero } from '../Models/hero.model';
import { Article } from '../Models/article.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;
  articlesOpen = [false, false, false, false];
  contentsOpen = [false, false, false, false];

  horses = [
    '../../assets/gallery/Pferde/DSC02054.JPG', '../../assets/gallery/Pferde/DSC02095.JPG', '../../assets/gallery/Pferde/DSC02176.JPG', '../../assets/gallery/Pferde/DSC02206.JPG', '../../assets/gallery/Pferde/DSC02755.JPG'
  ]
  ratiosHorses= [
    'p', 'p', 'l', 'p', 'l'
  ]
  maya = [
    '../../assets/gallery/Maya/1.jpg','../../assets/gallery/Maya/4.jpg','../../assets/gallery/Maya/19.jpg', '../../assets/gallery/Maya/DSC02846.JPG','../../assets/gallery/Maya/DSC02854.JPG',
  ]
  ratiosMaya= [
    'l', 'p', 'l', 'l', 'p'
  ]

  me = [
    '../../assets/gallery/Ich/4.jpg','../../assets/gallery/Ich/5.jpg','../../assets/gallery/Ich/6.jpg', '../../assets/gallery/Ich/7.jpg','../../assets/gallery/Ich/8.jpg','../../assets/gallery/Ich/9.jpg','../../assets/gallery/Ich/10.jpg',
  ]
  ratiosMe= [
    'p', 'p', 'l', 'l', 'l', 'p', 'p', 'p'
  ]
  dogs = [
    '../../assets/gallery/Hunde/11.jpg','../../assets/gallery/Hunde/19.jpg','../../assets/gallery/Hunde/20.jpg', '../../assets/gallery/Hunde/35.jpg','../../assets/gallery/Hunde/DSC02449.JPG'
  ]
  ratiosDogs= [
    'l', 'l', 'l', 'l', 'l'
  ]

  chosenContent= [
    '../../assets/pictures/dummy1.JPG', '../../assets/pictures/dummy2.jpg', '../../assets/pictures/dummy3.jpg', '../../assets/pictures/dummy4.jpg', '../../assets/pictures/dummy5.jpg', '../../assets/pictures/dummy6.jpg'
  ]
  ratios= [
    'p', 'l', 'l', 'p', 'l', 'l'
  ]

  frameArticles: Article[] = [
    {
      id: "frame-gallery-dogs",
      pictureUrl: "../../../assets/gallery/DSC02448.JPG",
      title: "Hunde",
      subtitle: "",
      text: "",
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "frame-gallery-me",
      pictureUrl: "../../../assets/gallery/5.jpg",
      title: "Sally",
      subtitle: "",
      text: "",
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "frame-gallery-maya",
      pictureUrl: "../../../assets/gallery/DSC02101.JPG",
      title: "Maya",
      subtitle: "",
      text: "",
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
    {
      id: "frame-gallery-horses",
      pictureUrl: "../../../assets/gallery/DSC02176.JPG",
      title: "Pferde",
      subtitle: "",
      text: "",
      expendable: false,
      expand: [
        {
          id: "",
          title: "",
          text: ``,
        },
      ]
    },
  ]

  pictureHeight = 110.84;
  leftArrowActive = false;
  rightArrowActive = true;

  screenWidth = window.innerWidth;
  activeFrame = 0;
  swipeCoord = 0;

  closeOthers(openFrame: number, open: boolean){
    for (let i = 0; i<this.articlesOpen.length; i++){
      this.articlesOpen[i] = false;
    }
    if(open){
      this.articlesOpen[openFrame] = true;
      switch(openFrame){
        case 0: {
          this.chosenContent = this.dogs;
          this.ratios = this.ratiosDogs;
          break;
        }
        case 1: {
          this.chosenContent = this.me;
          this.ratios = this.ratiosMe;
          break;
        }
        case 2: {
          this.chosenContent = this.maya;
          this.ratios = this.ratiosMaya;
          break;
        }
        case 3: {
          this.chosenContent = this.horses;
          this.ratios = this.ratiosHorses;
          break;
        }
      }
    }
  }

  closeContents(frameOne: number, frameTwo: number){
    this.articlesOpen[frameOne] = false;
    this.articlesOpen[frameTwo] = false;
  }
  closeContentsMobile(frame: number){
    this.articlesOpen[frame] = false;
  }

  currentSlide(dotNr: number)
  {
    this.showSlide(dotNr);
  }

  onClick(direction: string): void{
    if(direction === "left")
    {
      this.showSlide(this.activeFrame-=1);
    } else{
      this.showSlide(this.activeFrame+=1);
    }


  }
  showSlide(n: number)
  {
    if (this.ratios[n]==="p")
    {
      this.pictureHeight = 110.84;
    } else{
      this.pictureHeight = 62.51;
    }
    if(n > this.chosenContent.length-1)
    {
      this.activeFrame=0
    } else if(n < 0){
      this.activeFrame = this.chosenContent.length-1
    } else {
      this.activeFrame = n
    }
  }

  onSwipe(e: TouchEvent, when: string): void
  {
    const coord: number = e.changedTouches[0].clientX;
    if (when === 'start'){
      this.swipeCoord = coord;
    } else if (when === 'end'){
      const direction = coord - this.swipeCoord;
      if(direction > 0)
      {
        this.onClick("left")
        console.log("left")
      }else{
        this.onClick("right")
        console.log("right")
      }
    }
  }

  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}

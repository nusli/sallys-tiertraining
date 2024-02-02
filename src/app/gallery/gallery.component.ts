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
    '../../assets/gallery/Pferde/10a.jpg', '../../assets/gallery/Pferde/DSC02054.JPG', '../../assets/gallery/Pferde/DSC02060.JPG', '../../assets/gallery/Pferde/DSC02155.JPG', '../../assets/gallery/Pferde/DSC02532.JPG', '../../assets/gallery/Pferde/DSC02635.JPG', '../../assets/gallery/Pferde/DSC02721.JPG'
  ]
  ratiosHorses= [
    "l","p","p","l","p","l","l","p"
  ]
  maya = [
    '../../assets/gallery/Maya/240201.jpg','../../assets/gallery/Maya/240202.jpg','../../assets/gallery/Maya/240203.jpg','../../assets/gallery/Maya/240204.jpg','../../assets/gallery/Maya/240205.jpg','../../assets/gallery/Maya/240206.jpg','../../assets/gallery/Maya/240207.jpg','../../assets/gallery/Maya/240208.jpg','../../assets/gallery/Maya/240209.jpg','../../assets/gallery/Maya/240210.jpg','../../assets/gallery/Maya/240211.jpg',
    '../../assets/gallery/Maya/1.jpg','../../assets/gallery/Maya/11.jpg','../../assets/gallery/Maya/DSC02103.JPG','../../assets/gallery/Maya/DSC02969.JPG','../../assets/gallery/Maya/DSC02993.JPG','../../assets/gallery/Maya/DSC03055.JPG',
  ]
  ratiosMaya= [
    "p", "p", "p", "l", "l", "p", "l", "l", "p", "l", "l", "l", "l", "p", "l", "l", "l"
  ]

  me = [
    '../../assets/gallery/Ich/1.jpg','../../assets/gallery/Ich/2.jpg','../../assets/gallery/Ich/5.jpg', '../../assets/gallery/Ich/6.jpg','../../assets/gallery/Ich/7.jpg','../../assets/gallery/Ich/8.jpg','../../assets/gallery/Ich/9.jpg','../../assets/gallery/Ich/10.jpg','../../assets/gallery/Ich/11.jpg',
  ]
  ratiosMe= [
    'p', 'p', 'p', 'l', 'l', 'l', 'p', 'p', 'p'
  ]
  dogs = [
    '../../assets/gallery/Hunde/1.jpg','../../assets/gallery/Hunde/8.jpg','../../assets/gallery/Hunde/12.jpg', '../../assets/gallery/Hunde/16.jpg','../../assets/gallery/Hunde/22.jpg', '../../assets/gallery/Hunde/36.jpg','../../assets/gallery/Hunde/DSC01809.JPG','../../assets/gallery/Hunde/DSC01983.JPG','../../assets/gallery/Hunde/DSC02065.JPG','../../assets/gallery/Hunde/DSC02071.JPG'
  ]
  ratiosDogs= [
    "p", "p", "p", "p", "l", "p", "p", "p", "l", "p"
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
      pictureUrl: "../../../assets/pictures/frame_dogs.JPG",
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
      pictureUrl: "../../../assets/pictures/frame_me.jpg",
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
      pictureUrl: "../../../assets/gallery/Maya/240204.jpg",
      title: "Maya und Biene",
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
      pictureUrl: "../../../assets/pictures/frame_horse.JPG",
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

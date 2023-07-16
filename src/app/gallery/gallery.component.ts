import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  articlesOpen = [false, false, false, false];
  contentsOpen = [false, false, false, false];
  chosenContent= [
    '../../assets/pictures/dummy1.JPG', '../../assets/pictures/dummy2.jpg', '../../assets/pictures/dummy3.jpg', '../../assets/pictures/dummy4.jpg', '../../assets/pictures/dummy5.jpg', '../../assets/pictures/dummy6.jpg'
  ]
  leftArrowActive = false;
  rightArrowActive = true;

  direction = 'right';
  screenWidth = window.innerWidth;

  closeOthers(openFrame: number, open: boolean){
    for (let i = 0; i<this.contentsOpen.length; i++){
      this.contentsOpen[i] = false;
    }
    if(open){
      for (let i = 0; i<this.articlesOpen.length; i++){
        this.articlesOpen[i] = false;
      }
      this.articlesOpen[openFrame] = true;
    }
    console.log(this.articlesOpen)
  }
  closeContents(frameOne: number, frameTwo: number){
    this.contentsOpen[frameOne] = false;
    this.contentsOpen[frameTwo] = false;
  }

  onClick(direction: string): void{
    this.direction = direction;
    this.move();
  }
  move(){
    const slidesContainer = document.querySelector("#gallery-slides-container");
    if(this.direction == "left"){
      this.rightArrowActive = true;
      if(slidesContainer!.scrollLeft - slidesContainer!.clientWidth <= 0){
        this.leftArrowActive = false;
        this.direction = "right";
      }
      slidesContainer!.scrollLeft -= slidesContainer!.clientWidth;

    }else{
      this.leftArrowActive = true;
      console.log(slidesContainer!.scrollLeft, this.screenWidth)
      if(slidesContainer!.scrollLeft + 0.7722*this.screenWidth >= slidesContainer!.scrollWidth - 0.7722*this.screenWidth){
        this.rightArrowActive = false;
        this.direction = "left";
      }
      slidesContainer!.scrollLeft += 0.7722*this.screenWidth;
    }
  }
}

import { Component } from '@angular/core';

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

  direction = 'left';

  closeOthers(openFrame: number, open: boolean){
    console.log(openFrame, open);
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

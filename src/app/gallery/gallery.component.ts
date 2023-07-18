import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  articlesOpen = [false, false, false, false];
  chosenContent= [
    '../../assets/pictures/dummy1.JPG', '../../assets/pictures/dummy2.jpg', '../../assets/pictures/dummy3.jpg', '../../assets/pictures/dummy4.jpg', '../../assets/pictures/dummy5.jpg', '../../assets/pictures/dummy6.jpg'
  ]
  leftArrowActive = false;
  rightArrowActive = true;

  screenWidth = window.innerWidth;
  activeFrame = 0;

  closeOthers(openFrame: number, open: boolean){
    for (let i = 0; i<this.articlesOpen.length; i++){
      this.articlesOpen[i] = false;
    }
    if(open){
      this.articlesOpen[openFrame] = true;
    }
  }

  closeContents(frameOne: number, frameTwo: number){
    this.articlesOpen[frameOne] = false;
    this.articlesOpen[frameTwo] = false;
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
    if(n > this.chosenContent.length-1)
    {
      this.activeFrame=0
    } else if(n < 0){
      this.activeFrame = this.chosenContent.length-1
    } else {
      this.activeFrame = n
    }
  }
}

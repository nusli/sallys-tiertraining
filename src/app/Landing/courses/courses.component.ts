import { Component, Input, OnInit } from '@angular/core';

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

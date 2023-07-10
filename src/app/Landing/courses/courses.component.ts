import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  leftArrowActive = false;
  rightArrowActive = true;
  direction = "right"

  constructor() { }

  ngOnInit(): void {
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

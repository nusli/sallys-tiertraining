import { Component, Input, OnInit } from '@angular/core';
import { News } from '../Models/news.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() mobilePortrait = false;
  @Input() newsAvailable = true;
  @Input() ctaOn = true;
  activeNews = 0;
  activeRoute = "/";

  news: News[] = [
  ];

  dosbOpen = false;
  zeugnisOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          //do something on start activity
          this.activeRoute = event.url;
          if(this.activeRoute === "/Kontakt"){
            this.ctaOn = false;
          }else{
            this.ctaOn = true;
          }
      }
  });
  }

  ngOnInit(): void {

  }
  changeNews(z:number){
    if(z===1){
      if(this.activeNews != this.news.length - 1){
        this.activeNews++;
      }
    }else{
      if(this.activeNews != 0){
        this.activeNews--;
      }
    }
  }

}

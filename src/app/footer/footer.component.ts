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
/*     {
      id: "20230727",
      pictureUrl: "../../assets/backgrounds/news/mantrailing_news2.jpg",
      title: "Mantrailing ab August",
      text: "Ab dem 10. August findet jeweils donnerstags 19Uhr Mantrailing statt."
    },
    {
      id: "dummy",
      pictureUrl: "../../assets/backgrounds/news/news-dummy.jpg",
      title: "Aktuell findet nix Spannendes statt",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    }, */
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

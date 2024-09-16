import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
    //Rowdygruppe
    {
      id: "rowdy",
    pictureUrl: "../../../assets/pictures/rowdy_news.jpg",
    title: "Rowdy-Gruppe",
    text: "Du möchtest gerne zusammen mit deinem Hund in einer kleinen Gruppe etwas unternehmen und an der Alltagstauglichkeit arbeiten? Ab dem 13. Oktober 2024 biete ich einen zweiteiligen Rowdy-Kurs an. Schreib dich schnell ein, denn die Plätze sind aufgrund des intensiven Trainings sehr begrenzt."
  },
  //Silvester
  {
    id: "silvester",
  pictureUrl: "../../../assets/pictures/silvester.jpg",
  title: "Silvester ohne Stress",
    text:`Silvester ist für viele Hunde eine stressige Zeit. Die lauten Geräusche und das ungewohnte Licht können Angst und Unruhe auslösen. In unserem speziellen Silvester-Training ab dem 13. Oktober lernst du an insgesamt fünf Terminen, wie du deinen Hund optimal auf diese Herausforderung vorbereiten können. Schreib dich schnell ein, denn die Plätze sind aufgrund des intensiven Trainings sehr begrenzt.`
}
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

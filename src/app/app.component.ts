import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Hero } from './Models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cookiesAccepted = false;
  title = 'sallys-tiertraining';
  mobilePortrait = false;
  activeRoute = "/";
  heroes: Hero[] = [
    {
      id:"individual",
      pictureUrl: "../../../assets/backgrounds/heroes/einzel3.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/einzel3_desk.jpg",
      title: "Einzeltraining für Hunde",
      subtitle: "CATCHPHRASE EINZELTRAINING",
      text: "EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING"
    },
    {
      id:"group",
      pictureUrl: "../../../assets/backgrounds/heroes/group.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/group_desk.jpg",
      title: "Gruppentraining für Hunde",
      subtitle: "CATCHPHRASE EINZELTRAINING",
      text: "EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING"
    },
    {
      id:"me",
      pictureUrl: "../../../assets/backgrounds/heroes/me.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/me_desk.jpg",
      title: "Das bin ich",
      subtitle: "CATCHPHRASE ME",
      text: "EINLEITUNGSTEXT ME EINLEITUNGSTEXT ME EINLEITUNGSTEXT ME EINLEITUNGSTEXT ME EINLEITUNGSTEXT ME EINLEITUNGSTEXT ME"
    },
    {
      id:"horse",
      pictureUrl: "../../../assets/backgrounds/heroes/pferde.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/pferde_desk.JPG",
      title: "Pferdereiten",
      subtitle: "CATCHPHRASE PFERDEREITEN",
      text: "EINLEITUNGSTEXT PFERDEREITEN EINLEITUNGSTEXT PFERDEREITEN EINLEITUNGSTEXT PFERDEREITEN EINLEITUNGSTEXT PFERDEREITEN EINLEITUNGSTEXT PFERDEREITEN EINLEITUNGSTEXT PFERDEREITEN"
    },
    {
      id:"gallery",
      pictureUrl: "../../../assets/backgrounds/heroes/gallery.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/gallery_desk.JPG",
      title: "Galerie",
      subtitle: "CATCHPHRASE Galerie",
      text: "EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie"
    },
    {
      id:"glossar",
      pictureUrl: "../../../assets/backgrounds/heroes/glossar.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/glossar_desk.JPG",
      title: "Glossar",
      subtitle: "CATCHPHRASE Glossar",
      text: "EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar"
    },
    {
      id:"contact",
      pictureUrl: "../../../assets/backgrounds/heroes/contact.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/contact_desk.JPG",
      title: "Kontakt",
      subtitle: "CATCHPHRASE Kontakt",
      text: "EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt"
    },
    {
      id:"impressum",
      pictureUrl: "../../../assets/backgrounds/heroes/impressum.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/impressum_desk.JPG",
      title: "Impressum",
      subtitle: "CATCHPHRASE Impressum",
      text: "EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum"
    },

  ]
  activeHero = this.heroes[0]
  heroUrl = "";




  constructor(private responsive: BreakpointObserver, private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          //do something on start activity
          this.activeRoute = event.url;
          this.setHeroToActiveRoute();

      }
/*
      if (event instanceof NavigationError) {
          // Handle error
          console.error(event.error);
      } */

      if (event instanceof NavigationEnd) {
          //do something on end activity

          console.log("Ende")
      }
  });
  }
  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall, Breakpoints.Small])
    .subscribe(result => {
      if (result.matches){
        this.mobilePortrait = true;
      }
    })
    this.responsive.observe(Breakpoints.Large)
    .subscribe(result => {
      if (result.matches){
        this.mobilePortrait = false;
      }
    })
  }

  onOutletLoaded(component:any){
    component.mobilePortrait = this.mobilePortrait;
    console.log("Outlet loaded");
    component.hero = this.activeHero;
  }

  setHeroToActiveRoute()
  {
    switch(this.activeRoute){
      case "/Hundegruppentraining": {
        this.activeHero = this.heroes[1];
        break;
      }
      case "/Hundeeinzeltraining": {
        this.activeHero = this.heroes[0];
        break;
      }
      case "/Reitunterricht": {
        this.activeHero = this.heroes[3];
        break;
      }
      case "/DasBinIch": {
        this.activeHero = this.heroes[2];
        break;
      }
      case "/Galerie": {
        this.activeHero = this.heroes[4];
        break;
      }
      case "/Glossar": {
        this.activeHero = this.heroes[5];
        break;
      }
      case "/Kontakt": {
        this.activeHero = this.heroes[6];
        break;
      }
      case "/Impressum": {
        this.activeHero = this.heroes[7];
        break;
      }
    }
  }
}

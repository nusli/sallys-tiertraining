import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Hero } from './Models/hero.model';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

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
  browserWithoutA = false;
  heroes: Hero[] = [
    {
      id:"individual",
      pictureUrl: "../../../assets/backgrounds/heroes/einzel3.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/einzel3_desk.jpg",
      title: "Einzeltraining Hunde",
      subtitle: "CATCHPHRASE EINZELTRAINING",
      text: "EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING "
    },
    {
      id:"group",
      pictureUrl: "../../../assets/backgrounds/heroes/group.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/group_desk.jpg",
      title: "Gruppentraining Hunde",
      subtitle: "CATCHPHRASE EINZELTRAINING",
      text: "EINLEITUNGSTEXT EINZELTRAINING EINLEITUNGSTEXT EINZELTRAINING "
    },
    {
      id:"me",
      pictureUrl: "../../../assets/backgrounds/heroes/me.jpg",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/me_desk.jpg",
      title: "Das bin ich",
      subtitle: "CATCHPHRASE ME",
      text: "EINLEITUNGSTEXT ME EINLEITUNGSTEXT "
    },
    {
      id:"horse",
      pictureUrl: "../../../assets/backgrounds/heroes/pferde.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/pferde_desk.JPG",
      title: "Pferdereiten",
      subtitle: "CATCHPHRASE PFERDEREITEN",
      text: "EINLEITUNGSTEXT PFERDEREITEN EINLEITUNGSTEXT PFERDEREITEN "
    },
    {
      id:"gallery",
      pictureUrl: "../../../assets/backgrounds/heroes/gallery.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/gallery_desk.JPG",
      title: "Galerie",
      subtitle: "CATCHPHRASE Galerie",
      text: "EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie EINLEITUNGSTEXT Galerie"
    },
    {
      id:"glossar",
      pictureUrl: "../../../assets/backgrounds/heroes/glossar.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/glossar_desk.JPG",
      title: "Glossar",
      subtitle: "CATCHPHRASE Glossar",
      text: "EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar EINLEITUNGSTEXT Glossar "
    },
    {
      id:"contact",
      pictureUrl: "../../../assets/backgrounds/heroes/contact.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/contact_desk.JPG",
      title: "Kontakt",
      subtitle: "CATCHPHRASE Kontakt",
      text: "EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt EINLEITUNGSTEXT Kontakt"
    },
    {
      id:"impressum",
      pictureUrl: "../../../assets/backgrounds/heroes/impressum.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/impressum_desk.JPG",
      title: "Impressum",
      subtitle: "",
      text: "EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum EINLEITUNGSTEXT Impressum"
    },
    {
      id:"partner",
      pictureUrl: "../../../assets/backgrounds/heroes/impressum.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/impressum_desk.JPG",
      title: "Partner und Sponsoren",
      subtitle: "",
      text: "EINLEITUNGSTEXT Partner EINLEITUNGSTEXT Partner EINLEITUNGSTEXT Partner"
    },
    {
      id:"qualis",
      pictureUrl: "../../../assets/backgrounds/heroes/impressum.JPG",
      pictureUrlDesk: "../../../assets/backgrounds/heroes/impressum_desk.JPG",
      title: "Qualifikationen",
      subtitle: "",
      text: "EINLEITUNGSTEXT Qualifikationen EINLEITUNGSTEXT Qualifikationen EINLEITUNGSTEXT Qualifikationen"
    },

  ]
  activeHero = this.heroes[0]
  heroUrl = "";
  openArticles = [false, false, false, false]
  deviceInfo!: DeviceInfo;
  focussedArticle = "";



  constructor(private responsive: BreakpointObserver, private router: Router, private route: ActivatedRoute, private deviceDetectorService: DeviceDetectorService){
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
      }
  });
  }
  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    if(this.deviceInfo['browser']==="MS-Edge-Chromium" || this.deviceInfo['browser']==="Chrome"){
      this.browserWithoutA = true;
    }


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
    this.route.queryParams.subscribe(params =>{
      switch(params['openArticle']){
        case "0": {
          this.openArticles = [true, false, false, false];
          break;
        }
        case "1": {
          this.openArticles = [false, true, false, false];
          break;
        }
        case "2": {
          this.openArticles = [false, false, true, false];
          break;
        }
        case "3": {
          this.openArticles = [false, false, false, true];
          break;
        }
      }
      this.focussedArticle = params['article'];
    })

  }

  onOutletLoaded(component:any){
    component.mobilePortrait = this.mobilePortrait;
    component.hero = this.activeHero;
    component.openArticles = this.openArticles;
    component.article = this.focussedArticle;
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
      case "/PartnerUndSponsoren": {
        this.activeHero = this.heroes[8];
        break;
      }
      case "/Qualifikationen": {
        this.activeHero = this.heroes[9];
        break;
      }
    }
  }
}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Hero } from './Models/hero.model';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cookiesAccepted!:boolean;
  title = 'sallys-tiertraining';
  mobilePortrait = false;
  activeRoute = "/";
  browserWithoutA = false;
  heroes: Hero[] = [
    {
      id:"individual",
      pictureUrl: "./assets/backgrounds/heroes/einzel_mobile.jpg",
      pictureUrlDesk: "./assets/backgrounds/heroes/einzel_desk.JPG",
      title: "Einzeltraining Hunde",
      subtitle: "Aller Anfang ist schwer?!",
      text: `Einzigartige Hunde brauchen individuelle Lösungen. In meinem Einzeltraining können wir ihre „Baustellen“ gezielt analysieren und finden gemeinsam Lösungen für ein entspannteres Zusammenleben.`
    },
    {
      id:"group",
      pictureUrl: "./assets/backgrounds/heroes/gruppe_mobile.JPG",
      pictureUrlDesk: "./assets/backgrounds/heroes/gruppe_desk.JPG",
      title: "Gruppentraining Hunde",
      subtitle: "Vom Tollpatsch zum Akrobaten",
      text: `Du willst deinem Hund eine Aufgabe oder Beschäftigung geben? Dafür habe ich in meinem Gruppentraining verschiedene Wege, nicht nur deinem vierbeinigen Freund körperlich und kognitiv gerecht zu werden, sondern auch für viel gemeinsamen Spaß zu sorgen.
      Bitte beachte, dass die Voraussetzung für eine Gruppenstunde mindestens eine Einzelstunde ist.
      `
    },
    {
      id:"me",
      pictureUrl: "./assets/backgrounds/heroes/me_mobile.jpg",
      pictureUrlDesk: "./assets/backgrounds/heroes/me_desk.jpg",
      title: "Das bin ich",
      subtitle: "Sally Davidson (mit meinen Hunden Maya und Biene)",
      text: "Ich bin einfach tierverrückt. Mehr ist eigentlich nicht zu sagen."
    },
    {
      id:"horse",
      pictureUrl: "./assets/backgrounds/heroes/pferde_hero.jpg",
      pictureUrlDesk: "./assets/backgrounds/heroes/pferde_hero.jpg",
      title: "Pferdereiten",
      subtitle: "Glück auf vier Hufen",
      text: "Was lange aufgebaut wird, bleibt lange gut. Ich helfe dir sowohl deine Fähigkeiten als auch die deines Pferdes langfristig zu verbessern. Egal ob du ein Turnierziel verfolgst, dein Pferd gesund halten willst oder ihr einfach zusammen Spaß haben wollt, einer meiner Trainings ist das Richtige für dich, um dich in der nötigen Arbeit mit deinem Pferd zu unterstützen."
    },
    {
      id:"gallery",
      pictureUrl: "./assets/backgrounds/heroes/gallery_mobile.JPG",
      pictureUrlDesk: "./assets/backgrounds/heroes/gallery_desk.JPG",
      title: "Galerie",
      subtitle: "Einige Eindrücke",
      text: "Hier kannst du dir selbst ein Bild von Maya, mir und meiner Arbeit machen."
    },
    {
      id:"contact",
      pictureUrl: "./assets/backgrounds/heroes/kontakt_mobile.jpg",
      pictureUrlDesk: "./assets/backgrounds/heroes/kontakt_desk.jpg",
      title: "Kontakt",
      subtitle: "Wie kann ich dir helfen?",
      text: "Wenn du fragen hast, melde dich gerne."
    },
    {
      id:"impressum",
      pictureUrl: "./assets/backgrounds/heroes/impressum.JPG",
      pictureUrlDesk: "./assets/backgrounds/heroes/impressum.JPG",
      title: "Impressum",
      subtitle: "",
      text: ""
    },
    {
      id:"qualis",
      pictureUrl: "./assets/backgrounds/heroes/quali_mobile.JPG",
      pictureUrlDesk: "./assets/backgrounds/heroes/quali_desk.JPG",
      title: "Qualifikationen",
      subtitle: "",
      text: "Hier findest du meine Qualifikationen"
    },
    {
      id:"stable",
      pictureUrl: "./assets/backgrounds/heroes/anlage.JPG",
      pictureUrlDesk: "./assets/backgrounds/heroes/anlage.JPG",
      title: "Unser Reitstall",
      subtitle: "",
      text: "Willkommen in unserem Reitstall, wo sowohl Pferde als auch Reiter im Mittelpunkt stehen. Unser Stall zeichnet sich durch eine freundliche und professionelle Atmosphäre aus, die von unseren engagierten Mitarbeiterinnen geprägt wird."
    },
    {
      id:"pension",
      pictureUrl: "./assets/backgrounds/heroes/stall_boxen.JPG",
      pictureUrlDesk: "./assets/backgrounds/heroes/stall_boxen.JPG",
      title: "Pension",
      subtitle: "",
      text: "Die Pferdepension ist der ideale Ort für dein Pferd, um in einer sicheren und liebevollen Umgebung zu leben. Wir freuen uns darauf, dich und dein Pferd bei uns willkommen zu heißen."
      },
    {
      id:"stangenlehrgang",
      pictureUrl: "./assets/pictures/training_setup.jpg",
      pictureUrlDesk: "./assets/pictures/training_setup.jpg",
      title: "Stangenlehrgang",
      subtitle: "Am 16.08.2025 und 17.08.2025",
      text: "Mit Sally Davidson (Trainer A-Lizenz)"
    },

  ]
  activeHero = this.heroes[0]
  heroUrl = "";
  openArticles = [false, false, false, false]
  deviceInfo!: DeviceInfo;
  focussedArticle = "";



  constructor(private cookieService: CookieService, private responsive: BreakpointObserver, private router: Router, private route: ActivatedRoute, private deviceDetectorService: DeviceDetectorService){

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          //do something on start activity
          this.activeRoute = event.url;
          this.setHeroToActiveRoute();

      }

      if (event instanceof NavigationEnd) {
          //do something on end activity
      }
  });
  }
  ngOnInit(): void {
    if(this.cookieService.get('name')==="sallys-tiertraining"){
      console.log(this.cookieService.get('name'));
      this.cookiesAccepted = true;
    }
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
      case "/Kontakt": {
        this.activeHero = this.heroes[5];
        break;
      }
      case "/Impressum": {
        this.activeHero = this.heroes[6];
        break;
      }
      case "/Qualifikationen": {
        this.activeHero = this.heroes[7];
        break;
      }
      case "/Reitstall": {
        this.activeHero = this.heroes[8];
        break;
      }
      case "/Pension": {
        this.activeHero = this.heroes[9];
        break;
      }
      case "/special/stangenlehrgang": {
        this.activeHero = this.heroes[10];
        break;
      }
    }
  }
}
